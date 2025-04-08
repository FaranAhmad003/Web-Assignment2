// src/App.jsx
import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Footer from './components/Footer.jsx';

import DataEntry from './components/DataEntry.jsx';
import AboutMeSection from './components/AboutMe.jsx';
import ProjectsSection from './components/ProjectsSection.jsx';
import ContactSection from './components/Contactme.jsx';

function App() {
  return (
    <div className="app-wrapper">
      <div className="main-content">
        <Routes>
          <Route path="/" element={<DataEntry />} />
          <Route path="/about" element={<AboutMeSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/contact" element={<ContactSection />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
