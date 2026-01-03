import { projects } from "./Data/Projects.js";
import ProjectCard from "./Projetos.jsx";

export default function Projects() {
  return (
    <section id="projetos" className="projects container">
      <h2>Projetos:</h2>
      <br/>
      <div className="projects-grid">
        {projects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              index={index}
            />
          ))}

      </div>
    </section>
  );
}
