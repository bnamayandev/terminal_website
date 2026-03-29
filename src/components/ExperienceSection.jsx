import RevealSection from './RevealSection'
import SectionHeading from './SectionHeading'

function ExperienceSection({ experiences }) {
  return (
    <RevealSection className="content-block" id="experience">
      <SectionHeading eyebrow="Experience" title="Places where I learned the most by building." />

      <div className="experience-stack">
        {experiences.map((item, index) => (
          <article
            key={`${item.company}-${item.role}`}
            className="experience-card"
            style={{ transitionDelay: `${index * 90}ms` }}
          >
            <div className="experience-heading">
              <div>
                <p className="experience-company">{item.company}</p>
                <h3>{item.role}</h3>
              </div>
              <span>{item.period}</span>
            </div>

            <p className="experience-blurb">{item.blurb}</p>

            <ul>
              {item.details.map((detail) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </RevealSection>
  )
}

export default ExperienceSection
