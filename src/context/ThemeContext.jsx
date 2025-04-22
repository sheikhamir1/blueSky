"use client";

import { createContext, useState, useEffect } from "react";
import { themes } from "../themes";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Get theme from localStorage or default to 'light'
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem("weatherAppTheme");
    return savedTheme || "light";
  });

  // Apply theme to document
  useEffect(() => {
    const theme = themes[currentTheme];
    if (theme) {
      Object.keys(theme).forEach((key) => {
        document.documentElement.style.setProperty(`--${key}`, theme[key]);
      });
      localStorage.setItem("weatherAppTheme", currentTheme);
    }
  }, [currentTheme]);

  // Theme switcher function
  const changeTheme = (themeName) => {
    if (themes[themeName]) {
      setCurrentTheme(themeName);
    }
  };

  return (
    <ThemeContext.Provider
      value={{ currentTheme, changeTheme, themes: Object.keys(themes) }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
