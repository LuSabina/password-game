import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import useStyles from "../styles";

function Weather() {
  const classes = useStyles();
  const [currentWeather, setCurrentWeather] = useState(null);
  const [error, setError] = useState(null);
  const city = "Kraków";
  const country = "pl";
  const apiKey = "49583fff31ae5617ece70aef929b7eec";

  useEffect(
    () => getWeather(city, country, apiKey, setCurrentWeather, setError),
    []
  );
  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {currentWeather && (
        <>
          <Typography sx={classes.footerText}>
            {city} {currentWeather.main.temp}°C
          </Typography>
          <Typography sx={classes.footerText}>
            {currentWeather.weather[0].description}
          </Typography>
        </>
      )}
    </div>
  );
}

export default Weather;

function getWeather(city, country, apiKey, setCurrentWeather, setError) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}&units=metric`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Could not fetch weather");
      }
      return response.json();
    })

    .then((data) => setCurrentWeather(data))
    .catch((error) => setError(error.message));
}
