import RevealSection from '../../shared/components/RevealSection'
import SectionHeading from '../../shared/components/SectionHeading'

function LanguagesSection({ languages }) {
  return (
    <RevealSection className="content-block" id="languages">
      <SectionHeading
        eyebrow="Languages"
        title="Tools I actually reach for."
        note="Mostly the languages I keep using when something needs to be built properly."
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
