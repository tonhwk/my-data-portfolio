import React from 'react';
import './DataIntegration.styles.css';
import Card from '../../components/ReusableCard'; // Import the Card component


const projects = [
  {
    image: '/images/weather.jpeg',
    title: 'Weather Data Integration',
    tools: ['Python'],
    projectTypes: ['API Integration', 'Data Integration'],
    link: 'https://github.com/tonhwk/data_analysis_potfolio/blob/main/Data%20Integration/weather.ipynb',
    projectDescription: "This project focuses on integrating weather data from the OpenWeatherMap API with city data to perform analysis. Using Python libraries such as Pandas and Requests, the city data is loaded from a CSV file containing information about different cities. A function is defined to fetch weather data for each city from the API, which returns temperature and weather description. The weather data is fetched for each city and stored in a list. Upon successful retrieval, the weather data is appended to the list. Finally, the weather data list is converted into a DataFrame and merged with the city data based on the city name. The integrated data is then saved to a CSV file for further analysis and visualization."
  }
];

function DataIntegration() {
  return (
    <div className="advanced-data-analysis-page">
      <h2>Data Integration</h2>

      {projects.map((project, index) => (
        <Card
          key={index}
          image={project.image} // Pass the image prop
          title={project.title}
          tools={project.tools}
          projectTypes={project.projectTypes}
          link={project.link}
          projectDescription={project.projectDescription}
        />
      ))}
    </div>
  );
}

export default DataIntegration;
