function SectionHeading({ eyebrow, title, note, inline = false }) {
  return (
    <div className={`section-heading${inline ? ' section-heading-inline' : ''}`}>
      <div>
        <p>{eyebrow}</p>
        <h2>{title}</h2>
      </div>
      {note ? <span className="section-note">{note}</span> : null}
    </div>
  )
}

export default SectionHeading
