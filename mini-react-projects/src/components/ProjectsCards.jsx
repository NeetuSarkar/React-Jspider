import React from "react";
import Card from "./Card";

const ProjectsCards = ({ projects, setSelectedProject }) => {
  return (
    <div className="project-cards">
      {projects.map((project) => (
        <Card
          key={project.id}
          title={project.title}
          img={project.projectImage}
          onClick={() => setSelectedProject(project.component)}
        />
      ))}
    </div>
  );
};

export default ProjectsCards;
