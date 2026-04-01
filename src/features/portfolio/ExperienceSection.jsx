import { useState } from 'react'

import RevealSection from '../../shared/components/RevealSection'
import SectionHeading from '../../shared/components/SectionHeading'

const monthLabelFormatter = new Intl.DateTimeFormat('en-US', {
  month: 'short',
  year: 'numeric',
})

function parseMonth(monthValue) {
  const [year, month] = monthValue.split('-').map(Number)

  return new Date(year, month - 1, 1)
}

function normalizeEndMonth(end) {
  if (end === 'present') {
    const now = new Date()
    return new Date(now.getFullYear(), now.getMonth(), 1)
  }

  return parseMonth(end)
}

function formatPeriod(start, end) {
  const startLabel = monthLabelFormatter.format(parseMonth(start))

  if (end === 'present') {
    return `${startLabel} - Present`
  }

  return `${startLabel} - ${monthLabelFormatter.format(parseMonth(end))}`
}

function getTimelineBounds(experiences) {
  const starts = experiences.map((experience) => parseMonth(experience.start).getTime())
  const ends = experiences.map((experience) => normalizeEndMonth(experience.end).getTime())

  return {
    start: new Date(Math.min(...starts)),
    end: new Date(Math.max(...ends)),
  }
}

function getMonthSpan(start, end) {
  return (
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth())
  )
}

function getYearMarkers(start, end) {
  const markers = []
  const cursor = new Date(start.getFullYear(), 0, 1)

  while (cursor <= end) {
    markers.push(new Date(cursor))
    cursor.setFullYear(cursor.getFullYear() + 1)
  }

  if (!markers.some((marker) => marker.getFullYear() === end.getFullYear())) {
    markers.push(new Date(end.getFullYear(), 0, 1))
  }

  return markers
}

function ExperienceSection({ experiences }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeExperience = experiences[activeIndex]
  const bounds = getTimelineBounds(experiences)
  const totalMonths = Math.max(getMonthSpan(bounds.start, bounds.end), 1)
  const yearMarkers = getYearMarkers(bounds.start, bounds.end)

  return (
    <RevealSection className="content-block" id="experience">
      <SectionHeading
        title="Professional Experience"
        inline
      />

      <div className="experience-timeline-board">
        <div className="experience-tabs-layout">
          <div className="experience-tab-list" role="tablist" aria-label="Experience roles">
            {experiences.map((experience, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  key={`${experience.company}-${experience.role}-tab`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  className={`experience-tab${isActive ? ' is-active' : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                >
                  <span className="experience-tab-company">{experience.company}</span>
                  <strong>{experience.role}</strong>
                </button>
              )
            })}
          </div>

          <article className="experience-card experience-detail-card" role="tabpanel">
            <div className="experience-heading">
              <div>
                <p className="experience-company">{activeExperience.company}</p>
                <h3>{activeExperience.role}</h3>
              </div>
              <span>{formatPeriod(activeExperience.start, activeExperience.end)}</span>
            </div>

            <p className="experience-meta">
              {activeExperience.type ? `${activeExperience.type} · ` : ''}
              {activeExperience.location}
            </p>
            <p className="experience-blurb">{activeExperience.summary}</p>
          </article>
        </div>
      </div>
    </RevealSection>
  )
}

export default ExperienceSection
