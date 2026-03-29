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

const metrics = [
  { value: '3', label: 'internships shipped' },
  { value: '8', label: 'languages used often' },
  { value: '85%+', label: 'test coverage pushed' },
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
      <div className="background-scene" aria-hidden="true">
        <div className="scene-orb orb-left" />
        <div className="scene-orb orb-right" />
        <div className="scene-grid" />
        <div className="scene-shape shape-cube">
          <span />
          <span />
          <span />
        </div>
        <div className="scene-shape shape-ring" />
        <div className="scene-shape shape-column">
          <span />
          <span />
          <span />
        </div>
      </div>

      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

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

      <main id="home" className="page-content">
        <section className="hero reveal visible">
          <div className="hero-copy">
            <p className="eyebrow">Software engineering student</p>
            <h1>I build software that feels clear, fast, and a little more human.</h1>
            <p className="hero-text">
              I like working on the part where solid engineering meets good taste: shaping backend
              systems, tightening interfaces, and making complicated products feel easier to use.
            </p>

            <div className="hero-actions">
              <a className="primary-link" href="#projects">
                View projects
              </a>
              <a className="secondary-link" href="#experience">
                See experience
              </a>
            </div>
          </div>

          <aside className="hero-panel">
            <p className="eyebrow">Current focus</p>
            <p className="hero-panel-copy">
              Right now I&apos;m shipping production work at RBC, paying close attention to the
              tiny details that make large systems feel calmer, and getting sharper at building
              things that are both reliable and pleasant to use.
            </p>

            <div className="metrics-grid">
              {metrics.map((metric) => (
                <div key={metric.label} className="metric-card">
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </section>

        <section className="content-block reveal" id="languages">
          <div className="section-heading section-heading-inline">
            <div>
              <p>Languages</p>
              <h2>Tools I actually reach for.</h2>
            </div>
            <span className="section-note">Mostly the stack I keep coming back to when work gets real.</span>
          </div>

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
        </section>

        <section className="content-block reveal" id="experience">
          <div className="section-heading">
            <p>Experience</p>
            <h2>Places where I learned the most by building.</h2>
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
        </section>

        <section className="content-block reveal" id="projects">
          <div className="section-heading section-heading-inline">
            <div>
              <p>Projects</p>
              <h2>Things I&apos;ve made and cared about.</h2>
            </div>
            <span className="section-note">A mix of production work, AI experiments, and practical engineering.</span>
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
