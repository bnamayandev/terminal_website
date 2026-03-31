import {
  SiAngular,
  SiC,
  SiCplusplus,
  SiDocker,
  SiExpress,
  SiFastapi,
  SiFirebase,
  SiGit,
  SiGo,
  SiLinux,
  SiMongodb,
  SiNodedotjs,
  SiPython,
  SiPytorch,
  SiReact,
  SiRust,
  SiSharp,
  SiSpringboot,
  SiTypescript,
} from 'react-icons/si'
import { FaAws, FaJava } from 'react-icons/fa6'
import { TbSql } from 'react-icons/tb'
import RevealSection from '../../shared/components/RevealSection'
import SectionHeading from '../../shared/components/SectionHeading'

const iconMap = {
  python: [{ Icon: SiPython, color: '#3776AB' }],
  java: [{ Icon: FaJava, color: '#F89820' }],
  typescript: [{ Icon: SiTypescript, color: '#3178C6' }],
  c: [{ Icon: SiC, color: '#A8B9CC' }],
  cpp: [{ Icon: SiCplusplus, color: '#00599C' }],
  go: [{ Icon: SiGo, color: '#00ADD8' }],
  rust: [{ Icon: SiRust, color: '#000000' }],
  csharp: [{ Icon: SiSharp, color: '#512BD4' }],
  sql: [{ Icon: TbSql, color: '#2563EB' }],
  springBoot: [{ Icon: SiSpringboot, color: '#6DB33F' }],
  angular: [{ Icon: SiAngular, color: '#DD0031' }],
  react: [{ Icon: SiReact, color: '#61DAFB' }],
  nodejs: [{ Icon: SiNodedotjs, color: '#5FA04E' }],
  expressjs: [{ Icon: SiExpress, color: '#111827' }],
  fastapi: [{ Icon: SiFastapi, color: '#009688' }],
  pytorch: [{ Icon: SiPytorch, color: '#EE4C2C' }],
  git: [{ Icon: SiGit, color: '#F05032' }],
  linux: [{ Icon: SiLinux, color: '#111827' }],
  docker: [{ Icon: SiDocker, color: '#2496ED' }],
  firebase: [{ Icon: SiFirebase, color: '#FFCA28' }],
  aws: [{ Icon: FaAws, color: '#232F3E' }],
  mongodb: [{ Icon: SiMongodb, color: '#47A248' }],
}

function TechIcons({ iconKey, label }) {
  const icons = iconMap[iconKey] ?? []

  return (
    <div className={`tech-card-icon${icons.length > 1 ? ' tech-card-icon-pair' : ''}`} aria-label={label}>
      {icons.map(({ Icon, color }, index) => (
        <Icon key={`${iconKey}-${index}`} className="tech-logo" style={{ color }} aria-hidden="true" />
      ))}
    </div>
  )
}

function LanguagesSection({ skillGroups }) {
  return (
    <RevealSection className="content-block" id="languages">
      <SectionHeading eyebrow="Languages" title="Languages" />

      <div className="tech-groups">
        {skillGroups.map((group, groupIndex) => (
          <section key={group.title} className="tech-group">
            <h3>{group.title}</h3>
            <div className="tech-grid">
              {group.items.map((item, itemIndex) => (
                <article
                  key={item.label}
                  className="tech-card"
                  style={{ transitionDelay: `${groupIndex * 90 + itemIndex * 35}ms` }}
                  aria-label={item.label}
                  tabIndex={0}
                >
                  <TechIcons iconKey={item.icon} label={item.label} />
                  <span className="tech-card-label">{item.label}</span>
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </RevealSection>
  )
}

export default LanguagesSection
