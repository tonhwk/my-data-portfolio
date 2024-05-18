import React from 'react';
import './DataIntegration.styles.css';
import Card from '../../components/ReusableCard'; // Import the Card component


const projects = [
  {
    image: '/images/weather.jpeg',
    title: 'Weather Data Integration',
    tools: ['Python'],
    projectTypes: ['API Integration', 'Data Integration'],
    link: 'https://github.com/yourusername/weather-data-integration',
    description: 'Integrated weather data from the OpenWeatherMap API with city information from a CSV file to provide real-time weather updates for various cities.'
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
          description={project.description}
        />
      ))}
    </div>
  );
}

export default DataIntegration;
