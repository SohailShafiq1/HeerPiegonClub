import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "./Weather.module.css";
const s = styles;

function Weather() {
  const [weather, setWeather] = useState(null);

  const apiKey = "9c03ae49705801d954820517e5c354e8";
  const city = "Kot jamel";

  useEffect(() => {
    const getWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    getWeather();
  }, []);

  return (
    <div className={s.weather}>
      <h1>Weather App</h1>
      {weather ? (
        <div className={s.weathercontainer}>
          <h2>
            {weather.name}, {weather.sys.country}
          </h2>
          <p>{weather.main.temp}°C</p>
          <p>{weather.weather[0].main}</p>
        </div>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}

export default Weather;
