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
      <Link to="/advanced-sql-analysis" className="info-card">
      <img src="/images/mysql.jpeg" alt="Advanced SQL Analysis" className="info-card-image" />
      <h2 className="info-card-title">SQL Analysis & Querying</h2>
      <p>Utilizing SQL for complex data analysis and reporting.</p>
      <ul className="info-card-description">
          <li>Performing advanced SQL queries</li>
          <li>Comprehensive data modeling</li>
          <li>Joining and aggregating data across multiple tables</li>
          <li>Writing efficient and optimized SQL code</li>
          <li>Generating insightful reports from data</li>
          <li>Handling large datasets with precision</li>
      </ul>
</Link>
<Link to="/nlp-analysis" className="info-card">
  <img src="/images/nlp.png" alt="Natural Language Processing" className="info-card-image" />
  <h2 className="info-card-title">Natural Language Processing</h2>
  <p>Leveraging NLP techniques for text analysis and understanding.</p>
  <ul className="info-card-description">
      <li>Text pre-processing and normalization</li>
      <li>Tokenization and vectorization</li>
      <li>Sentiment analysis and opinion mining</li>
      <li>Named entity recognition (NER)</li>
      <li>Part-of-speech tagging</li>
      <li>Topic modeling and clustering</li>
      <li>Building and deploying NLP models</li>
  </ul>
</Link>
<Link to="/big-data-analysis" className="info-card">
  <img src="/images/big_data.jpeg" alt="Big Data Analysis" className="info-card-image" />
  <h2 className="info-card-title">Big Data Analysis</h2>
  <p>Utilizing Apache Spark and other tools for large-scale data analysis.</p>
  <ul className="info-card-description">
      <li>Data Preprocessing and feature engineering with PySpark</li>
      <li>EDA on large datasets using Hive</li>
      <li>Customer segmentation with K-means clustering</li>
      <li>Real-time data processing with Kafka and Spark Streaming</li>
      <li>Data integration with NiFi</li>
      <li>Large-scale data storage with HDFS and Cassandra</li>
      <li>SQL querying on big data with Presto</li>
      <li>Real-time computation with Storm</li>
  </ul>
</Link>




    </div>
  );
}

export default DataSkillCards;
