import React from "react";
import ReactDOM from "react-dom";
import WeatherSearch from "./WeatherSearch";
import "./styles.css";
//import FormattedDate from "./FormattedDate";
import "bootstrap/dist/css/bootstrap.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <h1>🌞Weather Search Engine☔</h1>
      <WeatherSearch />
      <footer>
    <a href="https://github.com/osta1647/react-weather-project"
    target="_blank" rel="noreferrer"
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
