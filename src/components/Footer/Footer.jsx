import React from 'react';
import './Footer.styles.css'; // Import CSS file for styling

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p className="footer-text">Website made by Antonio Martinez with Reactjs. All rights reserved © 2024.</p>
        <div className="footer-links">
          <a href="mailto:andresreg93@gmail.com" className="footer-link">Contact</a>
          <a href="/privacy-policy" className="footer-link">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
