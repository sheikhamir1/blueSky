"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import { WeatherContext } from "../../context/WeatherContext";
import ThemeSelector from "../../components/UI/ThemeSelector";
import "./Settings.css";

const Settings = () => {
  const { units, toggleUnits } = useContext(WeatherContext);

  return (
    <motion.div
      className="settings-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1>Settings</h1>

      <div className="settings-section">
        <h2>Units</h2>
        <div className="units-selector">
          <button
            className={`unit-button ${units === "metric" ? "active" : ""}`}
            onClick={() => units !== "metric" && toggleUnits()}
          >
            Metric (°C, km/h)
          </button>
          <button
            className={`unit-button ${units === "imperial" ? "active" : ""}`}
            onClick={() => units !== "imperial" && toggleUnits()}
          >
            Imperial (°F, mph)
          </button>
        </div>
      </div>

      <ThemeSelector />

      <div className="settings-section">
        <h2>About the App</h2>
        <p>
          This weather application uses WeatherAPI.com to provide accurate
          weather forecasts. You can customize the appearance with different
          themes and choose between metric and imperial units.
        </p>
        <p>The app is built with React.js and includes features like:</p>
        <ul>
          <li>Current weather conditions</li>
          <li>7-day forecast</li>
          <li>Hourly forecast</li>
          <li>Weather charts</li>
          <li>Multiple themes</li>
          <li>Responsive design</li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Settings;
