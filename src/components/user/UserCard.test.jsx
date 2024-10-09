import "@testing-library/jest-dom";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { render, screen } from "@testing-library/react";
import { beforeEach, describe, it, vi } from "vitest";
import { fetchDetails } from "../../utils/fetch";
import UserCard from "./UserCard";

vi.mock("../../utils/fetch");
let queryClient;

const createQueryClient = () => {
  return new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });
};

const renderWithQueryClient = (ui) => {
  return render(
    <QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>,
  );
};

describe("UserCard", () => {
  beforeEach(() => {
    fetchDetails.mockClear();
    queryClient = createQueryClient();
  });

  it("renders loading state", async () => {
    fetchDetails.mockReturnValueOnce(new Promise(() => {}));
    renderWithQueryClient(
      <UserCard url="https://api.github.com/users/testuser" />,
    );
    expect(screen.getByTestId("userPlaceholder")).toBeInTheDocument();
  });

  it("renders error state", async () => {
    fetchDetails.mockRejectedValueOnce(new Error("Network error"));
    renderWithQueryClient(
      <UserCard url="https://api.github.com/users/testuser" />,
    );
    expect(await screen.findByTestId("userCardError")).toBeInTheDocument();
    expect(await screen.getByText(/Network error/)).toBeInTheDocument();
  });

  it("renders cards components", async () => {
    const mockData = {
      login: "testuser",
      avatar_url: "https://example.com/avatar.jpg",
      url: "https://api.github.com/users/testuser",
    };
    fetchDetails.mockResolvedValueOnce(mockData);
    renderWithQueryClient(
      <UserCard url="https://api.github.com/users/testuser" />,
    );

    expect(await screen.findByTestId("userCardHeader")).toBeInTheDocument();
    expect(await screen.findByTestId("userCardContent")).toBeInTheDocument();
    expect(await screen.findByTestId("userCardActions")).toBeInTheDocument();
  });
});
