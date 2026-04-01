import RevealSection from '../../shared/components/RevealSection'

function HeroSection({ socialLinks }) {
  const resumeHref = '/resume.pdf'

  return (
    <RevealSection className="hero" immediate>
      <div className="hero-copy">
        <h1><strong>Hi👋,  I'm Ben!</strong></h1>
        <p className="hero-text">
            Hi, I'm Benjamin, a software engineering student at Western University. I’m passionate about building innovative projects, especially in web development and AI. Always open to connecting, so feel free to reach out!
        </p>

        <div className="hero-actions">
          <a className="primary-link" href="#projects">
            View projects
          </a>
          <a className="secondary-link" href="#experience">
            See experience
          </a>
          {socialLinks.map((link) => (
            <a key={link.label} className="secondary-link" href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
          <a className="secondary-link" href={resumeHref} target="_blank" rel="noreferrer">
            See resume
          </a>
        </div>
      </div>

    </RevealSection>
  )
}

export default HeroSection
