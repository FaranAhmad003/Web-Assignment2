import React from 'react';
import '../styles/AboutMeSection.css';
import TopBar from './TopBar';
import { useSelector } from 'react-redux';

const AboutMeSection = () => {
  const { profilePicture, skills, interests, detailedDescription } = useSelector(
    (state) => state.portfolio
  );

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
              {detailedDescription ||
                'This is where you tell your story, share your journey, and connect with your audience.'}
            </p>

            {/* Skills */}
            <div className="about-subsection">
              <h3>Skills</h3>
              <div className="tag-container">
                {skills && skills.length > 0 ? (
                  skills.map((skill, index) => (
                    <span key={index} className="tag-chip">{skill}</span>
                  ))
                ) : (
                  <span className="tag-chip empty">No skills listed.</span>
                )}
              </div>
            </div>

            {/* Interests */}
            <div className="about-subsection">
              <h3>Interests</h3>
              <div className="tag-container">
                {interests && interests.length > 0 ? (
                  interests.map((interest, index) => (
                    <span key={index} className="tag-chip">{interest}</span>
                  ))
                ) : (
                  <span className="tag-chip empty">No interests listed.</span>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutMeSection;
