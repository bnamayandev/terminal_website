import RevealSection from '../../shared/components/RevealSection'

import HeroMetrics from './components/HeroMetrics'

function HeroSection({ metrics, socialLinks }) {
  return (
    <RevealSection className="hero" immediate>
      <div className="hero-copy">
        <p className="eyebrow">Software engineering student</p>
        <h1>I build software that feels clear, fast, and easy to trust.</h1>
        <p className="hero-text">
          I like working on the part where strong engineering meets careful product thinking:
          building backend systems, cleaning up rough interfaces, and making complicated tools feel
          simpler than they are.
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
            Right now I&apos;m working on production systems at RBC and paying close attention to
            the small details that make large products easier to use, easier to maintain, and less
            frustrating for the people relying on them every day.
          </p>
        </div>

        <div className="hero-panel-footer">
          <p className="hero-panel-tagline">Good systems, careful details, and a low tolerance for unnecessary friction.</p>
          <HeroMetrics metrics={metrics} />
        </div>
      </aside>
    </RevealSection>
  )
}

export default HeroSection
