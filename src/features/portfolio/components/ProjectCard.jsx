function ProjectCard({ project, index }) {
  return (
    <a
      className="project-card"
      href={project.href}
      target="_blank"
      rel="noreferrer"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="project-card-body">
        <h3>{project.name}</h3>
        <p className="project-label">{project.label}</p>
      </div>
      <div className="project-description-panel">
        <p>{project.description}</p>
      </div>
    </a>
  )
}

export default ProjectCard
