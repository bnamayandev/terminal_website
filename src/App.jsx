import BackgroundScene from './components/BackgroundScene'
import ExperienceSection from './components/ExperienceSection'
import HeroSection from './components/HeroSection'
import LanguagesSection from './components/LanguagesSection'
import ProjectsSection from './components/ProjectsSection'
import SiteHeader from './components/SiteHeader'
import { experiences, languages, metrics, projects, socialLinks } from './data/portfolio'

function App() {
  return (
    <div className="page-shell">
      <BackgroundScene />

      <div className="background-glow glow-one" />
      <div className="background-glow glow-two" />

      <SiteHeader socialLinks={socialLinks} />

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
