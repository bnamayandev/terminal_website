import { useEffect } from 'react'

const languages = ['Python', 'Java', 'TypeScript', 'C++', 'Go', 'Rust', 'SQL', 'JavaScript']

const experiences = [
  {
    role: 'Software Developer Intern',
    company: 'Royal Bank of Canada',
    period: 'Jan 2026 - Present',
    blurb:
      'I help RBC Express feel less like a giant bank machine and more like software people can move through quickly without getting lost.',
    details: [
      'Built frontend and backend features across Angular and Java services.',
      'Pushed production services above 85% test coverage with unit and integration tests.',
      'Improved reliability and cut friction for a large corporate banking user base.',
    ],
  },
  {
    role: 'Research Assistant',
    company: 'Western University',
    period: 'May 2025 - Sep 2025',
    blurb:
      'This job mostly involved teaching a robot to stay calm underground while the rest of us pretended that tunnel mapping is a normal Tuesday activity.',
    details: [
      'Worked on autonomous tunnel navigation and anomaly detection.',
      'Built SLAM and sensor-fusion workflows for cleaner underground mapping.',
      'Reduced mapping drift and improved perception performance in constrained environments.',
    ],
  },
  {
    role: 'Software Engineering Intern',
    company: 'Alere',
    period: 'May 2025 - Aug 2025',
    blurb:
      'I turned food scanning into a very opinionated assistant that could read labels, remember them, and stop people from accidentally buying regret.',
    details: [
      'Built barcode and OCR scanning workflows with cloud vision services.',
      'Created image history infrastructure with fast retrieval.',
      'Designed allergen-safe recommendation logic based on dietary constraints.',
    ],
  },
]

const projects = [
  {
    name: 'Thermal Detection Model',
    href: 'https://github.com/BenjaminNamayandev/AIC-GM-Comp2025',
    label: 'Hackathon winner',
    description:
      'A thermal detection system optimized for Raspberry Pi deployment with model compression and edge-focused performance tuning.',
  },
  {
    name: 'Recipeit',
    href: 'https://github.com/redmac135/recipe.it',
    label: 'Mobile + AI',
    description:
      'A smart pantry and recipe generator that turned expiring ingredients into usable meals instead of science experiments.',
  },
  {
    name: 'Western Baja Online Storefront',
    href: 'https://shopwesternbaja.com',
    label: 'Production product',
    description:
      'A full-stack storefront that modernized merch sales, automated inventory flows, and helped the team grow revenue.',
  },
]

function App() {
  useEffect(() => {
    const nodes = document.querySelectorAll('.reveal')

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.18,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    nodes.forEach((node) => observer.observe(node))

    return () => observer.disconnect()
  }, [])

  return (
    <div className="page-shell">
      <div className="background-orb orb-one" />
      <div className="background-orb orb-two" />
      <div className="background-orb orb-three" />

      <header className="topbar">
        <a className="brand" href="#home">
          BN
        </a>
        <nav>
          <a href="#languages">Languages</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </nav>
      </header>

      <main id="home">
        <section className="hero reveal visible">
          <div className="hero-copy">
            <p className="intro-line">Software engineering student, builder, and serial tinkerer</p>
            <h1>
              <span>Hi, I&apos;m </span>
              <strong>Ben</strong>
            </h1>
            <p className="hero-text">
              I build software that is practical, fast, and a little bit playful. My work lives across
              fintech, research, AI, and product engineering.
            </p>
          </div>

          <div className="hero-note">
            <p>
              Currently focused on shipping clean production work, learning aggressively, and making
              technical systems feel much more human.
            </p>
          </div>
        </section>

        <section className="content-block reveal" id="languages">
          <div className="section-heading">
            <p>Languages</p>
            <h2>The tools I reach for most</h2>
          </div>

          <div className="language-grid">
            {languages.map((language, index) => (
              <article
                key={language}
                className="language-card"
                style={{ transitionDelay: `${index * 70}ms` }}
              >
                <span>{language}</span>
              </article>
            ))}
          </div>
        </section>

        <section className="content-block reveal" id="experience">
          <div className="section-heading">
            <p>Past Experience</p>
            <h2>Places where I learned by building</h2>
          </div>

          <div className="experience-stack">
            {experiences.map((item, index) => (
              <article
                key={`${item.company}-${item.role}`}
                className="experience-card"
                style={{ transitionDelay: `${index * 90}ms` }}
              >
                <div className="experience-heading">
                  <div>
                    <h3>{item.role}</h3>
                    <p className="experience-company">{item.company}</p>
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
        </section>

        <section className="content-block reveal" id="projects">
          <div className="section-heading">
            <p>Projects</p>
            <h2>Things I&apos;ve built and shipped</h2>
          </div>

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
        </section>
      </main>
    </div>
  )
}

export default App
