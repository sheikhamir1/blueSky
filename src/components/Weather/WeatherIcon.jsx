"use client";
import {
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudSnow,
  CloudLightning,
  CloudDrizzle,
  Wind,
} from "react-feather";
import { motion } from "framer-motion";
import "./WeatherIcon.css";

const WeatherIcon = ({ code, isDay = true, size = "medium" }) => {
  // Get icon based on weather code
  const getIcon = () => {
    // Thunderstorm
    if (code >= 200 && code < 300) {
      return <CloudLightning />;
    }
    // Drizzle
    else if (code >= 300 && code < 400) {
      return <CloudDrizzle />;
    }
    // Rain
    else if (code >= 500 && code < 600) {
      return <CloudRain />;
    }
    // Snow
    else if (code >= 600 && code < 700) {
      return <CloudSnow />;
    }
    // Atmosphere (fog, mist, etc)
    else if (code >= 700 && code < 800) {
      return <Wind />;
    }
    // Clear
    else if (code === 800) {
      return isDay ? <Sun /> : <Moon />;
    }
    // Clouds
    else if (code > 800) {
      return <Cloud />;
    }

    // Default
    return <Sun />;
  };

  // Animation variants
  const iconVariants = {
    sun: {
      rotate: [0, 360],
      transition: {
        duration: 20,
        repeat: Number.POSITIVE_INFINITY,
        ease: "linear",
      },
    },
    moon: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
    cloud: {
      x: [0, 5, 0],
      transition: {
        duration: 3,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
    rain: {
      y: [0, 2, 0],
      transition: {
        duration: 1.5,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
      },
    },
    lightning: {
      scale: [1, 1.1, 1],
      opacity: [1, 0.8, 1],
      transition: {
        duration: 1,
        repeat: Number.POSITIVE_INFINITY,
        ease: "easeInOut",
        repeatType: "reverse",
      },
    },
  };

  // Determine animation based on weather code
  const getAnimation = () => {
    if (code === 800 && isDay) return "sun";
    if (code === 800 && !isDay) return "moon";
    if (code > 800) return "cloud";
    if ((code >= 300 && code < 400) || (code >= 500 && code < 600))
      return "rain";
    if (code >= 200 && code < 300) return "lightning";
    return "cloud";
  };

  const sizeClass = `icon-${size}`;
  const animation = getAnimation();

  return (
    <motion.div
      className={`weather-icon ${sizeClass}`}
      variants={iconVariants}
      animate={animation}
    >
      {getIcon()}
    </motion.div>
  );
};

export default WeatherIcon;
