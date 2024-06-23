import Greeting from "./Greeting";
import { render, screen } from "@testing-library/react";

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
});
