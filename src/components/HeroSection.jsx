import RevealSection from './RevealSection'

function HeroSection({ metrics, socialLinks }) {
  return (
    <RevealSection className="hero" immediate>
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

        <div className="hero-socials" aria-label="Social links">
          {socialLinks.map((link) => (
            <a key={link.label} className="social-chip" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <aside className="hero-panel">
        <div>
          <p className="eyebrow">Current focus</p>
          <p className="hero-panel-copy">
            Right now I&apos;m shipping production work at RBC, paying close attention to the tiny
            details that make large systems feel calmer, and getting sharper at building things
            that are both reliable and pleasant to use.
          </p>
        </div>

        <div className="hero-panel-footer">
          <p className="hero-panel-tagline">Calm systems. Sharp details. Slightly more fun than they need to be.</p>

          <div className="metrics-grid">
            {metrics.map((metric) => (
              <div key={metric.label} className="metric-card">
                <strong>{metric.value}</strong>
                <span>{metric.label}</span>
              </div>
            ))}
          </div>
        </div>
      </aside>
    </RevealSection>
  )
}

export default HeroSection
