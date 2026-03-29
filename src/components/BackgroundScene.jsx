function BackgroundScene() {
  return (
    <div className="background-scene" aria-hidden="true">
      <div className="scene-orb orb-left" />
      <div className="scene-orb orb-right" />
      <div className="scene-grid" />
      <div className="scene-shape shape-cube">
        <span />
        <span />
        <span />
      </div>
      <div className="scene-shape shape-ring" />
      <div className="scene-shape shape-column">
        <span />
        <span />
        <span />
      </div>
    </div>
  )
}

export default BackgroundScene
