import RevealSection from './RevealSection'
import SectionHeading from './SectionHeading'

function LanguagesSection({ languages }) {
  return (
    <RevealSection className="content-block" id="languages">
      <SectionHeading
        eyebrow="Languages"
        title="Tools I actually reach for."
        note="Mostly the stack I keep coming back to when work gets real."
        inline
      />

      <div className="language-cluster">
        {languages.map((language, index) => (
          <span
            key={language}
            className="language-pill"
            style={{ transitionDelay: `${index * 45}ms` }}
          >
            {language}
          </span>
        ))}
      </div>
    </RevealSection>
  )
}

export default LanguagesSection
