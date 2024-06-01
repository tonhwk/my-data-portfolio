import React from 'react';
import './DataEngineering.styles.css'; // Import CSS file for styling
import Card from '../../components/ReusableCard'; // Import the Card component

const projects = [
  {
    "image": "/images/etl.png",
    "title": "ETL",
    "tools": ["Python", "SQLAlchemy"],
    "projectTypes": ["Data Engineering"],
    "link": "https://github.com/tonhwk/data_analysis_potfolio/blob/main/Data%20Engineering/etl.py",
    "projectDescription": "This project implements a data pipeline to fetch weather data from the OpenWeatherMap API, transform it, and load it into a PostgreSQL database. The pipeline consists of three main steps: Extract, Transform, and Load (ETL). In the Extract step, city data is extracted from a CSV file. Then, in the Transform step, weather data is fetched for each city using the API, and the fetched data is transformed into a structured DataFrame. Finally, in the Load step, the transformed weather data is loaded into a PostgreSQL database using SQLAlchemy's ORM. The pipeline handles exceptions gracefully, printing error messages for failed API requests and ensuring data integrity by replacing existing data in the database."
  }

]
function DataEngineering() {
  return (
    <div className="data-engineering-page">
      <h2>Data Engineering and ETL Processes</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            tools={project.tools}
            projectTypes={project.projectTypes}
            link={project.link}
            projectDescription={project.projectDescription}
          />
        ))}
      </div>
    </div>
  );
}

export default DataEngineering;
