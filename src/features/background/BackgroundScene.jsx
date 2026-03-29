import { useEffect, useRef } from 'react'

import { SCENE_SHAPES } from './config/sceneShapes'

function BackgroundScene() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current

    if (!container || !canvas) {
      return undefined
    }

    let cancelled = false
    let cleanup = () => {}

    const init = async () => {
      const THREE = await import('three')

      if (cancelled) {
        return
      }

      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
      const scene = new THREE.Scene()
      const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100)
      camera.position.set(0, 0.4, 18)

      const renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
        alpha: true,
        powerPreference: 'high-performance',
      })
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.75))
      renderer.setClearAlpha(0)
      renderer.outputColorSpace = THREE.SRGBColorSpace

      const ambientLight = new THREE.AmbientLight('#fff8ef', 1.7)
      const hemiLight = new THREE.HemisphereLight('#fff8f1', '#f2c8ad', 1.15)
      const keyLight = new THREE.DirectionalLight('#ffffff', 1.55)
      const fillLight = new THREE.PointLight('#ffd7cb', 1.4, 45, 2)
      const rimLight = new THREE.PointLight('#c8ece4', 1.15, 45, 2)

      keyLight.position.set(7, 10, 14)
      fillLight.position.set(-10, 4, 8)
      rimLight.position.set(8, -6, 6)

      scene.add(ambientLight, hemiLight, keyLight, fillLight, rimLight)

      const shapes = SCENE_SHAPES.map((config) => {
        const material = new THREE.MeshPhysicalMaterial({
          color: config.color,
          roughness: 0.42,
          metalness: 0.02,
          clearcoat: 0.18,
          clearcoatRoughness: 0.45,
          sheen: 0.12,
        })

        const mesh = new THREE.Mesh(config.geometry(THREE), material)
        mesh.rotation.set(...config.rotation)
        scene.add(mesh)

        return {
          mesh,
          side: config.side,
          gutterAnchor: config.gutterAnchor,
          verticalAnchor: config.verticalAnchor,
          depth: config.depth,
          scale: config.scale,
          radius: config.radius,
          basePosition: [0, 0, config.depth],
          baseRotation: [...config.rotation],
          motion: config.motion,
          drift: config.drift,
          spin: config.spin,
        }
      })

      const clock = new THREE.Clock()
      let frameId = 0
      const contentElement = document.querySelector('.page-content')

      const applyLayout = (shape, width, height, contentRect) => {
        const distance = camera.position.z - shape.depth
        const worldHeight = 2 * Math.tan(THREE.MathUtils.degToRad(camera.fov / 2)) * distance
        const worldWidth = worldHeight * (width / height)
        const edgePaddingY = worldHeight * 0.14
        const usableHeight = Math.max(worldHeight - edgePaddingY * 2, worldHeight * 0.42)
        const responsiveScale = THREE.MathUtils.clamp(Math.min(width, height) / 1080, 0.62, 1)
        const contentLeft = contentRect?.left ?? 24
        const contentRight = contentRect?.right ?? width - 24
        const leftGutterPx = Math.max(contentLeft - 18, 72)
        const rightGutterPx = Math.max(width - contentRight - 18, 72)
        const activeGutterPx = shape.side === 'left' ? leftGutterPx : rightGutterPx
        const worldUnitsPerPixel = worldWidth / width
        const gutterWorldWidth = activeGutterPx * worldUnitsPerPixel
        const gutterInsetPx = Math.min(24, activeGutterPx * 0.18)
        const gutterStartPx = shape.side === 'left' ? gutterInsetPx : contentRight + gutterInsetPx
        const gutterWidthPx = Math.max(activeGutterPx - gutterInsetPx * 2, 24)
        const xPx = gutterStartPx + gutterWidthPx * shape.gutterAnchor
        const gutterScale = THREE.MathUtils.clamp(activeGutterPx / 260, 0.52, 1.04)
        const scalar = shape.scale * responsiveScale * gutterScale

        shape.layoutScalar = scalar
        shape.basePosition[0] = (xPx / width - 0.5) * worldWidth
        shape.basePosition[1] = (0.5 - shape.verticalAnchor) * usableHeight
        shape.basePosition[2] = shape.depth
        shape.viewport = {
          worldHeight,
          driftX: Math.min(worldWidth * shape.drift.x, Math.max(gutterWorldWidth * 0.11, 0.14)),
          driftY: worldHeight * shape.drift.y * 0.28,
        }

        shape.mesh.scale.setScalar(scalar)
      }

      const resolveOverlaps = (sideShapes, worldHeight) => {
        const ordered = [...sideShapes].sort((a, b) => a.basePosition[1] - b.basePosition[1])
        const bounds = {
          min: -worldHeight * 0.39,
          max: worldHeight * 0.39,
        }

        ordered.forEach((shape, index) => {
          if (index === 0) {
            shape.basePosition[1] = Math.max(shape.basePosition[1], bounds.min + shape.radius * shape.layoutScalar)
            return
          }

          const previous = ordered[index - 1]
          const minGap =
            previous.radius * previous.layoutScalar +
            shape.radius * shape.layoutScalar +
            previous.viewport.driftY +
            shape.viewport.driftY +
            0.45

          if (shape.basePosition[1] - previous.basePosition[1] < minGap) {
            shape.basePosition[1] = previous.basePosition[1] + minGap
          }
        })

        for (let index = ordered.length - 1; index >= 0; index -= 1) {
          const shape = ordered[index]
          const ceiling = bounds.max - shape.radius * shape.layoutScalar

          if (shape.basePosition[1] > ceiling) {
            const offset = shape.basePosition[1] - ceiling
            shape.basePosition[1] -= offset

            for (let previousIndex = index - 1; previousIndex >= 0; previousIndex -= 1) {
              ordered[previousIndex].basePosition[1] -= offset
            }
          }
        }
      }

      const resize = () => {
        const width = container.clientWidth
        const height = container.clientHeight
        const contentRect = contentElement?.getBoundingClientRect()

        camera.aspect = width / height
        camera.updateProjectionMatrix()
        renderer.setSize(width, height, false)

        shapes.forEach((shape) => applyLayout(shape, width, height, contentRect))

        const worldHeight = shapes[0]?.viewport.worldHeight ?? 0
        resolveOverlaps(shapes.filter((shape) => shape.side === 'left'), worldHeight)
        resolveOverlaps(shapes.filter((shape) => shape.side === 'right'), worldHeight)
      }

      const renderFrame = () => {
        const elapsed = clock.getElapsedTime()

        shapes.forEach((shape, index) => {
          const { mesh, basePosition, baseRotation, motion, drift, spin, viewport } = shape
          const offsets = { x: 0, y: 0, z: 0 }
          const amplitudes = { x: viewport.driftX, y: viewport.driftY, z: drift.z }

          motion.axisMap.forEach((axis, motionIndex) => {
            const waveTime = elapsed * drift.speed + drift.phase[motionIndex]
            const waveFn = motion.wave[motionIndex] === 'cos' ? Math.cos : Math.sin
            offsets[axis] += waveFn(waveTime) * amplitudes[axis] * motion.multiplier[motionIndex]
          })

          mesh.position.x = basePosition[0] + offsets.x
          mesh.position.y = basePosition[1] + offsets.y
          mesh.position.z = basePosition[2] + offsets.z

          mesh.rotation.x = baseRotation[0] + elapsed * spin[0]
          mesh.rotation.y = baseRotation[1] + elapsed * spin[1]
          mesh.rotation.z =
            baseRotation[2] + Math.sin(elapsed * (0.3 + index * 0.04)) * 0.08 + elapsed * spin[2]
        })

        fillLight.position.x = -10 + Math.sin(elapsed * 0.4) * 1.8
        rimLight.position.y = -6 + Math.cos(elapsed * 0.45) * 1.6

        renderer.render(scene, camera)

        if (!prefersReducedMotion) {
          frameId = window.requestAnimationFrame(renderFrame)
        }
      }

      resize()

      if (prefersReducedMotion) {
        renderer.render(scene, camera)
      } else {
        renderFrame()
      }

      window.addEventListener('resize', resize)

      cleanup = () => {
        window.removeEventListener('resize', resize)
        window.cancelAnimationFrame(frameId)

        shapes.forEach(({ mesh }) => {
          mesh.geometry.dispose()
          mesh.material.dispose()
          scene.remove(mesh)
        })

        renderer.dispose()
      }
    }

    init()

    return () => {
      cancelled = true
      cleanup()
    }
  }, [])

  return (
    <div ref={containerRef} className="background-scene" aria-hidden="true">
      <canvas ref={canvasRef} className="background-canvas" />
    </div>
  )
}

export default BackgroundScene
