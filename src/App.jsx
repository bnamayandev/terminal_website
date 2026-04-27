import BackgroundScene from './features/background/BackgroundScene'
import BajaEcomPage from './features/bajaecom/BajaEcomPage'
import ContactSection from './features/portfolio/ContactSection'
import ExperienceSection from './features/portfolio/ExperienceSection'
import HeroSection from './features/portfolio/HeroSection'
import LanguagesSection from './features/portfolio/LanguagesSection'
import ProjectsSection from './features/portfolio/ProjectsSection'
import { experiences, projects, skillGroups, socialLinks } from './content/portfolio'

function App() {
  const normalizedPath = window.location.pathname.replace(/\/$/, '') || '/'
  const isBajaEcomPage = normalizedPath === '/bajaecom'

  return (
    <div className="page-shell">
      <BackgroundScene />

      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <main id={isBajaEcomPage ? 'bajaecom' : 'home'} className="page-content">
        <div className="portfolio-suite">
          {isBajaEcomPage ? (
            <BajaEcomPage />
          ) : (
            <>
              <HeroSection socialLinks={socialLinks} />
              <div className="section-divider" aria-hidden="true" />
              <LanguagesSection skillGroups={skillGroups} />
              <div className="section-divider" aria-hidden="true" />
              <ExperienceSection experiences={experiences} />
              <div className="section-divider" aria-hidden="true" />
              <ProjectsSection projects={projects} />
              <div className="section-divider" aria-hidden="true" />
              <ContactSection />
            </>
          )}
        </div>
      </main>
    </div>
  )
}

export default App
