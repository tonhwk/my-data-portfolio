import React from 'react';
import './Visualizations.styles.css'; // Import CSS file for styling

function Visualizations() {
  return (
    <div className="tableau-visualizations-container">
      <h1>Interactive Visualizations</h1>
      <ul className="visualization-list">
        <li>
          <a
            href="https://public.tableau.com/app/profile/antonio4234/viz/HouseSalesDashboard_17156295410160/HouseSalesDashboard"
            target="_blank"
            rel="noopener noreferrer"
            className="visualization-link"
          >
            House Sales Dashboard
          </a>
          <p className="made-with">Made with Tableau</p>
          <p className="description">
            An interactive dataset for the House Sales of Washington County in the US. Select the month from the dropdown to dynamically change the data. Select the day of the month to change Distribution of prices and Condition Heatmap.
          </p>
        </li>
        <li>
          <a
            href="https://public.tableau.com/app/profile/antonio4234/viz/BritishAirwaysReview_17163023936000/BritishAirwaysReview"
            target="_blank"
            rel="noopener noreferrer"
            className="visualization-link"
          >
            British Airways Review
          </a>
          <p className="made-with">Made with Tableau</p>
          <p className="description">
            Pick a metric of the review like Overall Rating, Entertainment, Seat Comfort, etc. to visualize in an interactive map the average review for that selected metric. The interactive dashboard allows you to select between different metrics and periods of time from October 2016 to October 2023.
          </p>
        </li>
        {/* Add more dashboards as needed */}
      </ul>
    </div>
  );
}

export default Visualizations;
