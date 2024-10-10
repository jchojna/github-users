import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import UserDetail from "./UserDetail";

describe("UserDetail", () => {
  it("should render the label and detail correctly", () => {
    const label = "Username";
    const detail = "john_doe";

    render(<UserDetail label={label} detail={detail} />);

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText(detail)).toBeInTheDocument();
  });

  it("should render a dash when detail is null", () => {
    const label = "Username";
    const detail = null;

    render(<UserDetail label={label} detail={detail} />);

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
  });

  it("should render a dash when detail is an empty string", () => {
    const label = "Username";
    const detail = "";

    render(<UserDetail label={label} detail={detail} />);

    expect(screen.getByText(label)).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
  });
});
