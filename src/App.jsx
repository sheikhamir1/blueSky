"use client";

import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { WeatherProvider } from "./context/WeatherContext";
import { AnimatePresence } from "framer-motion";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home";
import Forecast from "./pages/Forecast/Forecast";
import Settings from "./pages/Settings/Settings";
import About from "./pages/About/About";
import "./App.css";

function App() {
  // Register service worker for PWA support
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      window.addEventListener("load", () => {
        navigator.serviceWorker
          .register("/service-worker.js")
          .then((registration) => {
            console.log("SW registered: ", registration);
          })
          .catch((registrationError) => {
            console.log("SW registration failed: ", registrationError);
          });
      });
    }
  }, []);

  return (
    <ThemeProvider>
      <WeatherProvider>
        <Router>
          <Layout>
            <AnimatePresence mode="wait">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/forecast" element={<Forecast />} />
                <Route path="/settings" element={<Settings />} />
                <Route path="/about" element={<About />} />
              </Routes>
            </AnimatePresence>
          </Layout>
        </Router>
      </WeatherProvider>
    </ThemeProvider>
  );
}

export default App;
