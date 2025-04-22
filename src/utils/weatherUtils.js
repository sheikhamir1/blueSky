// Weather utility functions

// Get appropriate weather icon based on condition code
export const getWeatherIcon = (code, isDay = true) => {
  // This is a simplified mapping - in a real app, you'd have more detailed mappings
  if (code >= 200 && code < 300) {
    return "thunderstorm";
  } else if (code >= 300 && code < 400) {
    return "drizzle";
  } else if (code >= 500 && code < 600) {
    return "rain";
  } else if (code >= 600 && code < 700) {
    return "snow";
  } else if (code >= 700 && code < 800) {
    return "mist";
  } else if (code === 800) {
    return isDay ? "clear-day" : "clear-night";
  } else if (code > 800) {
    return isDay ? "cloudy" : "cloudy-night";
  }

  return "unknown";
};

// Get background class based on weather condition
export const getWeatherBackground = (code) => {
  if (code >= 200 && code < 300) {
    return "storm";
  } else if ((code >= 300 && code < 400) || (code >= 500 && code < 600)) {
    return "rain";
  } else if (code >= 600 && code < 700) {
    return "snow";
  } else if (code === 800) {
    return "clear";
  } else {
    return "clouds";
  }
};

// Convert temperature based on units
export const convertTemp = (temp, units) => {
  if (units === "imperial") {
    return (temp * 9) / 5 + 32;
  }
  return temp;
};

// Format temperature with unit
export const formatTemp = (temp, units) => {
  const unit = units === "metric" ? "°C" : "°F";
  return `${Math.round(temp)}${unit}`;
};

// Get wind direction as text
export const getWindDirection = (degrees) => {
  const directions = [
    "N",
    "NNE",
    "NE",
    "ENE",
    "E",
    "ESE",
    "SE",
    "SSE",
    "S",
    "SSW",
    "SW",
    "WSW",
    "W",
    "WNW",
    "NW",
    "NNW",
  ];
  const index = Math.round(degrees / 22.5) % 16;
  return directions[index];
};
