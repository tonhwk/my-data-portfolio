import React from 'react';
import { Link } from 'react-router-dom';
import './DataSkillCards.styles.css';

function DataSkillCards() {
  return (
    <div className="data-skill-cards">
      <Link to="/advanced_data_analysis" className="info-card">
      <img src="/images/data_analytics.avif" alt="Advanced Data Analysis" className="info-card-image" />
        <h2 className="info-card-title">Advanced Data Analysis Techniques</h2>
        <p>Utilizing complex statistical methods to derive insights from data.</p>
        <ul className="info-card-description">
          <li>Time series analysis</li>
          <li>Predictive modeling</li>
          <li>Clustering</li>
          <li>Dimensionality reduction</li>
        </ul>
      </Link>
      <Link to="/real_world_data_projects" className="info-card">
      <img src="/images/world_data.jpeg" alt="Advanced Data Analysis" className="info-card-image" />
        <h2 className="info-card-title">Real-world Data Projects</h2>
        <p>Implementing practical solutions to real-world challenges using data.</p>
        <ul className="info-card-description">
          <li>Solving complex business problems</li>
          <li>Addressing societal issues</li>
          <li>Datasets from Kaggle</li>
        </ul>
      </Link>
      <Link to="/visualizations" className="info-card">
      <img src="/images/visualizations.jpg" alt="Advanced Data Analysis" className="info-card-image" />
        <h2 className="info-card-title">Interactive Visualizations</h2>
        <p>Creating interactive dashboards and visual data representations.</p>
        <ul className="info-card-description">
          <li>Creating dashboards with Tableau</li>
          <li>Using tools like Plotly, Bokeh, or D3.js</li>
          <li>Engaging users with interactive data exploration</li>
        </ul>
      </Link>
      <Link to="/data-cleaning" className="info-card">
      <img src="/images/cleansing.png" alt="Advanced Data Analysis" className="info-card-image" />
        <h2 className="info-card-title">Data Cleaning and Preprocessing</h2>
        <p>Ensuring data quality through rigorous cleaning and preprocessing.</p>
        <ul className="info-card-description">
          <li>Data imputation</li>
          <li>Outlier detection</li>
          <li>Feature engineering</li>
          <li>Handling large datasets efficiently</li>
          <li>Optimizing data processing pipelines</li>
        </ul>
      </Link>
      <Link to="/data-integration" className="info-card">
      <img src="/images/data_integration.jpeg" alt="Advanced Data Analysis" className="info-card-image" />
        <h2 className="info-card-title">Data Integration</h2>
        <p>Combining data from various sources for comprehensive analysis.</p>
        <ul className="info-card-description">
          <li>Integrating data from multiple sources</li>
          <li>APIs and web scraping</li>
          <li>Building data pipelines</li>
        </ul>
      </Link>
      <Link to="https://github.com/tonhwk/git-cheat-sheet" className="info-card">
      <img src="/images/github.png" alt="Advanced Data Analysis" className="info-card-image" />
        <h2 className="info-card-title">Version Control and Collaboration</h2>
        <p>Managing and sharing code through version control systems.</p>
        <ul className="info-card-description">
          <li>Proficiency in Git</li>
          <li>Collaboration on GitHub</li>
          <li>Sharing code repositories</li>
          <li>Working effectively in teams</li>
        </ul>
      </Link>
      <Link to="/data-engineering" className="info-card">
      <img src="/images/etl_process.png" alt="Advanced Data Analysis" className="info-card-image" />
        <h2 className="info-card-title">Data Engineering and ETL Processes</h2>
        <p>Designing robust ETL processes for efficient data management.</p>
        <ul className="info-card-description">
          <li>Designing and implementing ETL processes</li>
          <li>Database design and optimization</li>
          <li>Building data pipelines</li>
          <li>Ensuring data quality and consistency</li>
          <li>Optimizing data workflows for performance</li>
        </ul>
      </Link>
    </div>
  );
}

export default DataSkillCards;
