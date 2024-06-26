import React from 'react';
import './DataCleaning.styles.css'; // Import the CSS file for styling

function DataCleaning() {
  return (
    <div className="data-cleaning-container">
      <h1 className="heading">Data Cleaning and Preprocessing</h1>
      <p className="description">
        Data cleaning is a crucial step in the data analysis process. It involves identifying and correcting errors, handling missing values, and transforming data into a suitable format for analysis.
      </p>

      <h2 className="subheading">Common Data Cleaning Techniques</h2>
      <ul className="techniques-list">
        <li>Handling missing values</li>
        <li>Removing duplicates</li>
        <li>Correcting errors and inconsistencies</li>
        <li>Data type conversions</li>
        <li>Standardizing data formats</li>
        <li>Removing outliers</li>
      </ul>

      <h2 className="subheading">Examples</h2>
      <div className="examples">
        <div className="example">
          <h3>Example 1: Handling Missing Values</h3>
          <pre className="code-snippet">
{`# Python code example
import pandas as pd

# Load dataset
df = pd.read_csv('data.csv')

# Fill missing values with the mean of the column
df.fillna(df.mean(), inplace=True)

# Drop rows with any missing values
df.dropna(inplace=True)
`}
          </pre>
        </div>
        <div className="example">
          <h3>Example 2: Removing Duplicates</h3>
          <pre className="code-snippet">
{`# Python code example
import pandas as pd

# Load dataset
df = pd.read_csv('data.csv')

# Remove duplicate rows
df.drop_duplicates(inplace=True)
`}
          </pre>
        </div>
        <div className="example">
          <h3>Example 3: Correcting Errors and Inconsistencies</h3>
          <pre className="code-snippet">
{`# Python code example
import pandas as pd

# Load dataset
df = pd.read_csv('data.csv')

# Replace inconsistent values
df['column_name'].replace({'wrong_value': 'correct_value'}, inplace=True)
`}
          </pre>
        </div>
        <div className="example">
          <h3>Example 4: Converting Data Types</h3>
          <pre className="code-snippet">
{`# Python code example
import pandas as pd

# Load dataset
df = pd.read_csv('data.csv')

# Convert column to numeric type
df['column_name'] = pd.to_numeric(df['column_name'], errors='coerce')
`}
          </pre>
        </div>
        <div className="example">
          <h3>Example 5: Standardizing Data Formats</h3>
          <pre className="code-snippet">
{`# Python code example
import pandas as pd

# Load dataset
df = pd.read_csv('data.csv')

# Standardize date format
df['date_column'] = pd.to_datetime(df['date_column'], format='%Y-%m-%d')
`}
          </pre>
        </div>
        <div className="example">
          <h3>Example 6: Removing Outliers</h3>
          <pre className="code-snippet">
{`# Python code example
import pandas as pd

# Load dataset
df = pd.read_csv('data.csv')

# Remove outliers using the IQR method
Q1 = df['column_name'].quantile(0.25)
Q3 = df['column_name'].quantile(0.75)
IQR = Q3 - Q1

df = df[~((df['column_name'] < (Q1 - 1.5 * IQR)) | (df['column_name'] > (Q3 + 1.5 * IQR)))]
`}
          </pre>
        </div>
      </div>

      <h2 className="subheading">Projects</h2>
      <ul className="projects-list">
        <li><a href="https://github.com/tonhwk/data_analysis_potfolio/blob/main/Data%20Cleaning/animal_bites/animal_bites.ipynb" target="_blank" rel="noopener noreferrer">Project 1: Data Cleaning with Pandas</a></li>
        <li><a href="https://github.com/tonhwk/data_analysis_potfolio/blob/main/Data%20Cleaning/titanic/titanic_data_preprocessing.ipynb" target="_blank" rel="noopener noreferrer">Project 2: Data Preprocessing for Machine Learning</a></li>
      </ul>
    </div>
  );
}

export default DataCleaning;
