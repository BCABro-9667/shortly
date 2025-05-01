import React from 'react';
import '../styles/Features.css';
import img1 from '../assets/images/1.png'
import img2 from '../assets/images/2.png'
import img3 from '../assets/images/3.png'

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="features-intro">
          <h2>Advanced Statistics</h2>
          <p>Track how your links are performing across the web with our advanced statistics dashboard.</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <img src={img1} alt="Brand Recognition" />
            </div>
            <h3>Brand Recognition</h3>
            <p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help install confidence in your content.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <img src={img2} alt="Detailed Records" />
            </div>
            <h3>Detailed Records</h3>
            <p>Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <img src={img3} alt="Fully Customizable" />
            </div>
            <h3>Fully Customizable</h3>
            <p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;