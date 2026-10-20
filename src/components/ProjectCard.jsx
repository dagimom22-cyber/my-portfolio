function ProjectCard({ project }) {
  return (
    <article className={`card project-card ${project.featured ? "project-card--featured" : ""}`}>
      <div className="project-card__thumb" aria-hidden="true">
        <span>{project.title.charAt(0)}</span>
      </div>

      <div className="project-card__body">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <ul className="project-card__tech">
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          {project.demo && project.demo !== "#" && (
            <a href={project.demo} className="link-btn" target="_blank" rel="noreferrer">
              Live Demo →
            </a>
          )}
          {project.github && project.github !== "#" && (
            <a href={project.github} className="link-btn link-btn--muted" target="_blank" rel="noreferrer">
              GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;
