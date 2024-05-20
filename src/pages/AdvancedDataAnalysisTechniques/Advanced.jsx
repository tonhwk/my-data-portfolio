import React from 'react';
import './Advanced.styles.css'; // Import CSS file for styling
import Card from '../../components/ReusableCard'; // Import the Card component

const projects = [
  {
    image: '/images/arima.png',
    title: 'ARIMA Analysis',
    tools: ['Python'],
    projectTypes: ['Time Series Analysis'],
    link: 'https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/arima.ipynb',
    description: 'ARIMA (Autoregressive Integrated Moving Average) is a popular time series forecasting method that models the relationship between a series of observations and its past values, as well as the error terms. It is particularly useful for analyzing and forecasting time series data that exhibit trends and seasonal patterns. ARIMA models are versatile and can be applied to various types of time series data, making them valuable tools for predicting future trends and making informed decisions based on historical data.'
  },
  {
    image: '/images/seasonal_decomposition.png',
    title: 'Seasonal Decomposition',
    tools: ['Python'],
    projectTypes: ['Time Series Analysis'],
    link: 'https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/Seasonal_decomposition_of_time_series.ipynb',
    description: 'Seasonal decomposition is a technique used in time series analysis to separate a time series into its different components: trend, seasonality, and residual (or noise). This method helps to understand the underlying patterns and structures within the data by isolating each component\'s contribution to the overall series.'
  },
  {
    image: '/images/autocorrelation.jpg',
    title: 'Autocorrelation',
    tools: ['Python'],
    projectTypes: ['Time Series Analysis'],
    link: 'https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/autocorrelation.ipynb',
    description: 'Autocorrelation, also known as serial correlation, is a statistical method used to measure the degree of similarity between a time series and a lagged version of itself. In simpler terms, it quantifies the relationship between observations in a time series at different time lags.'
  },
  {
    image: '/images/decomposition.jpg',
    title: 'Decomposition',
    tools: ['Python'],
    projectTypes: ['Time Series Analysis'],
    link: 'https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/decomposition.ipynb',
    description: 'Decomposition analysis is a time series analysis technique used to break down a time series into its constituent components, typically trend, seasonality, and noise. It helps in understanding the underlying patterns and structures within the time series data.'
  },
  {
    image: '/images/eda.avif',
    title: 'Exploratory Data Analysis (EDA)',
    tools: ['Python'],
    projectTypes: ['Data Analysis'],
    link: 'https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/eda.ipynb',
    description: 'Exploratory Data Analysis (EDA) involves analyzing data sets to summarize their main characteristics, often using visual methods. It helps in understanding the data\'s structure, detecting outliers, and discovering patterns before applying more complex modeling techniques.'
  },
  {
    image: '/images/exponential_smoothing.jpg',
    title: 'Exponential Smoothing',
    tools: ['Python'],
    projectTypes: ['Time Series Analysis'],
    link: 'https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/exponential_smoothing.ipynb',
    description: 'Exponential smoothing is a powerful technique in time series analysis used to forecast future values based on past observations while assigning exponentially decreasing weights to older data points.'
  },
  {
    image: '/images/moving_averages.webp',
    title: 'Moving Averages',
    tools: ['Python'],
    projectTypes: ['Time Series Analysis'],
    link: 'https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/moving_averages.ipynb',
    description: 'Moving averages are a fundamental technique in time series analysis used to smooth out fluctuations in data and identify underlying trends or patterns.'
  },
  {
    image: '/images/linear_regression.png',
    title: 'Linear Regression',
    tools: ['Python'],
    projectTypes: ['Predictive Modeling'],
    link: 'https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Predictive%20Modeling/linear_regression.ipynb',
    description: 'Linear regression is a statistical method used to model the relationship between a dependent variable (target) and one or more independent variables (features).'
  },
  {
    image: '/images/pca.png',
    title: 'Principal Component Analysis (PCA)',
    tools: ['Python'],
    projectTypes: ['Dimensionality Reduction'],
    link: 'https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Dimensional%20Reduction/pca.ipynb',
    description: 'Principal Component Analysis (PCA) is a technique used to emphasize variation and bring out strong patterns in a dataset. It reduces the dimensionality of the data by transforming it into a new set of variables, the principal components.'
  },
  {
    image: '/images/dbscan.jpeg',
    title: 'DBSCAN (Density-Based Spatial Clustering of Applications with Noise)',
    tools: ['Python'],
    projectTypes: ['Clustering'],
    link: 'https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Clustering/DBSCAN.ipynb',
    description: 'DBSCAN is a popular clustering algorithm used in data analysis and machine learning. Unlike traditional clustering algorithms like K-means, DBSCAN does not require specifying the number of clusters in advance, making it suitable for datasets with irregular cluster shapes and varying densities.'
  },
  {
    image: '/images/kmeans.jpeg',
    title: 'K-means Clustering',
    tools: ['Python'],
    projectTypes: ['Clustering'],
    link: 'https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Clustering/kmeans.ipynb',
    description: 'K-means is a widely-used clustering algorithm that partitions a dataset into K distinct, non-overlapping subsets or clusters. Each data point is assigned to the cluster with the nearest mean, known as the cluster centroid. The algorithm iteratively updates the centroids by minimizing the within-cluster sum of squares (WCSS), ensuring that data points within each cluster are as similar as possible, while those in different clusters are as distinct as possible.'
  }

]
function AdvancedDataAnalysisPage() {
  return (
    <div className="advanced-data-analysis-page">
      <h2>Advanced Data Analysis Techniques</h2>
      <div className="cards">
        {projects.map((project, index) => (
          <Card
            key={index}
            image={project.image}
            title={project.title}
            tools={project.tools}
            projectTypes={project.projectTypes}
            link={project.link}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}

export default AdvancedDataAnalysisPage;
