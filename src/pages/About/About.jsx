"use client";
import { motion } from "framer-motion";
import "./About.css";

const About = () => {
  return (
    <motion.div
      className="about-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <h1>About Weather App</h1>

      <div className="about-section">
        <h2>Overview</h2>
        <p>
          Weather App is a modern, responsive web application that provides
          accurate weather forecasts and conditions for locations worldwide.
          Built with React.js, this application offers a clean, intuitive
          interface with multiple themes to suit your preferences.
        </p>
      </div>

      <div className="about-section">
        <h2>Features</h2>
        <ul>
          <li>
            <strong>Current Weather:</strong> Get real-time weather conditions
            including temperature, humidity, wind speed, and more.
          </li>
          <li>
            <strong>7-Day Forecast:</strong> Plan ahead with a detailed 7-day
            weather forecast.
          </li>
          <li>
            <strong>Hourly Forecast:</strong> View hour-by-hour weather
            predictions for the next 24 hours.
          </li>
          <li>
            <strong>Weather Charts:</strong> Visualize temperature, humidity,
            and wind speed trends.
          </li>
          <li>
            <strong>Multiple Themes:</strong> Choose from six different themes
            to customize your experience.
          </li>
          <li>
            <strong>Responsive Design:</strong> Enjoy a seamless experience on
            any device - desktop, tablet, or mobile.
          </li>
          <li>
            <strong>Geolocation:</strong> Get weather for your current location
            automatically.
          </li>
          <li>
            <strong>PWA Support:</strong> Install the app on your device for
            offline access.
          </li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Technologies</h2>
        <p>This application is built using the following technologies:</p>
        <ul>
          <li>React.js for the user interface</li>
          <li>React Router for navigation</li>
          <li>Context API for state management</li>
          <li>Framer Motion for animations</li>
          <li>Recharts for data visualization</li>
          <li>WeatherAPI.com for weather data</li>
          <li>CSS for styling and theming</li>
        </ul>
      </div>

      <div className="about-section">
        <h2>Credits</h2>
        <p>
          Weather data provided by{" "}
          <a
            href="https://www.weatherapi.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            WeatherAPI.com
          </a>
          .
        </p>
        <p>
          Icons by{" "}
          <a
            href="https://feathericons.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Feather Icons
          </a>
          .
        </p>
        <p>Developed with ❤️ by Weather App Team.</p>
      </div>
    </motion.div>
  );
};

export default About;
