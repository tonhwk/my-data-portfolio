import React from 'react';
import './AdvancedSQL.styles.css'; // Import CSS file for styling
import Card from '../../components/ReusableCard'; // Import the Card component

const projects = [
  {
    "image": "/images/sales_sql.jpg",
    "title": "Advanced SQL Analysis",
    "tools": ["SQL"],
    "projectTypes": ["Data Analysis"],
    "link": "https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20SQL%20Queries/Retail%20Sales%20Analysis/README.md",
    "projectDescription": "This project showcases advanced SQL analysis techniques through a series of scripts designed for data analysis. The scripts cover basic data retrieval, complex joins, aggregations, and reporting. Users execute the scripts in sequence using a SQL editor to analyze datasets and extract insights. Example queries include basic data retrieval, joining multiple tables, aggregating data for summary statistics, and generating insightful reports and visualizations."
  }
]

function AdvancedSQL() {
  return (
    <div className="advanced-sql-page">
      <h2>Advanced SQL Analysis</h2>
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

export default AdvancedSQL;
