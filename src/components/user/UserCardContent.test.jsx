import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";

import { getFormattedDate } from "../../utils/dates";
import UserCardContent from "./UserCardContent";

describe("UserCardContent", () => {
  const user = {
    name: "John Doe",
    company: "Example Inc.",
    location: "San Francisco, CA",
    email: "john.doe@example.com",
    bio: "Software Developer",
    public_repos: 57,
    followers: 42,
    following: 12,
    created_at: "2019-03-23T00:00:00Z",
  };

  it("should render the tabs and default to the About tab", () => {
    render(<UserCardContent {...user} />);

    // Check if the tabs are rendered
    expect(screen.getByRole("tab", { name: /about/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /bio/i })).toBeInTheDocument();
    expect(screen.getByRole("tab", { name: /stats/i })).toBeInTheDocument();

    expect(screen.getByText(user.name)).toBeInTheDocument();
    expect(screen.getByText(user.company)).toBeInTheDocument();
    expect(screen.getByText(user.location)).toBeInTheDocument();
    expect(screen.getByText(user.email)).toBeInTheDocument();
    expect(
      screen.getByText(getFormattedDate("2019-03-23T00:00:00Z")),
    ).toBeInTheDocument();
  });

  it("should switch to the Bio tab when clicked", () => {
    render(<UserCardContent {...user} />);
    fireEvent.click(screen.getByRole("tab", { name: /bio/i }));

    expect(screen.getByText(user.bio)).toBeInTheDocument();
  });

  it("should switch to the Stats tab when clicked", () => {
    render(<UserCardContent {...user} />);
    fireEvent.click(screen.getByRole("tab", { name: /stats/i }));

    expect(
      screen.getByText(`${user.public_repos} public repos`),
    ).toBeInTheDocument();
    expect(screen.getByText(`${user.followers} followers`)).toBeInTheDocument();
    expect(screen.getByText(`${user.following} following`)).toBeInTheDocument();
  });

  it("should not render Bio tab if bio is not provided", () => {
    const userWithoutBio = { ...user, bio: null };
    render(<UserCardContent {...userWithoutBio} />);

    expect(screen.queryByRole("tab", { name: /bio/i })).not.toBeInTheDocument();
  });
});
