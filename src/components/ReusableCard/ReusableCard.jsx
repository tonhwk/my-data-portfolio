import React from 'react';
import './ReusableCard.styles.css';

function Card({ image, title, tools, projectTypes, link, projectDescription }) {
  return (
    <div className="card">
        <img src={image} alt={title} className="card-image" />
        <h2 className="card-title">{title}</h2>
        <div className="card-info">
            <div className="chips">
            <p><strong>Tools:</strong></p>
            {tools.map((tool, index) => (
                <span key={index} className="chip">{tool}</span>
            ))}
            </div>
            <div className="chips">
            <p><strong>Project Types:</strong></p>
            {projectTypes.map((type, index) => (
                <span key={index} className="chip">{type}</span>
            ))}
            </div>
            <p><strong>Link:</strong> <a href={link} target="_blank" rel="noopener noreferrer">{link}</a></p>
        </div>
        <p className="project-description"><strong>Project Description:</strong> {projectDescription}</p>
       
    </div>
  );
}

export default Card;
