import React from 'react';
import './Visualizations.styles.css'; // Import CSS file for styling

function Visualizations() {
  return (
    <div className="tableau-visualizations-container">
      <h1>Vizualizations</h1>
      <ul className="visualization-list">
        <li>
          <a href="https://public.tableau.com/app/profile/antonio4234/viz/HouseSalesDashboard_17156295410160/HouseSalesDashboard" target="_blank" rel="noopener noreferrer">
            House Sales Dashboard
          </a>
          <p className="made-with">Made with Tableau</p>
          <p>An interactive dataset for the House Sales of Washington County in the US.
            Select the month from the dropdown to dynamically change the data. Select the day of
            the month to change Distribution of prices and View and Condition Heatmap.
          </p>
        </li>
       
        {/* Add more dashboards as needed */}
      </ul>
    </div>
  );
}

export default Visualizations;
