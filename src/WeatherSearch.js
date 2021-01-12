import React, { useState } from "react";
import axios from "axios";
import "./WeatherSearch.css";
import WeatherTemperature from "./WeatherTemperature";
import FormattedDate from "./FormattedDate";
export default function WeatherSearch(props) {
  let [city, setCity] = useState("");
  //let [temperature, setTemperature] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState("");
  function displayWeather(response) {
    setWeather({
      date: new Date (response.data.dt*1000),
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      icon: `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      description: response.data.weather[0].description
    });
    setLoaded(true);
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "3178cd4dc212e1aed68087c7e06933d5";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <input type="search" placeholder="Enter a city.." onChange={updateCity} />
      <button type="Submit">Search</button>
    </form>
  );
  if (loaded) {
    return (
      <div>
        {form}
        <ul>
          <li> <FormattedDate date={weather.date} /> </li>
          <li>Temperature: <WeatherTemperature celsius= {Math.round(weather.temperature)} /></li>
          <li>Description: {weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
          <li>
            <img src={weather.icon} alt={weather.description} />
          </li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}