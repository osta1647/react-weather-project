import React from "react";
import ReactDOM from "react-dom";
import WeatherSearch from "./WeatherSearch";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
function App() {
  return (
    <div className="App">
      <h1>Weather Search Engine</h1>
      <WeatherSearch />
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
