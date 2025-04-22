"use client";

import { useContext } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { WeatherContext } from "../../context/WeatherContext";
import { formatTime } from "../../utils/dateUtils";
import "./ForecastChart.css";

const ForecastChart = () => {
  const { forecast, loading, units } = useContext(WeatherContext);

  if (loading || !forecast) {
    return <div className="chart-skeleton shimmer"></div>;
  }

  const hours = forecast.list;

  const currentHour = new Date().getHours();
  const relevantHours = [
    ...hours.slice(currentHour),
    ...hours.slice(0, currentHour),
  ].slice(0, 24);

  const chartData = relevantHours.map((hour) => ({
    time: formatTime(hour.dt_txt),
    temperature:
      units === "metric" ? hour.main.temp : (hour.main.temp * 9) / 5 + 32,
    humidity: hour.main.humidity,
    windSpeed:
      units === "metric" ? hour.wind.speed : hour.wind.speed * 0.621371,
  }));

  return (
    <div className="forecast-chart">
      <h2>Temperature, Humidity & Wind</h2>
      <div className="chart-container">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart
            data={chartData}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" />
            <XAxis dataKey="time" />
            <YAxis
              yAxisId="left"
              label={{ value: units === "metric" ? "°C" : "°F", angle: -90 }}
            />
            <YAxis
              yAxisId="right"
              orientation="right"
              label={{ value: "%", angle: 90 }}
            />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="temperature"
              name={`Temperature (${units === "metric" ? "°C" : "°F"})`}
              stroke="var(--secondary-color)"
              strokeWidth={2}
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="humidity"
              name="Humidity (%)"
              stroke="var(--accent-color)"
              strokeWidth={2}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="windSpeed"
              name={`Wind Speed (${units === "metric" ? "km/h" : "mph"})`}
              stroke="var(--success-color)"
              strokeWidth={2}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ForecastChart;
