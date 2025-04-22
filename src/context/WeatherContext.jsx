"use client";

import { createContext, useState, useEffect } from "react";
import { fetchWeatherData, fetchForecastData } from "../utils/api";

export const WeatherContext = createContext();
const API_BASE_URL = "https://api.openweathermap.org/data/2.5/weather?";
const Api_BASE_URL_FORCAST =
  "https://api.openweathermap.org/data/2.5/forecast?";
const API_KEY = import.meta.env.VITE_APIKEY;

export const WeatherProvider = ({ children }) => {
  const [location, setLocation] = useState("");
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [units, setUnits] = useState(() => {
    return localStorage.getItem("weatherAppUnits") || "metric";
  });

  // console.log("location", location);

  // Save units preference to localStorage
  useEffect(() => {
    localStorage.setItem("weatherAppUnits", units);
  }, [units]);

  // Get user's location on initial load
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchWeatherByCoords(latitude, longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
          // Default to a major city if geolocation fails
          fetchWeatherByCity("London");
        }
      );
    } else {
      // Geolocation not supported
      fetchWeatherByCity("London");
    }
  }, []);

  const fetchWeatherByCity = async (city) => {
    if (!city) return;

    setLoading(true);
    setError(null);

    try {
      const weatherData = await fetchWeatherData(
        `${API_BASE_URL}q=${city}&appid=${API_KEY}`,
        units
      );
      setCurrentWeather(weatherData);
      setLocation(city);

      // Also fetch forecast data
      const forecastData = await fetchForecastData(
        `${Api_BASE_URL_FORCAST}q=${city}&appid=${API_KEY}`
      );
      setForecast(forecastData);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByCoords = async (lat, lon) => {
    setLoading(true);
    setError(null);

    try {
      const weatherData = await fetchWeatherData(
        `${API_BASE_URL}lat=${lat}&lon=${lon}&appid=${API_KEY}`,
        units
      );
      setCurrentWeather(weatherData);
      setLocation(weatherData.name);

      // Also fetch forecast data
      const forecastData = await fetchForecastData(
        `${Api_BASE_URL_FORCAST}lat=${lat}&lon=${lon}&appid=${API_KEY}`,
        units
      );
      setForecast(forecastData);
    } catch (err) {
      setError("Failed to fetch weather data. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  // console.log("units", units);

  const toggleUnits = () => {
    setUnits((prevUnits) => {
      const newUnits = prevUnits === "metric" ? "imperial" : "metric";
      // Refetch data with new units
      if (location) {
        fetchWeatherByCity(location);
      }
      return newUnits;
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        currentWeather,
        forecast,
        loading,
        error,
        location,
        units,
        fetchWeatherByCity,
        fetchWeatherByCoords,
        toggleUnits,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};
