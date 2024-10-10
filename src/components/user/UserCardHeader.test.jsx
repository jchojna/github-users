import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import UserCardHeader from "./UserCardHeader";

describe("UserCardHeader", () => {
  const user = {
    login: "john_doe",
    avatar_url: "https://example.com/avatar.png",
    name: "John Doe",
    hireable: true,
    html_url: "https://github.com/john_doe",
  };

  it("should render the avatar with the correct src and alt attributes", () => {
    render(<UserCardHeader {...user} />);

    const avatar = screen.getByRole("img", { name: user.login });
    expect(avatar).toHaveAttribute("src", user.avatar_url);
    expect(avatar).toHaveAttribute("alt", user.login);
  });

  it("should render the name if provided", () => {
    render(<UserCardHeader {...user} />);

    const nameElement = screen.getByText(user.name);
    expect(nameElement).toBeInTheDocument();
  });

  it("should render the login if name is not provided", () => {
    const { name, ...userWithoutName } = user;
    render(<UserCardHeader {...userWithoutName} />);

    const loginElement = screen.getByText(user.login);
    expect(loginElement).toBeInTheDocument();
  });

  it("should render the link with the correct href", () => {
    render(<UserCardHeader {...user} />);

    const link = screen.getByRole("link", { name: user.name });
    expect(link).toHaveAttribute("href", user.html_url);
  });

  it("should render the hireable message if user is hireable", () => {
    render(<UserCardHeader {...user} />);

    const badge = screen.getByText(/open to work/i);
    expect(badge).toBeInTheDocument();
  });

  it("should not render the hireable message if user is not hireable", () => {
    const userNotHireable = { ...user, hireable: false };
    render(<UserCardHeader {...userNotHireable} />);

    const badge = screen.queryByText(/open to work/i);
    expect(badge).not.toBeInTheDocument();
  });
});
