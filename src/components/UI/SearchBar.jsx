"use client";

import { useState, useContext } from "react";
import { motion } from "framer-motion";
import { Search } from "react-feather";
import { WeatherContext } from "../../context/WeatherContext";
import "./SearchBar.css";

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const { fetchWeatherByCity, loading } = useContext(WeatherContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      fetchWeatherByCity(query);
      console.log("Search query:", query);
    }
  };

  return (
    // <form className="search-bar" onSubmit={handleSubmit}>
    //   <div className="search-input-container">
    //     <input
    //       type="text"
    //       className="search-input"
    //       placeholder="Search for a city..."
    //       value={query}
    //       onChange={(e) => setQuery(e.target.value)}
    //       disabled={loading}
    //       aria-label="Search for a city"
    //     />
    //     <motion.button
    //       className="search-button"
    //       type="submit"
    //       disabled={loading || !query.trim()}
    //       whileHover={{ scale: 1.05 }}
    //       whileTap={{ scale: 0.95 }}
    //       aria-label="Search"
    //     >
    //       <Search size={20} />
    //     </motion.button>
    //   </div>
    // </form>
    <form className="search-bar" onSubmit={handleSubmit}>
      <div className="search-input-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search for a city..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          disabled={loading}
          aria-label="Search for a city"
        />
        <button
          className="search-button"
          type="submit"
          disabled={loading || !query.trim()}
          aria-label="Search"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Search size={20} />
          </motion.div>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
