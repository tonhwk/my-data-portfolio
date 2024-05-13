import React from 'react';
import './RealWorldDataProjects.styles.css'; // Import CSS file for styling

function DataProjectsPage() {
  return (
    <div className="data-projects-container">
      <h2>Real World Data Projects</h2>
      <div className="project-card">
        <h3>Marketing Analysis</h3>
        <p>Analyze marketing campaign data to identify customer segments and improve targeting strategies. Dataset taken from Kaggle.</p>
        <a href="https://github.com/tonhwk/data_analysis/tree/main/Marketing%20Campaign" className="project-link">View Analysis</a>
      </div>
      {/* Add more project cards as needed */}
    </div>
  );
}

export default DataProjectsPage;
