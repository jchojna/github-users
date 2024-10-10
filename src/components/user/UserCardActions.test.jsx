import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import UserCardActions from "./UserCardActions";

describe("UserCardActions", () => {
  const user = {
    twitter_username: "john_doe",
    blog: "https://example.com/blog",
    html_url: "https://github.com/john_doe",
  };

  it("should render the Twitter icon button if twitter_username is provided", () => {
    render(<UserCardActions {...user} />);

    const twitterLink = screen.getByTestId("twitterLink");
    expect(twitterLink).toBeInTheDocument();
    expect(twitterLink).toHaveAttribute(
      "href",
      `https://x.com/${user.twitter_username}`,
    );
  });

  it("should not render the Twitter icon button if twitter_username is not provided", () => {
    const userWithoutTwitter = { ...user, twitter_username: null };
    render(<UserCardActions {...userWithoutTwitter} />);

    const twitterButton = screen.queryByTestId("twitterLink");
    expect(twitterButton).not.toBeInTheDocument();
  });

  it("should render the Blog icon button if blog is provided", () => {
    render(<UserCardActions {...user} />);

    const blogButton = screen.getByTestId("blogLink");
    expect(blogButton).toBeInTheDocument();
    expect(blogButton).toHaveAttribute("href", user.blog);
  });

  it("should not render the Blog icon button if blog is not provided", () => {
    const userWithoutBlog = { ...user, blog: null };
    render(<UserCardActions {...userWithoutBlog} />);

    const blogButton = screen.queryByTestId("blogLink");
    expect(blogButton).not.toBeInTheDocument();
  });

  it("should render the GitHub button with the correct href", () => {
    render(<UserCardActions {...user} />);

    const githubButton = screen.getByTestId("githubLink");
    expect(githubButton).toBeInTheDocument();
    expect(githubButton).toHaveAttribute("href", user.html_url);
  });
});
