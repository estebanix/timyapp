import React, { useState, useEffect } from "react";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const apiKey = 'USE YOURS';
      const latitude = 50.0755;
      const longitude = 14.4378;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apiKey}`;

      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data && data.main && data.main.temp) {
          const temperature = Math.round(data.main.temp);
          setWeatherData(temperature);
          console.log(data);
        } else {
          console.log('Invalid weather data:', data);
        }
      } catch (error) {
        console.log('Error fetching weather data:', error);
      }
    };

    fetchWeatherData();
  }, []);

  const temperature = weatherData;
  const iconId = weatherData ? '01d' : '';
  const iconUrl = `https://openweathermap.org/img/wn/${iconId}.png`;

  return (
    <div className={`weather--container ${props.darkMode && "weather--container-dark"}`}>
      {weatherData !== null ? (
        <>
        <p>{temperature}&deg;C</p>
        <img src={iconUrl} alt="Weather Icon" />
      </>
      ) : (
        <p>Loading weather data...</p>
      )}
    </div>
  );
}
