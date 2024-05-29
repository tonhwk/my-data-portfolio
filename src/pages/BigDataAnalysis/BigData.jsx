import React from 'react';
import './BigData.styles.css'; // Import CSS file for styling
import Card from '../../components/ReusableCard'; // Import the Card component

const projects = [
    {
      "image": "/images/customer_segmentation.png", 
      "title": "Customer Segmentation with Spark",
      "tools": ["Python", "PySpark", "Matplotlib"],
      "projectTypes": ["Clustering", "Big Data"],
      "link": "https://github.com/tonhwk/data_analysis_portfolio/blob/main/BigData/CustomerSegmentation.py",
      "projectDescription": "This project focuses on customer segmentation using Apache Spark. It includes data loading, preprocessing, feature engineering, and clustering using K-means. The project demonstrates how to handle large datasets efficiently and gain business insights through customer segmentation."
    }
]

function BigData() {
  return (
    <div className="big-data-page">
      <h2>Big Data Analysis</h2>
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

export default BigData;
