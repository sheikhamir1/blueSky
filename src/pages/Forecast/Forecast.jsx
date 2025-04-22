"use client";
import { motion } from "framer-motion";
import ForecastList from "../../components/Weather/ForecastList";
import HourlyForecast from "../../components/Weather/HourlyForecast";
import ForecastChart from "../../components/Weather/ForecastChart";
import "./Forecast.css";

const Forecast = () => {
  return (
    <motion.div
      className="forecast-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1>Weather Forecast</h1>
      <ForecastChart />
      <HourlyForecast />
      <ForecastList />
    </motion.div>
  );
};

export default Forecast;
