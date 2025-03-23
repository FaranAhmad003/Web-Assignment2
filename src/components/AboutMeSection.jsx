import React from 'react';
import '../styles/AboutMeSection.css';
import TopBar from './TopBar';

const AboutMeSection = ({ profilePicture, skills, interests, detailedDescription }) => {
  return (
<>
<TopBar />
<section className="about-section" id="about">
      <h2 className="about-title">About Me</h2>
      <div className="about-content">
        <img
          src={profilePicture || 'https://via.placeholder.com/150'}
          alt="Profile"
          className="about-img"
        />
        <div className="about-details">
          <p className="about-description">
            {detailedDescription || 'This is where you tell your story, share your journey, and connect with your audience.'}
          </p>
          <div className="about-lists">
            <div>
              <h3>Skills</h3>
              <ul>
                {skills && skills.length > 0 ? skills.map((skill, index) => (
                  <li key={index}>{skill}</li>
                )) : <li>No skills listed.</li>}
              </ul>
            </div>
            <div>
              <h3>Interests</h3>
              <ul>
                {interests && interests.length > 0 ? interests.map((interest, index) => (
                  <li key={index}>{interest}</li>
                )) : <li>No interests listed.</li>}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
</>
  );
};

export default AboutMeSection;