import RevealSection from '../../shared/components/RevealSection'
import SectionHeading from '../../shared/components/SectionHeading'

import ProjectCard from './components/ProjectCard'

function ProjectsSection({ projects }) {
  return (
    <RevealSection className="content-block" id="projects">
      <SectionHeading
        eyebrow="Projects"
        title="Things I&apos;ve made and cared about."
        note="A mix of shipped work, side projects, and experiments that were worth finishing."
        inline
      />

      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={project.name} project={project} index={index} />
        ))}
      </div>
    </RevealSection>
  )
}

export default ProjectsSection
