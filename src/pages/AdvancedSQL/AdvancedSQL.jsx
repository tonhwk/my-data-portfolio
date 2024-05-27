import React from 'react';
import './AdvancedSQL.styles.css'; // Import CSS file for styling
import Card from '../../components/ReusableCard'; // Import the Card component

const projects = [
  {
    "image": "/images/sales_sql.jpg",
    "title": "Basic SQL Queries",
    "tools": ["SQL"],
    "projectTypes": ["Data Analysis"],
    "link": "https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20SQL%20Queries/Basic%20SQL%20Queries/README.md",
    "projectDescription": "This project showcases basic SQL queries through a series of scripts designed for data analysis. The scripts cover basic data retrieval, joins, aggregations, and reporting. Users execute the scripts in sequence using a SQL editor to analyze datasets and extract insights. Example queries include basic data retrieval, joining multiple tables, aggregating data for summary statistics, and generating insightful reports and visualizations."
  },
  {
    "image": "/images/advanced_sql.jpeg",
    "title": "Advanced SQL Querying",
    "tools": ["SQL"],
    "projectTypes": ["Data Analysis"],
    "link": "https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20SQL%20Queries/Advanced%20SQL%20Queries/README.md",
    "projectDescription": "This project demonstrates advanced SQL querying techniques, including subqueries, Common Table Expressions (CTEs), and window functions. These advanced queries enable complex data analysis and provide deeper insights from the dataset. The project builds on a retail sales analysis scenario, enhancing the basic SQL operations with more sophisticated data manipulation and reporting capabilities."
  }
]

function AdvancedSQL() {
  return (
    <div className="advanced-sql-page">
      <h2>SQL Analysis & Querying</h2>
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
