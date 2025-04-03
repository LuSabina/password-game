import { http, HttpResponse } from "msw";
import { db } from "./db";

export const handlers = [
  http.get(/.*api.*/, () => {
    const weatherData = db.weather.getAll()[0];

    return HttpResponse.json({
      main: { temp: weatherData.temperature },
      weather: [{ description: weatherData.description }],
    });
  }),
];
