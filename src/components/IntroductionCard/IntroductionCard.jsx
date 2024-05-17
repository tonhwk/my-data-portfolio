// Home.js
import React from 'react';
import './IntroductionCard.styles.css'; // Import CSS file
import profileImage from './profile.jpeg'; // Import your profile image
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faKaggle } from '@fortawesome/free-brands-svg-icons';






function IntroductionCard() {
  return (
    <div className="home-container">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1 className="home-heading">Hello, my name is Antonio Martinez</h1>
        <p className="home-description">& Welcome to my data analysis portfolio! I specialize in transforming data into actionable insights. Here, you'll find a collection of projects that demonstrate my expertise in exploring, analyzing, and visualizing data. From market research to predictive modeling, each project showcases my passion for uncovering meaningful patterns and driving informed decisions. Explore my work and discover the stories hidden within the data. </p>
        <div className="icon-row">
        <a href="https://www.linkedin.com/in/andres-martinez-7b6842b2/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} size="lg" color="#0077B5" />
        </a>
        <a href="https://www.kaggle.com/tonhwk" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faKaggle} size="lg" color="#20BEFF"/>
        </a>
        <a href="https://github.com/tonhwk" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} size="lg" color="#181717"/>
        </a>
        
      </div>
      

       

    </div>
  );
}

export default IntroductionCard;
