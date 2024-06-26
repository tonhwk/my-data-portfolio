import React from 'react';
import './AdvancedSQL.styles.css'; // Import CSS file for styling
import Card from '../../components/ReusableCard'; // Import the Card component

const projects = [
  {
    "image": "/images/sales_sql.jpg",
    "title": "Basic SQL Queries",
    "tools": ["SQL"],
    "projectTypes": ["Data Analysis"],
    "link": "https://github.com/tonhwk/data_analysis_potfolio/tree/main/SQL%20Analysis/Basic%20SQL%20Queries",
    "projectDescription": "This project showcases basic SQL queries through a series of scripts designed for data analysis. The scripts cover basic data retrieval, joins, aggregations, and reporting. Users execute the scripts in sequence using a SQL editor to analyze datasets and extract insights. Example queries include basic data retrieval, joining multiple tables, aggregating data for summary statistics, and generating insightful reports and visualizations."
  },
  {
    "image": "/images/advanced_sql.jpeg",
    "title": "Advanced SQL Querying",
    "tools": ["SQL"],
    "projectTypes": ["Data Analysis"],
    "link": "https://github.com/tonhwk/data_analysis_potfolio/tree/main/SQL%20Analysis/Advanced%20SQL%20Queries",
    "projectDescription": "This project demonstrates advanced SQL querying techniques, including subqueries, Common Table Expressions (CTEs), and window functions. These advanced queries enable complex data analysis and provide deeper insights from the dataset. The project builds on a retail sales analysis scenario, enhancing the basic SQL operations with more sophisticated data manipulation and reporting capabilities."
  },
  {
    "image": "/images/group_by.png",
    "title": "Data Aggregation and Grouping with SQL",
    "tools": ["SQL"],
    "projectTypes": ["Data Analysis"],
    "link": "https://github.com/tonhwk/data_analysis_potfolio/tree/main/SQL%20Analysis/Data%20Aggregation",
    "projectDescription": "This project includes practical SQL queries demonstrating essential concepts such as GROUP BY, HAVING, and aggregate functions (SUM(), AVG(), MAX(), MIN(), COUNT()). The queries analyze sales data from a retail database, aggregating sales by product category, filtering categories by total sales amount, and computing aggregate statistics such as average sale amount, maximum and minimum sale amounts, and sales count for each product."
},
{
    "image": "/images/data_manipulation.webp",
    "title": "Essential Data Manipulation with SQL",
    "tools": ["SQL"],
    "projectTypes": ["Database Management"],
    "link": "https://github.com/tonhwk/data_analysis_potfolio/tree/main/SQL%20Analysis/Data%20Manipulation",
    "projectDescription": "This project includes practical SQL queries demonstrating essential data manipulation techniques such as INSERT, UPDATE, DELETE, and UPSERT (MERGE). The queries manage customer, product, and sales data in a retail database, showcasing how to add new records, modify existing records, remove records, and perform upsert operations to combine insert and update functionalities."
},
{
  "image": "/images/ddl.png",
  "title": "Essential Data Definition Language (DDL)",
  "tools": ["SQL"],
  "projectTypes": ["Database Management"],
  "link": "https://github.com/tonhwk/data_analysis_potfolio/tree/main/SQL%20Analysis/Data%20Deifnition%20Language",
  "projectDescription": "This project includes practical SQL queries demonstrating essential Data Definition Language (DDL) techniques. The queries focus on defining and modifying database structures, including creating and altering tables, adding and dropping columns, and implementing constraints to manage database schema."
},
{
  "image": "/images/indexing.png",
  "title": "SQL Indexing and Performance Optimization",
  "tools": ["SQL"],
  "projectTypes": ["Database Management", "Performance Tuning"],
  "link": "https://github.com/tonhwk/data_analysis_potfolio/tree/main/SQL%20Analysis/Indexes%20and%20Performance%20Optimization",
  "projectDescription": "This project includes practical SQL queries demonstrating essential techniques for improving database performance through indexing, understanding query execution plans using EXPLAIN, and various performance tuning strategies. Additionally, it includes example queries for generating insightful reports."
},
{
  "image": "/images/concurrency.png",
  "title": "Transactions and Concurrency Control",
  "tools": ["SQL"],
  "projectTypes": ["Database Management", "Concurrency Control"],
  "link": "https://github.com/tonhwk/data_analysis_potfolio/tree/main/SQL%20Analysis/Transactions%20and%20Concurrency%20Control",
  "projectDescription": "This project includes practical SQL queries demonstrating essential techniques for managing transactions and implementing concurrency control in a SQL database. It covers transaction management, setting isolation levels, and handling multiple concurrency transactions."
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
