import React, { useState, useEffect } from "react";
import "../styles/Weather.css";

const Weather = () => {
  const [weatherData, setWeatherData] = useState(null); // State for storing weather data
  const [error, setError] = useState(null); // State for storing errors
  const [loading, setLoading] = useState(true); // State for loading status

  useEffect(() => {
    // Get user location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        // Create the URL for the weather API request
        const apiKey = "caac5acb19ea1c30c9bf5940ed9bb7b5"; // Replace with your OpenWeatherMap API key
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

        // Fetch the weather data
        fetch(url)
          .then((response) => response.json())
          .then((data) => {
            setWeatherData(data); // Set the weather data in state
            setLoading(false); // Stop the loading spinner
          })
          .catch((err) => {
            setError("Failed to fetch weather data.");
            setLoading(false);
          });
      },
      (err) => {
        setError("Failed to get user location.");
        setLoading(false);
      }
    );
  }, []); // Empty dependency array ensures it runs once when the component mounts

  if (loading) return <p>Loading...</p>; // Show loading state
  if (error) return <p>{error}</p>; // Show error message

  // Destructure weather data if available
  const { main, weather, name } = weatherData || {};
  const temperature = main?.temp;
  const description = weather?.[0]?.description;
  const icon = weather?.[0]?.icon;

  return (
    <div className="container">
      <div className="weather-card">
        <div className="date-container">
          <h1>TODAY</h1>
          <p id="date">{new Date().toDateString()}</p>
          {icon && (
            <img
              src={`https://openweathermap.org/img/wn/${icon}.png`}
              alt="Weather Icon"
            />
          )}
        </div>
        <div className="weather-details">
          <div className="temp">
            <h1>{temperature ? `${Math.floor(temperature)}°C` : "N/A"}</h1>
          </div>
          <div className="temp-details">
            <p id="weather-stats">{description || "No data available"}</p>
            <p>
              Stay updated with the latest weather in {name || "your city"}.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Weather;
