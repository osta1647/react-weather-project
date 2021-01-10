import React from "react";
import ReactDOM from "react-dom";
import WeatherSearch from "./WeatherSearch";
import "./WeatherSearch.css";
export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>Weather Search Engine</h1>
      <WeatherSearch />
      <h2>FormattedDate</h2>
      <footer>
    <a href="https://github.com/osta1647/react-weather-project"
    target="_blank"
    >
      Open-source Code </a> 
      by  Emily Osta
    </footer>
    </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  rootElement
);


