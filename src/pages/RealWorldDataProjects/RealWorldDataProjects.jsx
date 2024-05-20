import React from 'react';
import './RealWorldDataProjects.styles.css'; // Import CSS file for styling

function DataProjectsPage() {
  return (
    <div className="data-projects-container">
      <h2>Real World Data Projects</h2>
      <div className="project-card">
        <h3>Cereal Analysis</h3>
        <p>This dataset contains information about various cereal products, including their name, manufacturer, type (cold or hot), nutritional content, display shelf, weight, number of cups per serving, and a rating.</p>
        <a href="https://nbviewer.org/github/tonhwk/my-notebook-repo/blob/main/cereal/cereal.ipynb" className="project-link">View Analysis</a>
      
      </div>
      <div className="project-card">
        <h3>Mushrooms</h3>
        <p>This dataset includes descriptions of hypothetical samples corresponding to 23 species of gilled mushrooms in the Agaricus and Lepiota Family Mushroom drawn from The Audubon Society Field Guide to North American Mushrooms (1981). Each species is identified as definitely edible, definitely poisonous, or of unknown edibility and not recommended. This latter class was combined with the poisonous one. </p>
        <a href="https://nbviewer.org/github/tonhwk/my-notebook-repo/blob/main/mushrooms/mushrooms.ipynb" className="project-link">View Analysis</a>
      </div>
      {/* Add more project cards as needed */}
    </div>
  );
}

export default DataProjectsPage;
