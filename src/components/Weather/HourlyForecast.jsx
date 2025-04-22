"use client";

import { useContext, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "react-feather";
import { WeatherContext } from "../../context/WeatherContext";
import { formatTime } from "../../utils/dateUtils";
import { formatTemp } from "../../utils/weatherUtils";
import WeatherIcon from "./WeatherIcon";
import "./HourlyForecast.css";

const HourlyForecast = () => {
  const { forecast, loading, units } = useContext(WeatherContext);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  if (loading || !forecast) {
    return (
      <div className="hourly-forecast-skeleton">
        {[...Array(8)].map((_, index) => (
          <div className="hourly-skeleton-item shimmer" key={index}></div>
        ))}
      </div>
    );
  }

  // Get hourly forecast
  const hours = forecast.list;

  const currentHour = new Date().getHours();
  const relevantHours = hours.slice(currentHour, currentHour + 24); // show the next 24 hours

  return (
    <div className="hourly-forecast">
      <div className="hourly-header">
        <h2>24-Hour Forecast</h2>
        <div className="scroll-controls">
          <button onClick={scrollLeft} aria-label="Scroll left">
            <ChevronLeft />
          </button>
          <button onClick={scrollRight} aria-label="Scroll right">
            <ChevronRight />
          </button>
        </div>
      </div>

      <div className="hourly-items-container">
        <div className="hourly-items" ref={scrollRef}>
          {relevantHours.map((hour, index) => (
            <motion.div
              className="hourly-item"
              key={hour.dt}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05, duration: 0.3 }}
            >
              <div className="hourly-time">
                {index === 0 ? "Now" : formatTime(hour.dt_txt)}
              </div>

              <WeatherIcon code={hour.weather[0].icon} size="small" />

              <div className="hourly-temp">
                {formatTemp(hour.main.temp, units)}
              </div>

              <div className="hourly-detail">
                <span className="hourly-detail-label">Humidity</span>
                <span className="hourly-detail-value">
                  {hour.main.humidity}%
                </span>
              </div>

              <div className="hourly-detail">
                <span className="hourly-detail-label">Wind</span>
                <span className="hourly-detail-value">
                  {units === "metric"
                    ? `${hour.wind.speed} km/h`
                    : `${(hour.wind.speed * 0.621371).toFixed(1)} mph`}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HourlyForecast;
