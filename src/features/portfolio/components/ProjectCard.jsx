function ProjectCard({ project, index }) {
  const isExternalLink = /^https?:\/\//.test(project.href)

  return (
    <a
      className="project-card"
      href={project.href}
      target={isExternalLink ? '_blank' : undefined}
      rel={isExternalLink ? 'noreferrer' : undefined}
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
