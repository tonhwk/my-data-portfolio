import React from 'react';
import './NLP.styles.css'; // Import CSS file for styling
import Card from '../../components/ReusableCard'; // Import the Card component

const projects = [
    {
      "image": "/images/sentiment_analysis.jpeg",
      "title": "Sentiment Analysis",
      "tools": ["Python", "pandas", "scikit-learn", "NLTK"],
      "projectTypes": ["Text Analysis", "Machine Learning"],
      "link": "https://github.com/tonhwk/data_analysis_potfolio/blob/main/Natural%20Language%20Processing/nlp.py",
      "projectDescription": "This project focuses on sentiment analysis of IMDB reviews using Natural Language Processing techniques. It covers data loading, pre-processing, feature extraction using TF-IDF, and training a Naive Bayes classifier. The project demonstrates the process of converting textual data into meaningful insights by predicting the sentiment of movie reviews."
    },
    {
      "image": "/images/spam_detector.jpg",
      "title": "Spam Detector",
      "tools": ["Python", "pandas", "scikit-learn", "NLTK", "Matplotlib", "joblib"],
      "projectTypes": ["Text Classification", "Machine Learning"],
      "link": "https://github.com/tonhwk/data_analysis_potfolio/blob/main/Natural%20Language%20Processing/spam_detector.py",
      "projectDescription": "This project focuses on detecting spam messages using Natural Language Processing and machine learning techniques. It involves data loading, text preprocessing, feature extraction using TF-IDF, and training a Logistic Regression classifier. The project includes evaluating the model's performance through metrics like accuracy, classification report, confusion matrix, and ROC-AUC score. It also demonstrates how to save and reuse the trained model and vectorizer."
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
