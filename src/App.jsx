// src/App.jsx
import React, { useState } from 'react';
import './App.css';
import DataEntry from './components/DataEntry.jsx';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    title: '',
    bio: '',
    profilePicture: ''
  });

  return (
    <div className="min-h-screen bg-[#F5F0EB] p-6">
      <h1 className="text-3xl font-bold text-[#5C4B3C] mb-8 text-center">Portfolio Generator</h1>
      <DataEntry formData={formData} setFormData={setFormData} />
    </div>
  );
}

export default App;
