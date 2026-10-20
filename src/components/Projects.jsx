import projects from "../data/projects";
import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section__inner">
        <p className="eyebrow">Projects</p>
        <h2 className="section__title">Things I've built</h2>
        <p className="projects__intro">
          A mix of frontend practice, full-stack systems, and API-driven
          apps — each one taught me something I didn't know before I
          started it.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
