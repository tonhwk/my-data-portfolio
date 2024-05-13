import React from 'react';
import { Link } from 'react-router-dom'; // Import Link component from react-router-dom
import './DataSkillCards.styles.css'; // Import CSS file for styling

function DataSkillCards() {
  return (
    <div className="data-skill-cards">
      <div className="info-card">
        <Link to="/advanced_data_analysis">
          <h2 className="info-card-title">Advanced Data Analysis Techniques</h2>
          <p className="info-card-description">Experience with advanced data analysis techniques such as time series analysis, predictive modeling, clustering, and dimensionality reduction.</p>
        </Link>
      </div>
      <div className="info-card">
        <Link to="/real_world_data_projects">
          <h2 className="info-card-title">Real-world Data Projects</h2>
          <p className="info-card-description">Real-world data analysis projects that solve complex business problems or address societal issues. Datasets taken from Kaggle.</p>
        </Link>
      </div>
      <div className="info-card">
      <Link to="/visualizations">
          <h2 className="info-card-title">Interactive Visualizations</h2>
          <p className="info-card-description">Interactive visualizations using dashboards like Tableau and tools like Plotly, Bokeh, or D3.js to engage users and allow them to explore the data interactively.</p>
        </Link>
      </div>
      <div className="info-card">
        <h2 className="info-card-title">Data Cleaning and Preprocessing</h2>
        <p className="info-card-description">Showcase your expertise in data cleaning and preprocessing techniques, including data imputation, outlier detection, and feature engineering.
    * Highlight your ability to handle large datasets efficiently and optimize data processing pipelines.</p>
      </div>
      <div className="info-card">
        <h2 className="info-card-title">Data Integration</h2>
        <p className="info-card-description">Showcase projects where you've integrated data from multiple sources to gain a holistic understanding of a problem or phenomenon.
    * Illustrate your ability to work with APIs, web scraping, or data pipelines to collect and combine diverse datasets.</p>
      </div>
      <div className="info-card">
      <Link to="https://github.com/tonhwk/git-cheat-sheet">
        <h2 className="info-card-title">Version Control and Collaboration</h2>
        <p className="info-card-description">Demonstrate your proficiency in version control systems like Git and collaboration platforms like GitHub by sharing your code repositories and contributions.
      * Highlight your ability to work effectively in team environments and collaborate on data analysis projects.</p>
      </Link>
      </div>
      {/* Add more div elements for other skill cards */}
    </div>
  );
}

export default DataSkillCards;
