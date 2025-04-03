import { render, screen } from "@testing-library/react";
import AppBody from "../../src/components/AppBody";
import { MemoryRouter } from "react-router-dom";

describe("AppBody", () => {
  const renderComponent = (name = "john") => {
    render(
      <MemoryRouter>
        <AppBody name={name} />
      </MemoryRouter>
    );
  };

  it("should render heading text", () => {
    renderComponent();

    expect(
      screen.getByRole("heading", { name: /welcome/i })
    ).toBeInTheDocument();
  });

  it("should render input field", () => {
    renderComponent();

    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("should put focus on the name field", () => {
    renderComponent();

    expect(screen.getByRole("textbox")).toHaveFocus();
  });

  it("should enable submit button if the input is valid", () => {
    renderComponent();

    expect(screen.getByRole("button")).toBeEnabled();
  });

  it("should disable submit button if the input is invalid", () => {
    renderComponent("j");

    expect(screen.getByRole("button")).toBeDisabled();
  });
});
