import React from 'react';
import './DataIntegration.styles.css';

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
    <div className="data-integration">
      <h1>Data Integration Projects</h1>
      <div className="card-container">
        {projects.map((project, index) => (
          <div className="card" key={index}>
            <img src={project.image} alt={project.title} className="card-image"/>
            <h2 className="card-title">{project.title}</h2>
            <div className="card-info">
              <div className="chips">
                <p><strong>Tools:</strong></p>
                {project.tools.map((tool, index) => (
                  <span key={index} className="chip">{tool}</span>
                ))}
              </div>
              <div className="chips">
                <p><strong>Project Types:</strong></p>
                {project.projectTypes.map((type, index) => (
                  <span key={index} className="chip">{type}</span>
                ))}
              </div>
              <p><strong>Link:</strong> <a href={project.link} target="_blank" rel="noopener noreferrer">{project.link}</a></p>
            </div>
            <p className="card-description">{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DataIntegration;
