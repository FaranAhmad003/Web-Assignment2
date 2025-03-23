import React from 'react';
import '../styles/Footer.css';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = ({ links }) => {
  return (
    <footer className="footer">
      <div className="footer-links">
        {links.github && (
          <a href={links.github} target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
        )}
        {links.linkedin && (
          <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
        )}
        {links.twitter && (
          <a href={links.twitter} target="_blank" rel="noopener noreferrer">
            <Twitter />
          </a>
        )}
      </div>
      <p className="footer-text">&copy; {new Date().getFullYear()} Built with ❤️ by You</p>
    </footer>
  );
};

export default Footer;
