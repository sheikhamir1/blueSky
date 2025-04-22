"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import {
  Droplet,
  Wind,
  Sunrise,
  Sunset,
  Thermometer,
  Eye,
  Compass,
  BarChart2,
} from "react-feather";
import { WeatherContext } from "../../context/WeatherContext";
import { getWindDirection, formatTemp } from "../../utils/weatherUtils";
import "./WeatherDetails.css";

const WeatherDetails = ({ weather }) => {
  const { units } = useContext(WeatherContext);

  if (!weather) return null;

  const detailItems = [
    {
      icon: <Thermometer />,
      label: "Feels Like",
      value: formatTemp(weather.main.feels_like, units),
    },
    {
      icon: <Droplet />,
      label: "Humidity",
      value: `${weather.main.humidity}%`,
    },
    {
      icon: <Wind />,
      label: "Wind",
      value: `${
        units === "metric"
          ? weather.wind.speed + " km/h"
          : weather.wind.speed + " mph"
      } ${getWindDirection(weather.wind.deg)}`,
    },
    {
      icon: <BarChart2 />,
      label: "Pressure",
      value: `${
        units === "metric"
          ? weather.main.pressure + " mb"
          : weather.main.pressure + " in"
      }`,
    },
    {
      icon: <Eye />,
      label: "Visibility",
      value: `${
        units === "metric"
          ? weather.visibility + " km"
          : weather.visibility + " mi"
      }`,
    },
    {
      icon: <Compass />,
      label: "UV Index",
      value: "N/A",
    },
  ];

  function formatUnixTime(unixTimestamp) {
    const date = new Date(unixTimestamp * 1000);
    return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
  }

  const sunriseTime = formatUnixTime(weather.sys.sunrise);
  const sunsetTime = formatUnixTime(weather.sys.sunset);

  detailItems.push(
    {
      icon: <Sunrise />,
      label: "Sunrise",
      value: sunriseTime,
    },
    {
      icon: <Sunset />,
      label: "Sunset",
      value: sunsetTime,
    }
  );

  return (
    <motion.div
      className="weather-details"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <div className="details-grid">
        {detailItems?.map((item, index) => (
          <div className="detail-item" key={index}>
            <div className="detail-icon">{item.icon}</div>
            <div className="detail-info">
              <span className="detail-label">{item.label}</span>
              <span className="detail-value">{item.value}</span>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default WeatherDetails;
