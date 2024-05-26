import React from 'react';
import './NLP.styles.css'; // Import CSS file for styling
import Card from '../../components/ReusableCard'; // Import the Card component

const projects = [
    {
      "image": "/images/sentiment_analysis.jpeg",
      "title": "Sentiment Analysis with NLP",
      "tools": ["Python", "pandas", "scikit-learn", "NLTK"],
      "projectTypes": ["Text Analysis", "Machine Learning"],
      "link": "https://github.com/tonhwk/data_analysis_potfolio/blob/main/Natural%20Language%20Processing/nlp.py",
      "projectDescription": "This project focuses on sentiment analysis of IMDB reviews using Natural Language Processing techniques. It covers data loading, pre-processing, feature extraction using TF-IDF, and training a Naive Bayes classifier. The project demonstrates the process of converting textual data into meaningful insights by predicting the sentiment of movie reviews."
    }
  ]
  

function NLP() {
  return (
    <div className="nlp-page">
      <h2>Natural Language Processing</h2>
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

export default NLP;
