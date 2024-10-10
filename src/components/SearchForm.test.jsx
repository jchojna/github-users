import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { CONSTS } from "../utils/constants";
import SearchForm from "./SearchForm";

describe("SearchForm", () => {
  const mockOnSearchChange = vi.fn();
  const mockOnSearchSubmit = vi.fn();

  beforeEach(() => {
    mockOnSearchChange.mockClear();
    mockOnSearchSubmit.mockClear();
  });

  it("should render the form with input", () => {
    render(
      <SearchForm
        onSearchChange={mockOnSearchChange}
        onSearchSubmit={mockOnSearchSubmit}
      />,
    );

    expect(
      screen.getByRole("textbox", { name: CONSTS.label.searchInput }),
    ).toBeInTheDocument();
  });

  it("should call onSearchChange when input value changes", () => {
    render(
      <SearchForm
        onSearchChange={mockOnSearchChange}
        onSearchSubmit={mockOnSearchSubmit}
      />,
    );

    const input = screen.getByLabelText(CONSTS.label.searchInput);
    fireEvent.change(input, { target: { value: "new value" } });

    expect(mockOnSearchChange).toHaveBeenCalled();
  });
});
