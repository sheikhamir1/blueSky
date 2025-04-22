// Date formatting utilities

// Format date to display day of week
export const formatDay = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", { weekday: "short" });
};

// Format date to display full date
export const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Format time
export const formatTime = (timeString) => {
  const date = new Date(timeString);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
  });
};

// Format sunrise/sunset time
export const formatSunTime = (timeString) => {
  if (!timeString) return "";

  const date = new Date(timeString);
  return date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

// Get local time for a timezone
export const getLocalTime = (timezone) => {
  const now = new Date();
  const options = {
    timeZone: timezone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  };

  return now.toLocaleTimeString("en-US", options);
};
