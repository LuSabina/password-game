import { render, screen } from "@testing-library/react";
import { db } from "../mocks/db";
import Weather from "../../src/components/Weather";

describe("Weather", () => {
  it("should render weather informations", async () => {
    const weather = db.weather.create();

    render(<Weather />);

    const temperature = await screen.findByText(
      new RegExp(weather.temperature, "i")
    );
    const description = await screen.findByText(weather.description);

    expect(temperature).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });
});
