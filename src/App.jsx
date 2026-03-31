import BackgroundScene from './features/background/BackgroundScene'
import ContactSection from './features/portfolio/ContactSection'
import ExperienceSection from './features/portfolio/ExperienceSection'
import HeroSection from './features/portfolio/HeroSection'
import LanguagesSection from './features/portfolio/LanguagesSection'
import ProjectsSection from './features/portfolio/ProjectsSection'
import { experiences, projects, skillGroups, socialLinks } from './content/portfolio'

function App() {
  return (
    <div className="page-shell">
      <BackgroundScene />

      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <main id="home" className="page-content">
        <HeroSection socialLinks={socialLinks} />
        <LanguagesSection skillGroups={skillGroups} />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
        <ContactSection />
      </main>
    </div>
  )
}

export default App
