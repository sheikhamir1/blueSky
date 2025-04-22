// API utility functions

// Fetch current weather data
export const fetchWeatherData = async (query, units = "metric") => {
  // console.log("units", units);

  try {
    const response = await fetch(query + `&units=${units}`);

    if (!response.ok) {
      throw new Error("Weather data not available");
    }

    const data = await response.json();
    console.log("Weather data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching weather data:", error);
    throw error;
  }
};

// Fetch forecast data
export const fetchForecastData = async (query, units = "metric") => {
  try {
    const response = await fetch(query + `&units=${units}`);
    if (!response.ok) {
      throw new Error("Forecast data not available");
    }
    const data = await response.json();
    // console.log("Forecast data:", data);

    return data;
  } catch (error) {
    console.error("Error fetching forecast data:", error);
    throw error;
  }
};
