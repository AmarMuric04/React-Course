import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Greeting component", () => {
  test("successfully displaying Hello World!", () => {
    // Arrange
    render(<Greeting />);

    // Act
    //.......

    // Assert
    const helloWorldElement = screen.getByText(/hello world/i);
    expect(helloWorldElement).toBeInTheDocument();
  });

  test("renders greeting text", () => {
    render(<Greeting />);

    const greetingTextElement = screen.getByText(/good to see/i, {
      exact: false,
    });
    expect(greetingTextElement).toBeInTheDocument();
  });

  test("renders changed if the button was clicked", () => {
    render(<Greeting />);

    // Act
    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    // Assert
    const changedTextElement = screen.getByText("Changed!");
    expect(changedTextElement).toBeInTheDocument();
  });

  test("doesn't render original text when button is clicked", () => {
    render(<Greeting />);

    const buttonElement = screen.getByText("Change text!");
    userEvent.click(buttonElement);

    const originalText = screen.queryByText(/good to see/i, { exact: false });
    expect(originalText).toBeNull();
  });
});
