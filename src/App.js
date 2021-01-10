import React from "react";
import ReactDOM from "react-dom";
import WeatherSearch from "./WeatherSearch";
import "./styles.css";
export default function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <footer>
    <a href="https://github.com/osta1647/react-weather-project2"
    target="_blank"
    >
      Open-source Code </a> 
      by  Emily Osta
    </footer>
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


