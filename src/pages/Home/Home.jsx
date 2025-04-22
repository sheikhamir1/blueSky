"use client";
import { motion } from "framer-motion";
import CurrentWeather from "../../components/Weather/CurrentWeather";
import ForecastList from "../../components/Weather/ForecastList";
import HourlyForecast from "../../components/Weather/HourlyForecast";
import "./Home.css";

const Home = () => {
  return (
    <motion.div
      className="home-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <CurrentWeather />
      <HourlyForecast />
      <ForecastList />
    </motion.div>
  );
};

export default Home;
