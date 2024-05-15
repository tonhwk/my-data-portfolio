import React from 'react';
import './RealWorldDataProjects.styles.css'; // Import CSS file for styling

function DataProjectsPage() {
  return (
    <div className="data-projects-container">
      <h2>Real World Data Projects</h2>
      <div className="project-card">
        <h3>Marketing Analysis</h3>
        <p>Analyze marketing campaign data to identify customer segments and improve targeting strategies. Dataset taken from Kaggle.</p>
        <a href="https://github.com/tonhwk/data_analysis/tree/main/Real%20World%20Data/Marketing%20Campaign" className="project-link">View Analysis</a>
      </div>
      <div className="project-card">
        <h3>Cereal Analysis</h3>
        <p>This dataset contains information about various cereal products, including their name, manufacturer, type (cold or hot), nutritional content, display shelf, weight, number of cups per serving, and a rating.</p>
        <a href="https://github.com/tonhwk/my-notebook-repo/blob/main/cereal.ipynb" className="project-link">View Analysis</a>
      </div>
      {/* Add more project cards as needed */}
    </div>
  );
}

export default DataProjectsPage;
