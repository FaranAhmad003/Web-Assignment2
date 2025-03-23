import React from 'react';
import '../styles/HeroSection.css';

const HeroSection = ({ name, bio }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm {name || 'Your Name'}</h1>
        <p className="hero-bio">{bio || 'A passionate developer eager to build cool stuff.'}</p>
        <a href="projects" className="cta-button">View My Work</a>
         <a href="contact" className="cta-button">Contact me</a>
      </div>
    </section>
  );
};

export default HeroSection;
