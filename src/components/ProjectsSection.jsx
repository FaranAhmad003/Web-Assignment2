import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import ProjectCard from './ProjectCard';
import '../styles/ProjectsSection.css';

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch('/projects.json') //jsxon api create at the backend or phr wahan ase data pkrna prega
      .then((res) => res.json())
      .then((data) => setProjects(data))
      .catch((err) => console.error('Failed to fetch projects:', err));
  }, []);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reordered = Array.from(projects);
    const [movedItem] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, movedItem);
    setProjects(reordered);
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-title">My Projects</h2>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="projects-list" direction="horizontal">
          {(provided) => (
            <div
              className="projects-container"
              ref={provided.innerRef}
              {...provided.droppableProps}
            >
              {projects.map((project, index) => (
                <Draggable key={project.id} draggableId={project.id} index={index}>
                  {(provided) => (
                    <div
                      className="project-draggable"
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <ProjectCard
                        title={project.title}
                        description={project.description}
                        image={project.image}
                        githubLink={project.githubLink}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    </section>
  );
};

export default ProjectsSection;