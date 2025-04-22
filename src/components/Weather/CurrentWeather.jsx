"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import { WeatherContext } from "../../context/WeatherContext";
import { formatDate, formatTime } from "../../utils/dateUtils";
import { formatTemp } from "../../utils/weatherUtils";
import WeatherIcon from "./WeatherIcon";
import WeatherDetails from "./WeatherDetails";
import WeatherSkeleton from "./WeatherSkeleton";
import "./CurrentWeather.css";

const CurrentWeather = () => {
  const { currentWeather, loading, error, units } = useContext(WeatherContext);
  // console.log("currentWeather", currentWeather);

  if (loading) {
    return <WeatherSkeleton />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  if (!currentWeather) {
    return null;
  }

  const { location, current } = currentWeather;
  const locationName = currentWeather.name;
  const LocationCountry = currentWeather.sys.country;

  return (
    <motion.div
      className="current-weather"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="weather-header">
        <div className="location-info">
          <h1>{locationName}</h1>
          <p className="location-region">{LocationCountry}</p>
          <p className="current-date">{formatDate(Date.now())}</p>
          <p className="current-time">{formatTime(Date.now())}</p>
        </div>

        <div className="current-temp">
          <WeatherIcon
            code={currentWeather.weather[0].main}
            // isDay={current.is_day}
            size="large"
          />
          <div className="temp-display">
            <span className="temp-value">
              {formatTemp(currentWeather.main.temp, units)}
            </span>
            <span className="condition-text">
              {currentWeather.weather[0].description}
            </span>
          </div>
        </div>
      </div>

      <WeatherDetails weather={currentWeather} />
    </motion.div>
  );
};

export default CurrentWeather;
