import { factory, primaryKey } from "@mswjs/data";
import { faker } from "@faker-js/faker";

export const db = factory({
  weather: {
    id: primaryKey(faker.number.int),
    temperature: () =>
      faker.number.float({ min: -20, max: 35, fractionDigits: 1 }) + "°C",
    description: () =>
      faker.helpers.arrayElement([
        "Sunny",
        "Cloudy",
        "Partly Cloudy",
        "Rainy",
        "Thunderstorms",
        "Snowy",
        "Foggy",
        "Windy",
        "Drizzle",
      ]),
  },
  name: {
    id: primaryKey(faker.number.int),
    name: faker.person.firstName,
  },
});
