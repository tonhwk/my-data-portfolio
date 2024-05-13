import React from 'react';
import './Advanced.styles.css'; // Import CSS file for styling

function AdvancedDataAnalysisPage() {
  return (
    <div className="advanced-data-analysis-page">
      <h2>Advanced Data Analysis Techniques</h2>
        <h3>Time Series Analysis</h3>
        <ul>
          <li>
            <a href="https://github.com/tonhwk/data_analysis/blob/main/ARIMA/arima.py" target="_blank" rel="noopener noreferrer">
              ARIMA Analysis
            </a>
          </li>
          
        </ul>
        <h3>Predictive Modeling</h3>
        <ul>
          <li>
            <a href="https://github.com/tonhwk/data_analysis/blob/main/RandomForest/RandomForest.py" target="_blank" rel="noopener noreferrer">
              Random Forest
            </a>
          </li>
          
        </ul>
        <h3>Clustering</h3>
        <ul>
          <li>
            <a href="https://github.com/tonhwk/data_analysis/blob/main/Clustering/k-means.py" target="_blank" rel="noopener noreferrer">
              K-means
            </a>
          </li>
        </ul>
        <h3>Diomensional Reduction</h3>
        <ul>
          <li>
            <a href="https://github.com/tonhwk/data_analysis/blob/main/Dimensional%20Reduction/pca.py" target="_blank" rel="noopener noreferrer">
            Principal Component Analysis (PCA)

            </a>
          </li>
        </ul>
    </div>
  );
}

export default AdvancedDataAnalysisPage;
