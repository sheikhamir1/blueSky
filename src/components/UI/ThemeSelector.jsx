"use client";

import { useContext } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../../context/ThemeContext";
import "./ThemeSelector.css";

const ThemeSelector = () => {
  const { currentTheme, changeTheme, themes } = useContext(ThemeContext);

  // Theme display names
  const themeNames = {
    light: "Light Mode",
    dark: "Dark Mode",
    blueHaze: "Blue Haze",
    solarWarm: "Solar Warm",
    mistyMountain: "Misty Mountain",
    auroraNight: "Aurora Night",
    digitalLavender: "digitalLavender",
    mochaMousse: "mochaMousse",
    neonNights: "neonNights",
    earthTones: "earthTones",
    berkeleyCoral: "berkeleyCoral",
  };

  return (
    <div className="theme-selector">
      <h2>Select Theme</h2>
      <div className="theme-grid">
        {themes.map((theme) => (
          <motion.div
            key={theme}
            className={`theme-option ${currentTheme === theme ? "active" : ""}`}
            onClick={() => changeTheme(theme)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="theme-preview" data-theme={theme}>
              <div className="theme-preview-header"></div>
              <div className="theme-preview-body"></div>
            </div>
            <span className="theme-name">{themeNames[theme]}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ThemeSelector;
