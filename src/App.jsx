import BackgroundScene from './features/background/BackgroundScene'
import ExperienceSection from './features/portfolio/ExperienceSection'
import HeroSection from './features/portfolio/HeroSection'
import LanguagesSection from './features/portfolio/LanguagesSection'
import ProjectsSection from './features/portfolio/ProjectsSection'
import { experiences, languages, metrics, projects, socialLinks } from './content/portfolio'

function App() {
  return (
    <div className="page-shell">
      <BackgroundScene />

      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <main id="home" className="page-content">
        <HeroSection metrics={metrics} socialLinks={socialLinks} />
        <LanguagesSection languages={languages} />
        <ExperienceSection experiences={experiences} />
        <ProjectsSection projects={projects} />
      </main>
    </div>
  )
}

export default App
