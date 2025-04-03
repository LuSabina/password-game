import { render, screen } from "@testing-library/react";
import TextInput from "../../src/components/TextInput";
import { describe } from "vitest";

describe("TextInput", () => {
  it("should render an input field for name", () => {
    render(<TextInput placeholder={"what is your name"} />);

    const input = screen.getByPlaceholderText(/what/i);
    expect(input).toBeInTheDocument();
  });
});
