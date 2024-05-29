import React from 'react';
import './RealWorldDataProjects.styles.css'; // Import CSS file for styling

function DataProjectsPage() {
  return (
    <div className="data-projects-container">
      <h2>Real World Data Projects</h2>
      <div className="project-card">
        <img src="/images/daikin.jpeg" alt="KPI Analysis" className="project-image" />
        <h3>KPI Analysis</h3>
        <p>This dataset contains purchase order records for various components, detailing information about transactions. Key performance indicators (KPIs) analyzed include cost savings, supplier lead time, order accuracy, supplier performance, and spend under management. The analysis reveals insights into the efficiency and effectiveness of procurement processes, such as average lead times, top components by total spend, and supplier performance ratings.</p>
        <p className="project-details">Data Source: Fictional Daikin History Order Data</p>
        <a href="https://github.com/tonhwk/data_analysis_potfolio/blob/main/Real%20World%20Data/Direct%20Purchases%20KPI%20Analysis/kpi_analysis.ipynb" className="project-link">View Analysis</a>
      </div>
      <div className="project-card">
        <img src="/images/cereal.jpeg" alt="Cereal Analysis" className="project-image" />
        <h3>Cereal Analysis</h3>
        <p>This dataset contains information about various cereal products, including their name, manufacturer, type (cold or hot), nutritional content, display shelf, weight, number of cups per serving, and a rating.</p>
        <p className="project-details">Data Source: Kaggle</p>
        <a href="https://github.com/tonhwk/my-notebook-repo/blob/main/cereal/cereal.ipynb" className="project-link">View Analysis</a>
      </div>
      <div className="project-card">
        <img src="/images/mushrooms.png" alt="Mushrooms" className="project-image" />
        <h3>Mushrooms</h3>
        <p>This dataset includes descriptions of hypothetical samples corresponding to 23 species of gilled mushrooms in the Agaricus and Lepiota Family Mushroom drawn from The Audubon Society Field Guide to North American Mushrooms (1981). Each species is identified as definitely edible, definitely poisonous, or of unknown edibility and not recommended. This latter class was combined with the poisonous one.</p>
        <p className="project-details">Data Source: Kaggle</p>
        <a href="https://github.com/tonhwk/my-notebook-repo/blob/main/mushrooms/mushrooms.ipynb" className="project-link">View Analysis</a>
      </div>
      
      {/* Add more project cards as needed */}
    </div>
  );
}


export default DataProjectsPage;
