import React from 'react';
import '../styles/Hero.css';
import Heroo from '../assets/images/comp.png'


const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        <div className="hero-content">
          <h1>More than just shorter links</h1>
          <p>Build your brand's recognition and get detailed insights on how your links are performing.</p>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="hero-image">
          <img src={Heroo} alt="Person working at computer" height={450} />
        </div>
      </div>
    </section>
  );
};

export default Hero;