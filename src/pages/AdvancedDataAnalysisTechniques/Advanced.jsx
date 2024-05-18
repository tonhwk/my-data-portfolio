import React from 'react';
import './Advanced.styles.css'; // Import CSS file for styling

function AdvancedDataAnalysisPage() {
  return (
    <div className="advanced-data-analysis-page">
      <h2>Advanced Data Analysis Techniques</h2>

      <h3>Time Series Analysis</h3>
      <ul>
        <li>
          <a href="https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/arima.ipynb" target="_blank" rel="noopener noreferrer">
            ARIMA Analysis
          </a>
          <p className="description">
          ARIMA (Autoregressive Integrated Moving Average) is a popular time series forecasting method that models the relationship between a series of observations and its past values, as well as the error terms. It is particularly useful for analyzing and forecasting time series data that exhibit trends and seasonal patterns. ARIMA models are versatile and can be applied to various types of time series data, making them valuable tools for predicting future trends and making informed decisions based on historical data.
          </p>
        </li>
        <li>
          <a href="https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/eda.ipynb" target="_blank" rel="noopener noreferrer">
            Exploratory Data Analysis (EDA)
          </a>
          <p className="description">
            EDA involves analyzing data sets to summarize their main characteristics, often using visual methods. It helps in understanding the data's structure, detecting outliers, and discovering patterns before applying more complex modeling techniques. EDA typically includes tasks such as data visualization, summary statistics, correlation analysis, and data cleaning. It is an essential step in the data analysis process as it provides valuable insights into the data and informs subsequent analysis and modeling decisions.
          </p>
        </li>
        <li>
          <a href="https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/decomposition.ipynb" target="_blank" rel="noopener noreferrer">
            Decomposition
          </a>
          <p className="description">
          Decomposition analysis is a time series analysis technique used to break down a time series into its constituent components, typically trend, seasonality, and noise. It helps in understanding the underlying patterns and structures within the time series data. By decomposing the time series, analysts can isolate and analyze each component separately, which provides insights into the underlying factors driving the data's behavior. This technique is useful for forecasting, anomaly detection, and understanding long-term trends in the data.
          </p>
        </li>
        <li>
          <a href="https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/moving_averages.ipynb" target="_blank" rel="noopener noreferrer">
            Moving Averages
          </a>
          <p className="description">
          Moving averages are a fundamental technique in time series analysis used to smooth out fluctuations in data and identify underlying trends or patterns. This method involves calculating the average value of a subset of data points over a specified window of time, and then shifting the window forward one step at a time to create a series of averages. Moving averages help to reduce noise in the data, making it easier to identify long-term trends, seasonal patterns, and other underlying structures. 
          </p>
        </li>
        <li>
          <a href="https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/exponential_smoothing.ipynb" target="_blank" rel="noopener noreferrer">
            Exponential Smoothing
          </a>
          <p className="description">
          Exponential smoothing is a powerful technique in time series analysis used to forecast future values based on past observations while assigning exponentially decreasing weights to older data points. Unlike simple moving averages, which assign equal weights to all data points in the window, exponential smoothing places greater emphasis on recent observations, making it more responsive to changes in the underlying trend or pattern. This method helps to capture short-term fluctuations while still considering long-term trends, making it particularly useful for forecasting data with seasonal or trend components.
          </p>
        </li>
        <li>
          <a href="https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/Seasonal_decomposition_of_time_series.ipynb" target="_blank" rel="noopener noreferrer">
            Seasonal Decomposition
          </a>
          <p className="description">
          Seasonal decomposition is a technique used in time series analysis to separate a time series into its different components: trend, seasonality, and residual (or noise). This method helps to understand the underlying patterns and structures within the data by isolating each component's contribution to the overall series. The trend component represents the long-term direction of the data, showing whether it is increasing, decreasing, or remaining relatively constant over time. 
          </p>
        </li>
        <li>
          <a href="https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/autocorrelation.ipynb" target="_blank" rel="noopener noreferrer">
            Autocorrelation
          </a>
          <p className="description">
          Autocorrelation, also known as serial correlation, is a statistical method used to measure the degree of similarity between a time series and a lagged version of itself. In simpler terms, it quantifies the relationship between observations in a time series at different time lags. 
          Autocorrelation is essential in time series analysis because it helps identify patterns and dependencies within the data. 
          </p>
        </li>
      </ul>

      <h3>Predictive Modeling</h3>
      <ul>
        <li>
          <a href="https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Predictive%20Modeling/linear_regression.ipynb" target="_blank" rel="noopener noreferrer">
            Linear Regression
          </a>
          <p className="description">
          Linear regression is a statistical method used to model the relationship between a dependent variable (target) and one or more independent variables (features). The goal is to establish a linear equation that best predicts the target variable based on the input features.
          </p>
        </li>
      </ul>

      <h3>Clustering</h3>
      <ul>
      <li>
        <a href="https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Clustering/kmeans.ipynb" target="_blank" rel="noopener noreferrer">
          K-means
        </a>
        <p className="description">
          K-means is a widely-used clustering algorithm that partitions a dataset into K distinct, non-overlapping subsets or clusters. Each data point is assigned to the cluster with the nearest mean, known as the cluster centroid. The algorithm iteratively updates the centroids by minimizing the within-cluster sum of squares (WCSS), ensuring that data points within each cluster are as similar as possible, while those in different clusters are as distinct as possible.
        </p>
        
      </li>
      <li>
        <a href="https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Clustering/dbscan.ipynb" target="_blank" rel="noopener noreferrer">
        DBSCAN (Density-Based Spatial Clustering of Applications with Noise)
        </a>
        <p className="description">
        DBSCAN is a popular clustering algorithm used in data analysis and machine learning. Unlike traditional clustering algorithms like K-means, DBSCAN does not require specifying the number of clusters in advance, making it suitable for datasets with irregular cluster shapes and varying densities.
        </p>
        
      </li>
      </ul>

      <h3>Dimensional Reduction</h3>
      <ul>
        <li>
          <a href="https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Dimensional%20Reduction/pca.ipynb" target="_blank" rel="noopener noreferrer">
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
