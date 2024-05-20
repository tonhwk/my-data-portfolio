import React from 'react';
import './DataEngineering.styles.css'; // Import CSS file for styling
import Card from '../../components/ReusableCard'; // Import the Card component

const projects = [
  {
    image: '/images/etl.png',
    title: 'ETL',
    tools: ['Python', "SQL"],
    projectTypes: ["Data Engineering"],
    link: 'https://github.com/tonhwk/data_analysis_potfolio/blob/main/Data%20Engineering/etl.py',
    description: 'This ETL project demonstrates my proficiency in extracting, transforming, and loading data using Python, Pandas, and SQLAlchemy. In this project, I built a data pipeline that extracts weather data for various cities from the OpenWeatherMap API. The process involves reading city information from a CSV file, fetching real-time weather data via API requests, and transforming this data into a structured format. Finally, the cleaned data is loaded into a PostgreSQL database.'
  }

]
function DataEngineering() {
  return (
    <div className="data-engineering-page">
      <h2>Data Engineering</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            tools={project.tools}
            projectTypes={project.projectTypes}
            link={project.link}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default DataEngineering;
