import React from 'react';
import './Advanced.styles.css'; // Import CSS file for styling
import Card from '../../components/ReusableCard'; // Import the Card component

const projects = [
  {
    image: '/images/arima.png',
    title: 'ARIMA Analysis',
    tools: ["Python", "pandas", "statsmodels", "matplotlib", "seaborn"],
    projectTypes: ["Time Series Analysis", "Forecasting", "Predictive Analytics"],
    link: 'https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/arima.ipynb',
    projectDescription: "The project utilizes ARIMA (AutoRegressive Integrated Moving Average) modeling technique to forecast future values based on historical time series data. The dataset consists of monthly sales data, which is analyzed and visualized to understand the underlying patterns. ARIMA model is then applied to the data to generate forecasts for the next 12 periods. The forecasted values are plotted alongside the observed data to provide insights into future sales trends. This analysis aids in decision-making processes and strategic planning for optimizing sales strategies and resource allocation."

  },
  {
    "image": "/images/seasonal_decomposition.png",
    "title": "Seasonal Decomposition",
    "tools": ["Python", "pandas", "statsmodels", "matplotlib", "seaborn"],
    "projectTypes": ["Time Series Analysis", "Trend Analysis", "Seasonality Analysis"],
    "link": "https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/Seasonal_decomposition_of_time_series.ipynb",
    "projectDescription": "This project involves conducting Seasonal Decomposition of Time Series (STL) analysis on a dataset of monthly sales. STL is a robust method used to decompose a time series into its seasonal, trend, and residual components, enabling a deeper understanding of underlying patterns and structures within the data. The decomposition process reveals seasonal variations, long-term trends, and irregular fluctuations present in the time series. By visualizing the decomposed components, stakeholders gain insights into the seasonal patterns and overall behavior of the sales data, which can inform strategic business decisions and forecasting models."
  },
  {
    "image": "/images/autocorrelation.jpg",
    "title": "Autocorrelation",
    "tools": ["Python", "pandas", "statsmodels", "matplotlib", "seaborn"],
    "projectTypes": ["Time Series Analysis", "Trend Analysis", "Predictive Analytics"],
    "link": "https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/autocorrelation.ipynb",
    "projectDescription": "This project focuses on analyzing the autocorrelation and partial autocorrelation of a time series dataset, specifically monthly sales data. Autocorrelation (ACF) and Partial Autocorrelation (PACF) plots are generated to identify the order of AutoRegressive (AR) and Moving Average (MA) terms, which are essential components in time series modeling. The ACF plot illustrates the correlation between the series and its lagged values at various lag intervals, while the PACF plot shows the correlation between the series and its lagged values after removing the linear dependence of shorter lag intervals. Understanding these plots aids in selecting appropriate parameters for ARIMA modeling and improving the accuracy of time series forecasts."
  },
  {
    "image": "/images/decomposition.jpg",
    "title": "Decomposition",
    "tools": ["Python", "pandas", "statsmodels", "matplotlib", "seaborn"],
    "projectTypes": ["Time Series Analysis", "Trend Analysis", "Seasonality Analysis"],
    "link": "https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/decomposition.ipynb",
    "projectDescription": "This project focuses on decomposing a time series dataset of monthly sales into its constituent components using the seasonal_decompose function from the statsmodels library. The decomposition process involves separating the time series into trend, seasonality, and residual components. By visualizing the decomposed components, analysts can gain insights into the underlying patterns and structures within the sales data, including long-term trends, seasonal variations, and irregular fluctuations. Understanding these components is crucial for forecasting future sales trends, identifying seasonal patterns, and making informed business decisions."
  },
  {
    "image": "/images/eda.avif",
    "title": "Exploratory Data Analysis (EDA)",
    "tools": ["Python", "pandas", "matplotlib", "seaborn"],
    "projectTypes": ["Data Analysis", "Exploratory Data Analysis"],
    "link": "https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/eda.ipynb",
    "projectDescription": "This project begins loading the monthly sales csv and then preprocessing it, including checking for missing values, converting the date column to datetime format, and setting it as the index. The time series is then visualized through a line plot to observe its trend over time. Next, the time series is decomposed into its trend, seasonality, and residual components. The analysis also includes plotting rolling statistics (rolling mean and standard deviation) to observe changes in the series' variability over time. Additionally, the distribution of values is visualized through a histogram, and outliers are detected using a boxplot. Finally, the correlation between data points is examined using a correlation matrix and heatmap, which reveals the strength and direction of the relationship between the sales data."
  },
  {
    "image": "/images/exponential_smoothing.jpg",
    "title": "Exponential Smoothing",
    "tools": ["Python", "pandas", "statsmodels", "matplotlib", "seaborn"],
    "projectTypes": ["Time Series Analysis", "Forecasting", "Predictive Analytics"],
    "link": "https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/exponential_smoothing.ipynb",
    "projectDescription": "This python project employs the Holt-Winters method of exponential smoothing (ETS) to forecast future values in a time series dataset representing monthly sales. The dataset is loaded using Pandas, and the ETS model is fitted to the data. The model configuration includes additive trend and seasonal components, with a seasonal period of 12 months, reflecting annual seasonality. After fitting the model to historical data, it generates forecasts for future periods. These forecasts are plotted alongside the original time series data using Matplotlib. This visualization provides a clear comparison between the actual sales values and the forecasted values, aiding in understanding the model's predictive performance."
  },
  {
    "image": "/images/moving_averages.webp",
    "title": "Moving Averages",
    "tools": ["Python", "pandas", "matplotlib", "seaborn"],
    "projectTypes": ["Time Series Analysis", "Trend Analysis"],
    "link": "https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Time%20Series/moving_averages.ipynb",
    "projectDescription": "This python script utilizes moving averages to analyze a time series dataset representing monthly sales. The dataset is loaded using Pandas, and the moving average is computed with a window size of 12 months, providing a smoothed representation of the original series. By plotting both the original time series and the moving average on the same graph using Matplotlib, this analysis facilitates the identification of underlying trends and patterns in the sales data. The moving average acts as a filter, reducing noise and highlighting long-term trends, which is particularly useful for detecting changes in sales behavior over time."
  },
  {
    "image": "/images/linear_regression.png",
    "title": "Linear Regression",
    "tools": ["Python", "pandas", "scikit-learn", "matplotlib", "seaborn"],
    "projectTypes": ["Predictive Modeling", "Regression Analysis"],
    "link": "https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Predictive%20Modeling/linear_regression.ipynb",
    "projectDescription": "This project demonstrates a linear regression analysis on a dataset containing information about house prices. The dataset includes features such as the size of the house, the number of bedrooms, and the number of bathrooms, along with their corresponding prices. After loading and exploring the dataset, the script splits it into training and testing sets using the train_test_split function from Scikit-learn. It then creates a linear regression model and trains it on the training data. Using the trained model, predictions are made on the test set, and the performance of the model is evaluated using metrics such as Mean Squared Error (MSE) and R-squared. The MSE measures the average squared difference between the actual and predicted values, while the R-squared indicates the proportion of the variance in the target variable that is explained by the model."
  },
  {
    image: '/images/pca.png',
    title: 'Principal Component Analysis (PCA)',
    tools: ["Python", "pandas", "scikit-learn", "matplotlib", "seaborn"],
    projectTypes: ["Dimensionality Reduction", "Data Visualization"],
    link: 'https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Dimensional%20Reduction/pca.ipynb',
    projectDescription: "The project demonstrates the application of Principal Component Analysis (PCA) on a dataset containing measurements of flower characteristics. The dataset includes features such as sepal length, sepal width, petal length, and petal width for various species of flowers. After loading and exploring the dataset, the script separates the features (sepal length, sepal width, petal length, and petal width) from the target variable (species). The features are then standardized using the StandardScaler from Scikit-learn to ensure that each feature contributes equally to the PCA. PCA is then performed to reduce the dimensionality of the dataset to two principal components. These components capture the maximum variance in the data while minimizing information loss. The principal components are visualized in a scatter plot, where each point represents a flower sample. The color of each point corresponds to the species of the flower, allowing for easy identification of clusters or patterns in the data."
  },
  {
    "image": "/images/dbscan.jpeg",
    "title": "DBSCAN (Density-Based Spatial Clustering of Applications with Noise)",
    "tools": ["Python", "pandas", "scikit-learn", "matplotlib", "seaborn"],
    "projectTypes": ["Clustering", "Unsupervised Learning", "Data Visualization"],
    "link": "https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Clustering/DBSCAN.ipynb",
    "projectDescription": "This project explores customer segmentation using Density-Based Spatial Clustering of Applications with Noise (DBSCAN) algorithm. The dataset consists of demographic and spending behavior information of mall customers, including gender, age, annual income, and spending score. Utilizing Python and Scikit-learn, the data is preprocessed by encoding categorical variables and standardizing features. DBSCAN is applied to identify clusters based on density within the feature space. The resulting clusters are visualized using Principal Component Analysis (PCA), providing insights into customer distribution and outlier detection. This project demonstrates proficiency in unsupervised learning techniques, data preprocessing, clustering analysis, and data visualization, with implications for targeted marketing strategies and customer engagement."
  },
  {
    "image": "/images/kmeans.jpeg",
    "title": "K-means Clustering",
    "tools": ["Python", "pandas", "scikit-learn", "matplotlib", "seaborn"],
    "projectTypes": ["Clustering", "Unsupervised Learning", "Data Visualization"],
    "link": "https://github.com/tonhwk/data_analysis_potfolio/blob/main/Advanced%20Data%20Analysis%20Techniques/Clustering/kmeans.ipynb",
    "projectDescription": "This python project employs K-Means clustering algorithm for customer segmentation based on their annual income and spending score. Using Python and Scikit-learn, the dataset contains information on customer demographics such as age, annual income, and spending score. Categorical features are encoded into numerical values, and the features are standardized using StandardScaler. The optimal number of clusters is determined using the elbow method, indicating the point where the within-cluster sum of squares (WCSS) begins to level off. With five clusters identified, K-Means clustering is applied to group customers into segments based on their spending behavior and income levels. The resulting clusters are visualized in a scatter plot, offering insights into customer segments and potential marketing strategies for different target groups."
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
            projectDescription={project.projectDescription}
            

          />
        ))}
      </div>
    </div>
  );
}

export default AdvancedDataAnalysisPage;
