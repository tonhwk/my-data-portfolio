import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Papa from 'papaparse';
import './DataIntegration.styles.css';

const API_KEY = '2f5bebb7c5ec8da6c4926b7f4f78aa47'; // Replace with your OpenWeatherMap API key

function DataIntegration() {
  const [data, setData] = useState([]);
  const [csvData, setCsvData] = useState([]);

  useEffect(() => {
    // Fetch the CSV data
    axios.get('/worldcities.csv')
      .then(response => {
        Papa.parse(response.data, {
          header: true,
          complete: (results) => {
            setCsvData(results.data);
          },
          error: (error) => {
            console.error('Error parsing CSV:', error);
          }
        });
      })
      .catch(error => console.error('Error fetching CSV data:', error));
  }, []);

  useEffect(() => {
    if (csvData.length > 0) {
      // Fetch weather data for each city in the CSV
      const fetchWeatherData = async () => {
        const integratedData = [];
        for (const row of csvData) {
          const cityName = row.city;
          const countryName = row.country;
          try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityName},${countryName}&units=metric&appid=${API_KEY}`);
            integratedData.push({
              ...row,
              Temperature: response.data.main.temp,
              Weather: response.data.weather[0].description,
              Humidity: response.data.main.humidity,
            });
          } catch (error) {
            console.error(`Error fetching weather data for ${cityName}:`, error);
            integratedData.push(row);
          }
          // Delay between requests to avoid hitting rate limits
          await new Promise(resolve => setTimeout(resolve, 10000));
        }
        setData(integratedData);
      };

      fetchWeatherData();
    }
  }, [csvData]);

  return (
    <div className="data-integration">
      <h1>Data Integration Project</h1>
      <p>This project integrates weather data from the OpenWeatherMap API with city data from a CSV file.</p>
      <table>
        <thead>
          <tr>
            <th>City</th>
            <th>Country</th>
            <th>Temperature (°C)</th>
            <th>Weather</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.city}</td>
              <td>{row.country}</td>
              <td>{row.Temperature}</td>
              <td>{row.Weather}</td>
              <td>{row.Humidity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DataIntegration;
