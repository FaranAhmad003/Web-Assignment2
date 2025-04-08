// src/components/ProjectsSection.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { setPortfolioData } from '../redux/portfolioSlice';
import ProjectCard from './ProjectCard';
import '../styles/ProjectsSection.css';
import TopBar from './TopBar';

const ProjectsSection = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.portfolio.projects);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const reordered = Array.from(projects);
    const [moved] = reordered.splice(result.source.index, 1);
    reordered.splice(result.destination.index, 0, moved);

    dispatch(setPortfolioData({ projects: reordered }));
  };

  return (
    <div>
      <TopBar />
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
                {Array.isArray(projects) && projects.length > 0 ? (
                  projects.map((project, index) => (
                    <Draggable
                      key={project.id}
                      draggableId={String(project.id)}
                      index={index}
                    >
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
                            image={project.imageUrl}
                            githubLink={project.githubUrl}
                          />
                        </div>
                      )}
                    </Draggable>
                  ))
                ) : (
                  <p>No projects added yet.</p>
                )}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </section>
    </div>
  );
};

export default ProjectsSection;
