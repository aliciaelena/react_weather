import React, { useState } from "react";
import axios from "axios";

export default function Search() {
  const [city, setCity] = useState(null);
  const [weather, setWeather] = useState(null);

  function handleSearch(event) {
    event.preventDefault();
    let apiKey = "6a119ce5ad60b9883a83a56308bcd89c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  function handleInput(event) {
    setCity(event.target.value);
  }

  function showWeather(result) {
    let weatherInfo = {
      temperature: result.data.main.temp,
      description: result.data.weather[0].description,
      humidity: result.data.main.humidity,
      wind: result.data.wind.speed,
      icon: result.data.weather[0].icon,
    };
    setWeather(weatherInfo);
  }

  if (weather) {
    return (
      <div className="Search">
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Enter city here..."
            onChange={handleInput}
          />
          <input type="submit" value="Search" />
        </form>
        <ul>
          <li>Temperature: {Math.round(weather.temperature)}°C</li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind} m/s </li>
          <li>
            <img
              src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
              alt={weather.description}
              className={weather.description}
            />
          </li>
        </ul>
      </div>
    );
  } else {
    return (
      <div className="Search">
        <form onSubmit={handleSearch}>
          <input
            type="search"
            placeholder="Enter city here..."
            onChange={handleInput}
          />
          <input type="submit" value="Search" />
        </form>
      </div>
    );
  }
}
