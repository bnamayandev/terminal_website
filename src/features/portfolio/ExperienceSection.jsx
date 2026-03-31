import RevealSection from '../../shared/components/RevealSection'
import SectionHeading from '../../shared/components/SectionHeading'

import ExperienceCard from './components/ExperienceCard'

function ExperienceSection({ experiences }) {
  return (
    <RevealSection className="content-block" id="experience">
      <SectionHeading title="Professional Experience" />

      <div className="experience-stack">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={`${experience.company}-${experience.role}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </RevealSection>
  )
}

export default ExperienceSection
