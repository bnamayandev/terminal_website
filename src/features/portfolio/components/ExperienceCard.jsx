function ExperienceCard({ experience, index }) {
  return (
    <article
      className="experience-card"
      style={{ transitionDelay: `${index * 90}ms` }}
    >
      <div className="experience-heading">
        <div>
          <p className="experience-company">{experience.company}</p>
          <h3>{experience.role}</h3>
        </div>
        <span>{experience.period}</span>
      </div>

      <p className="experience-blurb">{experience.blurb}</p>

      <ul>
        {experience.details.map((detail) => (
          <li key={detail}>{detail}</li>
        ))}
      </ul>
    </article>
  )
}

export default ExperienceCard
