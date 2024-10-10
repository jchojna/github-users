import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";

import Message from "./Message";

describe("Message", () => {
  const image = "https://example.com/image.png";
  const message = "Test message";

  it("should render the image with the correct src and alt attributes", () => {
    render(<Message image={image} message={message} />);

    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute("src", image);
    expect(imgElement).toHaveAttribute("alt", message);
  });

  it("should render the message text", () => {
    render(<Message image={image} message={message} />);

    const messageElement = screen.getByText(message);
    expect(messageElement).toBeInTheDocument();
  });
});
