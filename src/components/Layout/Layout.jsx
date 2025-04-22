"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import Header from "./Header";
import Footer from "./Footer";
import { WeatherContext } from "../../context/WeatherContext";
import { getWeatherBackground } from "../../utils/weatherUtils";
import "./Layout.css";

const Layout = ({ children }) => {
  const { currentWeather } = useContext(WeatherContext);

  // console.log("currentWeather", currentWeather);

  // Determine background class based on weather condition
  const weatherClass = currentWeather
    ? getWeatherBackground(currentWeather?.cod)
    : "";

  return (
    <div className="app-container">
      <div className={`weather-bg ${weatherClass}`}></div>
      <Header />
      <main className="main-content container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
