import RevealSection from './RevealSection'
import SectionHeading from './SectionHeading'

function ProjectsSection({ projects }) {
  return (
    <RevealSection className="content-block" id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Things I&apos;ve made and cared about."
        note="A mix of production work, AI experiments, and practical engineering."
        inline
      />

      <div className="project-grid">
        {projects.map((project, index) => (
          <a
            key={project.name}
            className="project-card"
            href={project.href}
            target="_blank"
            rel="noreferrer"
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            <p className="project-label">{project.label}</p>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <span className="project-link">Open project</span>
          </a>
        ))}
      </div>
    </RevealSection>
  )
}

export default ProjectsSection
