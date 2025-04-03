import { render, screen } from "@testing-library/react";
import Game from "../../src/pages/Game";
import { db } from "../mocks/db";
import { describe, expect } from "vitest";
import userEvent from "@testing-library/user-event";

describe("Game", () => {
  it("should render heading with provided name", () => {
    const name = db.name.create();

    Storage.prototype.getItem = vi.fn(() => name.name);

    render(<Game />);

    const heading = screen.getByRole("heading", { name: /hi/i });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(new RegExp(`hi, ${name.name}`, "i"));

    localStorage.removeItem(name.name);
  });

  it("should render input field", () => {
    render(<Game />);

    const inputField = screen.getByLabelText("Enter your password");
    expect(inputField).toBeInTheDocument();
  });

  it("should put focus on the password field", () => {
    render(<Game />);

    expect(screen.getByRole("textbox")).toHaveFocus();
  });
});

describe("Password Validation", () => {
  it("should dynamically update validation messages in order and color", async () => {
    render(<Game />);

    const inputField = screen.getByLabelText(/password/i);
    const red = "#FF0000";
    const green = "#008000";

    //Step 1: No validation messages should be visible initally
    let messages = screen.queryAllByRole("listitem");
    expect(messages).toHaveLength(0);

    //Step 2: Type "abc" - fails "at least 6 characters long", marked in red
    await userEvent.type(inputField, "abc");

    messages = screen.getAllByRole("listitem");
    expect(messages[0]).toHaveTextContent(/6 characters long/i);
    expect(messages[0]).toHaveStyle(`color: ${red}`);

    //Step 3: Type "def" - first condition met, marked in green, new condiotion moved to the top, marked in red
    await userEvent.type(inputField, "def");

    messages = screen.getAllByRole("listitem");
    expect(messages[0]).toHaveTextContent(/1 number/i);
    expect(messages[0]).toHaveStyle(`color: ${red}`);
    expect(messages[1]).toHaveTextContent(/6 characters long/i);
    expect(messages[1]).toHaveStyle(`color: ${green}`);

    //Step 4: Clear inputField and type "12"; fulfilled condition moved to the very bottom, marked in green; other conditions marked in red, the newest one at the top
    await userEvent.clear(inputField);
    await userEvent.type(inputField, "12");

    messages = screen.getAllByRole("listitem");
    expect(messages[2]).toHaveTextContent(/1 number/i);
    expect(messages[2]).toHaveStyle(`color: ${green}`);
    expect(messages[1]).toHaveTextContent(/6 characters long/i);
    expect(messages[1]).toHaveStyle(`color: ${red}`);
    expect(messages[0]).toHaveTextContent(/uppercase letter/i);
    expect(messages[0]).toHaveStyle(`color: ${red}`);
  });
});
