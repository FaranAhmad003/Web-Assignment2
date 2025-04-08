import React from 'react';
import '../styles/ProjectCard.css';

const ProjectCard = ({ title, description, image, githubLink }) => {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3 className="project-title">{title}</h3>
        <p className="project-description">{description}</p>
        <a
          className="project-link"
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
        >
          View on GitHub →
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
