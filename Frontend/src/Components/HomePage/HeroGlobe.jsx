import { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'

const destinations = [
  { id: 'usa', name: 'USA', lat: 38.9072, lng: -77.0369 },
  { id: 'canada', name: 'Canada', lat: 45.4215, lng: -75.6972 },
  { id: 'uk', name: 'UK', lat: 51.5072, lng: -0.1276 },
  { id: 'denmark', name: 'Denmark', lat: 55.6761, lng: 12.5683 },
  { id: 'australia', name: 'Australia', lat: -35.2809, lng: 149.13 },
]

const nepal = { id: 'nepal', name: 'Nepal', lat: 27.7172, lng: 85.324 }
const labeledLocations = [nepal, ...destinations]
const globePoints = [
  { ...nepal, color: '#EEB649', radius: 0.72 },
  ...destinations.map((destination) => ({
    ...destination,
    color: '#F8FAFC',
    radius: 0.48,
  })),
]
const connectionArcs = destinations.map((destination, index) => ({
  id: `${nepal.id}-${destination.id}`,
  startLat: nepal.lat,
  startLng: nepal.lng,
  endLat: destination.lat,
  endLng: destination.lng,
  color: ['#EEB649', '#F8FAFC'],
  altitude: 0.18 + index * 0.015,
}))

const LABEL_LERP = 0.12

const HeroGlobe = () => {
  const containerRef = useRef(null)
  const globeRef = useRef(null)
  const controlsRef = useRef(null)
  const labelsRef = useRef(new Map())
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!containerRef.current) {
      return undefined
    }

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect

      setSize({
        width: Math.round(width),
        height: Math.round(height),
      })
    })

    observer.observe(containerRef.current)

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const globe = globeRef.current

    if (!globe || !size.width || !size.height) {
      return
    }

    const controls = globe.controls()
    controlsRef.current = controls
    controls.autoRotate = true
    controls.autoRotateSpeed = 1
    controls.enableZoom = false
    controls.enablePan = false
    controls.enableDamping = true
    controls.dampingFactor = 0.08
    controls.minDistance = 270
    controls.maxDistance = 270
    controls.rotateSpeed = 0.6

    globe.pointOfView({ lat: 22, lng: 78, altitude: 2.05 })
  }, [size.height, size.width])

  useEffect(() => {
    let frameId

    const animate = () => {
      const globe = globeRef.current

      if (globe) {
        updateLabels(globe.camera())
      }

      frameId = window.requestAnimationFrame(animate)
    }

    frameId = window.requestAnimationFrame(animate)

    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const pauseRotation = () => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = false
    }
  }

  const resumeRotation = () => {
    if (controlsRef.current) {
      controlsRef.current.autoRotate = true
    }
  }

  const updateLabels = (camera) => {
    const globe = globeRef.current

    if (!globe || !camera) {
      return
    }

    const cameraDirection = camera.position.clone().normalize()

    labeledLocations.forEach(({ id, lat, lng }) => {
      const labelState = labelsRef.current.get(id)

      if (!labelState) {
        return
      }

      const coords = globe.getCoords(lat, lng, 0)
      const pointNormal = new THREE.Vector3(coords.x, coords.y, coords.z).normalize()
      const alignment = pointNormal.dot(cameraDirection)

      if (alignment < 0) {
        labelState.element.style.opacity = '0'
        labelState.element.style.pointerEvents = 'none'
        return
      }

      const targetLabelScale = THREE.MathUtils.clamp(0.58 + alignment * 0.62, 0.58, 1.2)
      const currentLabelScale = THREE.MathUtils.lerp(
        labelState.currentScale,
        targetLabelScale,
        LABEL_LERP
      )

      labelState.currentScale = currentLabelScale
      labelState.element.style.opacity = `${THREE.MathUtils.clamp(0.35 + alignment * 0.9, 0.35, 1)}`
      labelState.element.style.pointerEvents = alignment > 0.12 ? 'auto' : 'none'
      labelState.element.style.transform = `translate(-50%, -112%) scale(${currentLabelScale})`
    })
  }

  const getOrCreateCountryLabel = (destination) => {
    const cachedLabel = labelsRef.current.get(destination.id)

    if (cachedLabel) {
      return cachedLabel.element
    }

    const label = document.createElement('button')
    label.type = 'button'
    label.textContent = destination.name
    label.className =
      'pointer-events-auto rounded-full border border-white/25 bg-slate-950/60 px-4 py-2 text-[13px] font-semibold tracking-wide text-white shadow-[0_10px_30px_rgba(15,23,42,0.35)] backdrop-blur-sm transition-[box-shadow] duration-200 hover:shadow-[0_14px_32px_rgba(15,23,42,0.42)]'
    label.style.cursor = 'pointer'
    label.style.whiteSpace = 'nowrap'
    label.style.transform = 'translate(-50%, -112%) scale(1)'
    label.style.transformOrigin = 'center center'

    label.addEventListener('mouseenter', () => {
      setIsHoveringInteractive(true)
      pauseRotation()
    })

    label.addEventListener('mouseleave', () => {
      setIsHoveringInteractive(false)
      resumeRotation()
    })

    label.addEventListener('click', () => {
      navigate('/contact')
    })

    labelsRef.current.set(destination.id, {
      element: label,
      currentScale: 1,
    })

    return label
  }

  const globeCursorClass = isHoveringInteractive
    ? 'cursor-pointer'
    : isDragging
      ? 'cursor-grabbing'
      : 'cursor-grab'

  return (
    <div
      ref={containerRef}
      className={`h-full w-full ${globeCursorClass}`}
      onMouseDown={() => {
        if (!isHoveringInteractive) {
          setIsDragging(true)
        }
      }}
      onMouseUp={() => setIsDragging(false)}
      onMouseLeave={() => setIsDragging(false)}
    >
      {size.width > 0 && size.height > 0 ? (
        <div className="h-full w-full">
          <Globe
            ref={globeRef}
            width={size.width}
            height={size.height}
            backgroundColor="rgba(0,0,0,0)"
            waitForGlobeReady={false}
            animateIn={false}
            globeImageUrl="https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
            pointsData={globePoints}
            pointLat="lat"
            pointLng="lng"
            pointColor="color"
            pointAltitude={0.01}
            pointRadius="radius"
            pointsTransitionDuration={0}
            onPointClick={() => navigate('/contact')}
            arcsData={connectionArcs}
            arcColor="color"
            arcAltitude="altitude"
            arcStroke={0.55}
            arcDashLength={0.42}
            arcDashGap={0.9}
            arcDashInitialGap={(arc) => connectionArcs.findIndex((item) => item.id === arc.id) * 0.18}
            arcDashAnimateTime={2600}
            arcsTransitionDuration={0}
            htmlElementsData={labeledLocations}
            htmlLat="lat"
            htmlLng="lng"
            htmlAltitude={0.11}
            htmlElement={getOrCreateCountryLabel}
            htmlElementVisibilityModifier={(element, isVisible) => {
              if (!isVisible) {
                element.style.opacity = '0'
                element.style.pointerEvents = 'none'
              }
            }}
            showPointerCursor
            enablePointerInteraction
          />
        </div>
      ) : null}
    </div>
  )
}

export default HeroGlobe
