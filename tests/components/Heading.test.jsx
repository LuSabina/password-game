import { render, screen } from "@testing-library/react";
import Heading from "../../src/components/Heading";

describe("Heading", () => {
  it("should render provided heading", () => {
    render(<Heading text="game" />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/game/i);
  });
});
