function SectionHeading({  title, note, inline = false }) {
  return (
    <div className={`section-heading${inline ? ' section-heading-inline' : ''}`}>
      <div>
        <h2>{title}</h2>
      </div>
      {note ? <span className="section-note">{note}</span> : null}
    </div>
  )
}

export default SectionHeading
