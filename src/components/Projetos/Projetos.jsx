import "./Projetos.css";

export default function ProjectCard({ project, index }) {
  return (
    <div
      className="project-card"
      style={{ animationDelay: `${index * 0.50}s` }}
    >
      <img src={project.image} alt={project.title} />

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <div className="project-techs">
            {project.tecnologias.map((tech, index) => (
                <span key={index} className="tech-badge">
                {tech}
                </span>
            ))}
        </div>


        <div className="project-links">
          {project.demo && <a href={project.demo}>Demo</a>}
          {project.code && <a href={project.code} >Código</a>}
        </div>
      </div>
    </div>
  );
}
