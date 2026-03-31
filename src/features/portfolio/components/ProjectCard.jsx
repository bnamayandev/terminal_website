function ProjectCard({ project, index }) {
  return (
    <a
      className="project-card"
      href={project.href}
      target="_blank"
      rel="noreferrer"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <p className="project-label">{project.label}</p>
      <h3>{project.name}</h3>
      <p>{project.description}</p>
      <span className="project-link">View project</span>
    </a>
  )
}

export default ProjectCard
