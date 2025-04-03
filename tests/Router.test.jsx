import { screen } from "@testing-library/react";
import { navigateTo } from "./utils";
import { db } from "./mocks/db";
import userEvent from "@testing-library/user-event";

describe("Router", () => {
  it("should render the home page for /", () => {
    navigateTo("/");

    expect(
      screen.getByRole("heading", { name: /welcome/i })
    ).toBeInTheDocument();
  });

  it("should render the game page for /game", () => {
    navigateTo("/game");

    expect(screen.getByRole("heading", { name: /hi/i })).toBeInTheDocument();
  });

  it("should render the game page with name provided for /game", () => {
    const name = db.name.create();
    Storage.prototype.getItem = vi.fn(() => name.name);

    navigateTo("/game");

    expect(screen.getByRole("heading", { name: /hi/i })).toHaveTextContent(
      new RegExp(`${name.name}`)
    );
  });

  it("should render the not found page for invalid routes", () => {
    navigateTo("/invalid-route");

    expect(
      screen.getByRole("button", { name: /go home/i })
    ).toBeInTheDocument();
  });
});

describe("Key Press Redirect", () => {
  it("should redirect to /game on Enter key press", async () => {
    const name = db.name.create();
    Storage.prototype.getItem = vi.fn(() => name.name);
    navigateTo("/");

    expect(screen.getByText(/welcome/i)).toBeInTheDocument();

    await userEvent.keyboard("{Enter}");

    expect(await screen.findByText(/hi/i)).toBeInTheDocument();
  });
});
