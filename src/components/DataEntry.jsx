// src/components/DataEntryForm.jsx
import React, { useState } from 'react';
import { Plus, Trash2, Save } from 'lucide-react';
import '../styles/DataEntry.css';
import TopBar from './TopBar';
import HeroSection from './HeroSection';
import { useSelector, useDispatch } from 'react-redux';
import { setPortfolioData } from '../redux/portfolioSlice';

export default function DataEntryForm() {
  const dispatch = useDispatch();
  const savedData = useSelector((state) => state.portfolio);
  const [formData, setFormData] = useState(savedData);
  const [skillInput, setSkillInput] = useState('');
  const [interestInput, setInterestInput] = useState('');
  const [showPortfolio, setShowPortfolio] = useState(false);

  const updateFormData = (updated) => {
    setFormData(updated);
    dispatch(setPortfolioData(updated));
    console.log('Updated Redux:', updated);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    updateFormData({ ...formData, [name]: value });
  };

  const addSkill = (e) => {
    if (e.key === 'Enter' && skillInput.trim()) {
      e.preventDefault();
      const updated = {
        ...formData,
        skills: [...formData.skills, skillInput.trim()],
      };
      updateFormData(updated);
      setSkillInput('');
    }
  };

  const addInterest = (e) => {
    if (e.key === 'Enter' && interestInput.trim()) {
      e.preventDefault();
      const updated = {
        ...formData,
        interests: [...formData.interests, interestInput.trim()],
      };
      updateFormData(updated);
      setInterestInput('');
    }
  };

  const addSocialMedia = () => {
    const newSocialMedia = {
      id: crypto.randomUUID(),
      name: '',
      url: '',
    };
    updateFormData({
      ...formData,
      socialMedia: [...formData.socialMedia, newSocialMedia],
    });
  };

  const updateSocialMedia = (id, field, value) => {
    const updated = {
      ...formData,
      socialMedia: formData.socialMedia.map((social) =>
        social.id === id ? { ...social, [field]: value } : social
      ),
    };
    updateFormData(updated);
  };

  const removeSocialMedia = (id) => {
    const updated = {
      ...formData,
      socialMedia: formData.socialMedia.filter((social) => social.id !== id),
    };
    updateFormData(updated);
  };

  const addProject = () => {
    const newProject = {
      id: crypto.randomUUID(),
      title: '',
      description: '',
      imageUrl: '',
      githubUrl: '',
    };
    updateFormData({
      ...formData,
      projects: [...formData.projects, newProject],
    });
  };

  const updateProject = (id, field, value) => {
    const updated = {
      ...formData,
      projects: formData.projects.map((project) =>
        project.id === id ? { ...project, [field]: value } : project
      ),
    };
    updateFormData(updated);
  };

  const removeProject = (id) => {
    const updated = {
      ...formData,
      projects: formData.projects.filter((project) => project.id !== id),
    };
    updateFormData(updated);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowPortfolio(true);
  };

  return (
    <>
      <TopBar />
      {!showPortfolio ? (
        <form onSubmit={handleSubmit} className="data-entry-form">
          <div className="form-section">
            <h1 className="form-title">Portfolio Data Entry</h1>

            {/* Basic Information */}
            <div className="form-group">
              <h2 className="form-subtitle">Basic Information</h2>
              <div className="form-field">
                <label>Name</label>
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <label>Profile Picture URL</label>
                <input
                  name="profilePicture"
                  type="url"
                  value={formData.profilePicture}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-field">
                <label>Short Bio</label>
                <textarea
                  name="bio"
                  rows={3}
                  value={formData.bio}
                  onChange={handleInputChange}
                  required
                />
              </div>
            </div>

            {/* Skills */}
            <div className="form-group">
              <h2 className="form-subtitle">Skills</h2>
              <input
                type="text"
                value={skillInput}
                onChange={(e) => setSkillInput(e.target.value)}
                onKeyDown={addSkill}
                placeholder="Type a skill and press Enter"
              />
              <div className="tag-container">
                {formData.skills.map((skill, index) => (
                  <span key={index} className="tag">
                    {skill}
                    <button
                      type="button"
                      onClick={() => {
                        const updated = {
                          ...formData,
                          skills: formData.skills.filter((_, i) => i !== index),
                        };
                        updateFormData(updated);
                      }}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* Interests */}
            <div className="form-group">
              <h2 className="form-subtitle">Interests</h2>
              <input
                type="text"
                value={interestInput}
                onChange={(e) => setInterestInput(e.target.value)}
                onKeyDown={addInterest}
                placeholder="Type an interest and press Enter"
              />
              <div className="tag-container">
                {formData.interests.map((interest, index) => (
                  <span key={index} className="tag">
                    {interest}
                    <button
                      type="button"
                      onClick={() => {
                        const updated = {
                          ...formData,
                          interests: formData.interests.filter((_, i) => i !== index),
                        };
                        updateFormData(updated);
                      }}
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>

            {/* About Me */}
            <div className="form-group">
              <h2 className="form-subtitle">About Me</h2>
              <textarea
                name="detailedDescription"
                rows={6}
                value={formData.detailedDescription}
                onChange={handleInputChange}
                required
              />
            </div>

            {/* Projects */}
            <div className="form-group">
              <div className="form-header">
                <h2 className="form-subtitle">Projects</h2>
                <button type="button" onClick={addProject} className="add-btn">
                  <Plus size={16} /> Add Project
                </button>
              </div>
              {formData.projects.map((project) => (
                <div key={project.id} className="card">
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) =>
                      updateProject(project.id, 'title', e.target.value)
                    }
                    placeholder="Project Title"
                    required
                  />
                  <textarea
                    value={project.description}
                    onChange={(e) =>
                      updateProject(project.id, 'description', e.target.value)
                    }
                    placeholder="Project Description"
                    rows={3}
                    required
                  />
                  <input
                    type="url"
                    value={project.imageUrl}
                    onChange={(e) =>
                      updateProject(project.id, 'imageUrl', e.target.value)
                    }
                    placeholder="Project Image URL"
                    required
                  />
                  <input
                    type="url"
                    value={project.githubUrl}
                    onChange={(e) =>
                      updateProject(project.id, 'githubUrl', e.target.value)
                    }
                    placeholder="GitHub URL"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => removeProject(project.id)}
                    className="remove-btn"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="form-group">
              <div className="form-header">
                <h2 className="form-subtitle">Social Media</h2>
                <button type="button" onClick={addSocialMedia} className="add-btn">
                  <Plus size={16} /> Add Social Media
                </button>
              </div>
              {formData.socialMedia.map((social) => (
                <div key={social.id} className="flex-row">
                  <input
                    type="text"
                    value={social.name}
                    onChange={(e) =>
                      updateSocialMedia(social.id, 'name', e.target.value)
                    }
                    placeholder="Platform Name"
                    required
                  />
                  <input
                    type="url"
                    value={social.url}
                    onChange={(e) =>
                      updateSocialMedia(social.id, 'url', e.target.value)
                    }
                    placeholder="Profile URL"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => removeSocialMedia(social.id)}
                    className="remove-btn"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>

            <div className="form-group">
              <button type="submit" className="submit-btn">
                <Save size={20} /> Generate Portfolio
              </button>
            </div>
          </div>
        </form>
      ) : (
        <HeroSection name={formData.name} bio={formData.bio} />
      )}
    </>
  );
}
