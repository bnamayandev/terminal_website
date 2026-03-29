function HeroMetrics({ metrics }) {
  return (
    <div className="metrics-grid">
      {metrics.map((metric) => (
        <div key={metric.label} className="metric-card">
          <strong>{metric.value}</strong>
          <span>{metric.label}</span>
        </div>
      ))}
    </div>
  )
}

export default HeroMetrics
