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
          <p className="description">
          ARIMA (Autoregressive Integrated Moving Average) is a popular time series forecasting method that models the relationship between a series of observations and its past values, as well as the error terms. It is particularly useful for analyzing and forecasting time series data that exhibit trends and seasonal patterns. ARIMA models are versatile and can be applied to various types of time series data, making them valuable tools for predicting future trends and making informed decisions based on historical data.
          </p>
        </li>
        <li>
          <a href="https://github.com/tonhwk/data_analysis/blob/main/Examples/Time%20Series/eda.ipynb" target="_blank" rel="noopener noreferrer">
            Exploratory Data Analysis (EDA)
          </a>
          <p className="description">
            EDA involves analyzing data sets to summarize their main characteristics, often using visual methods. It helps in understanding the data's structure, detecting outliers, and discovering patterns before applying more complex modeling techniques. EDA typically includes tasks such as data visualization, summary statistics, correlation analysis, and data cleaning. It is an essential step in the data analysis process as it provides valuable insights into the data and informs subsequent analysis and modeling decisions.
          </p>
        </li>
        <li>
          <a href="https://github.com/tonhwk/data_analysis/blob/main/Examples/Time%20Series/decomposition.ipynb" target="_blank" rel="noopener noreferrer">
            Decomposition
          </a>
          <p className="description">
          Decomposition analysis is a time series analysis technique used to break down a time series into its constituent components, typically trend, seasonality, and noise. It helps in understanding the underlying patterns and structures within the time series data. By decomposing the time series, analysts can isolate and analyze each component separately, which provides insights into the underlying factors driving the data's behavior. This technique is useful for forecasting, anomaly detection, and understanding long-term trends in the data.
          </p>
        </li>
      </ul>

      <h3>Predictive Modeling</h3>
      <ul>
        <li>
          <a href="https://github.com/tonhwk/data_analysis/blob/main/RandomForest/RandomForest.py" target="_blank" rel="noopener noreferrer">
            Random Forest
          </a>
          <p className="description">
            Random Forest is an ensemble learning method used for classification and regression. It operates by constructing multiple decision trees during training and outputs the mode of the classes (classification) or mean prediction (regression) of the individual trees.
          </p>
        </li>
      </ul>

      <h3>Clustering</h3>
      <ul>
        <li>
          <a href="https://github.com/tonhwk/data_analysis/blob/main/Clustering/k-means.py" target="_blank" rel="noopener noreferrer">
            K-means
          </a>
          <p className="description">
            K-means is a popular clustering algorithm that partitions data into K clusters based on feature similarity. It assigns data points to the cluster with the nearest mean, iteratively refining the cluster centers until convergence.
          </p>
        </li>
      </ul>

      <h3>Dimensional Reduction</h3>
      <ul>
        <li>
          <a href="https://github.com/tonhwk/data_analysis/blob/main/Dimensional%20Reduction/pca.py" target="_blank" rel="noopener noreferrer">
            Principal Component Analysis (PCA)
          </a>
          <p className="description">
            PCA is a technique used to emphasize variation and bring out strong patterns in a dataset. It reduces the dimensionality of the data by transforming it into a new set of variables, the principal components, which are orthogonal and capture the maximum variance.
          </p>
        </li>
      </ul>
    </div>
  );
}

export default AdvancedDataAnalysisPage;
