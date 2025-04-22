"use client";

import { useState, useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { WeatherContext } from "../../context/WeatherContext";
import { ThemeContext } from "../../context/ThemeContext";
import SearchBar from "../UI/SearchBar";
import { Sun, Moon, Menu, X } from "react-feather";
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { currentTheme, changeTheme } = useContext(ThemeContext);
  const { units, toggleUnits } = useContext(WeatherContext);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleTheme = () => {
    const newTheme = currentTheme === "light" ? "dark" : "light";
    changeTheme(newTheme);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              BlueSkye
            </motion.div>
          </Link>

          {location.pathname === "/" && (
            <div className="search-container">
              <SearchBar />
            </div>
          )}

          <div className="header-actions">
            <button
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${
                currentTheme === "light" ? "dark" : "light"
              } mode`}
            >
              {currentTheme === "light" ? (
                <Moon size={20} />
              ) : (
                <Sun size={20} />
              )}
            </button>

            <button
              className="units-toggle"
              onClick={toggleUnits}
              aria-label={`Switch to ${
                // units === "metric" ? "imperial" : "metric"
                units === "metric" ? "imperial" : "metric"
              } units`}
            >
              {units === "metric" ? "°C" : "°F"}
            </button>

            <button
              className="menu-toggle"
              onClick={toggleMenu}
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        <nav className={`nav-menu ${menuOpen ? "open" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/forecast" onClick={() => setMenuOpen(false)}>
                Forecast
              </Link>
            </li>
            <li>
              <Link to="/settings" onClick={() => setMenuOpen(false)}>
                Settings
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setMenuOpen(false)}>
                About
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
