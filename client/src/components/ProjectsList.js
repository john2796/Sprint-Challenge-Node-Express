import React from "react";
import ProjectCard from "./ProjectCard";
import { Link } from "react-router-dom";
const ProjectsList = ({ projects }) => {
  return (
    <div>
      <h1>Project action</h1>
      {projects.map(project => {
        return (
          <div key={project.id}>
            <Link to={`/action/${project.id}`}>
              <ProjectCard project={project} />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default ProjectsList;
