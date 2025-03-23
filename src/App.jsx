// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import DataEntry from './components/DataEntry.jsx';
import AboutMeSection from './components/AboutMeSection.jsx';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    bio: '',
    profilePicture: ''
  });

  return (
    <div className="min-h-screen bg-[#F5F0EB] p-6">
      <DataEntry formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default App;
