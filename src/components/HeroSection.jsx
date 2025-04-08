import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/HeroSection.css';

const HeroSection = ({ name, bio }) => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm {name || 'Your Name'}</h1>
        <p className="hero-bio">{bio || 'A passionate developer eager to build cool stuff.'}</p>
        <div className="button-group">
          <Link to="/projects" className="cta-button">View My Work</Link>
          <Link to="/contact" className="cta-button">Contact Me</Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
