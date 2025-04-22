"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import { WeatherContext } from "../../context/WeatherContext";
import { formatDay } from "../../utils/dateUtils";
import { formatTemp } from "../../utils/weatherUtils";
import WeatherIcon from "./WeatherIcon";
import "./ForecastList.css";

const ForecastList = () => {
  const { forecast, loading, units } = useContext(WeatherContext);

  if (loading || !forecast) {
    return (
      <div className="forecast-skeleton">
        {[...Array(7)].map((_, index) => (
          <div className="forecast-skeleton-item shimmer" key={index}></div>
        ))}
      </div>
    );
  }

  const forecastday = forecast.list;

  return (
    <div className="forecast-list">
      <h2>5-Day Forecast</h2>
      <div className="forecast-items">
        {forecastday?.map((day, index) => (
          <motion.div
            className="forecast-item"
            key={day.dt}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.3 }}
          >
            <div className="forecast-day">
              {index === 0 ? "Today" : formatDay(day.dt_txt)}
            </div>
            <WeatherIcon code={day.weather[0].icon} size="small" />

            <div className="forecast-temp">
              <span className="max-temp">
                {formatTemp(day.main.temp_max, units)}
              </span>

              <span className="min-temp">
                {formatTemp(day.main.temp_min, units)}
              </span>
            </div>
            <div className="forecast-condition">
              {day.weather[0].description}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ForecastList;
