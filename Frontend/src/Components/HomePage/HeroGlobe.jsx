import { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl'
import { useNavigate } from 'react-router-dom'
import { Vector3, MathUtils } from 'three'
import { api } from '../../api'
import globeSkin from '../../assets/homepage/globe-skin.jpg'

// Well-known coordinates for countries (capital cities)
const COUNTRY_COORDS = {
  usa: { lat: 38.9072, lng: -77.0369 },
  'united states': { lat: 38.9072, lng: -77.0369 },
  canada: { lat: 45.4215, lng: -75.6972 },
  uk: { lat: 51.5072, lng: -0.1276 },
  'united kingdom': { lat: 51.5072, lng: -0.1276 },
  denmark: { lat: 55.6761, lng: 12.5683 },
  australia: { lat: -35.2809, lng: 149.13 },
  germany: { lat: 52.52, lng: 13.405 },
  france: { lat: 48.8566, lng: 2.3522 },
  japan: { lat: 35.6762, lng: 139.6503 },
  'south korea': { lat: 37.5665, lng: 126.978 },
  korea: { lat: 37.5665, lng: 126.978 },
  'new zealand': { lat: -41.2865, lng: 174.7762 },
  ireland: { lat: 53.3498, lng: -6.2603 },
  netherlands: { lat: 52.3676, lng: 4.9041 },
  sweden: { lat: 59.3293, lng: 18.0686 },
  switzerland: { lat: 46.9481, lng: 7.4474 },
  singapore: { lat: 1.3521, lng: 103.8198 },
  china: { lat: 39.9042, lng: 116.4074 },
  india: { lat: 28.6139, lng: 77.209 },
  malaysia: { lat: 3.139, lng: 101.6869 },
  italy: { lat: 41.9028, lng: 12.4964 },
  spain: { lat: 40.4168, lng: -3.7038 },
  norway: { lat: 59.9139, lng: 10.7522 },
  finland: { lat: 60.1699, lng: 24.9384 },
  portugal: { lat: 38.7223, lng: -9.1393 },
  austria: { lat: 48.2082, lng: 16.3738 },
  belgium: { lat: 50.8503, lng: 4.3517 },
  poland: { lat: 52.2297, lng: 21.0122 },
  'czech republic': { lat: 50.0755, lng: 14.4378 },
  hungary: { lat: 47.4979, lng: 19.0402 },
  dubai: { lat: 25.2048, lng: 55.2708 },
  uae: { lat: 25.2048, lng: 55.2708 },
  qatar: { lat: 25.2854, lng: 51.531 },
  cyprus: { lat: 35.1856, lng: 33.3823 },
}

const nepal = { id: 'nepal', name: 'Nepal', lat: 27.7172, lng: 85.324 }
const LABEL_LERP = 0.12

const HeroGlobe = ({ onReady }) => {
  const containerRef = useRef(null)
  const globeRef = useRef(null)
  const controlsRef = useRef(null)
  const labelsRef = useRef(new Map())
  const [size, setSize] = useState({ width: 0, height: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)
  const [destinations, setDestinations] = useState([])
  const navigate = useNavigate()

  // Fetch destinations from API
  useEffect(() => {
    api.getDestinations({ limit: '50' })
      .then((res) => {
        const countries = res.data || []
        const mapped = countries
          .map((c) => {
            const slug = (c.slug || c.name || '').toLowerCase()
            const coords = COUNTRY_COORDS[slug] || COUNTRY_COORDS[c.name?.toLowerCase()]
            if (!coords) return null
            return { id: slug, name: c.name, slug: c.slug, lat: coords.lat, lng: coords.lng }
          })
          .filter(Boolean)
        setDestinations(mapped)
      })
      .catch(() => {
        // Fallback to empty - globe still shows Nepal
        setDestinations([])
      })
  }, [])

  const labeledLocations = [nepal, ...destinations]
  const globePoints = [
    { ...nepal, color: '#EEB649', radius: 0.72 },
    ...destinations.map((d) => ({ ...d, color: '#F8FAFC', radius: 0.48 })),
  ]
  const connectionArcs = destinations.map((d, index) => ({
    id: `${nepal.id}-${d.id}`,
    startLat: nepal.lat,
    startLng: nepal.lng,
    endLat: d.lat,
    endLng: d.lng,
    color: ['#EEB649', '#F8FAFC'],
    altitude: 0.18 + index * 0.015,
  }))

  useEffect(() => {
    if (!containerRef.current) return undefined
    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect
      setSize({ width: Math.round(width), height: Math.round(height) })
    })
    observer.observe(containerRef.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const globe = globeRef.current
    if (!globe || !size.width || !size.height) return
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
      if (globe) updateLabels(globe.camera())
      frameId = window.requestAnimationFrame(animate)
    }
    frameId = window.requestAnimationFrame(animate)
    return () => window.cancelAnimationFrame(frameId)
  }, [])

  const pauseRotation = () => { if (controlsRef.current) controlsRef.current.autoRotate = false }
  const resumeRotation = () => { if (controlsRef.current) controlsRef.current.autoRotate = true }

  const updateLabels = (camera) => {
    const globe = globeRef.current
    if (!globe || !camera) return
    const cameraDirection = camera.position.clone().normalize()
    labeledLocations.forEach(({ id, lat, lng }) => {
      const labelState = labelsRef.current.get(id)
      if (!labelState) return
      const coords = globe.getCoords(lat, lng, 0)
      const pointNormal = new Vector3(coords.x, coords.y, coords.z).normalize()
      const alignment = pointNormal.dot(cameraDirection)
      if (alignment < 0) {
        labelState.element.style.opacity = '0'
        labelState.element.style.pointerEvents = 'none'
        return
      }
      const targetLabelScale = MathUtils.clamp(0.58 + alignment * 0.62, 0.58, 1.2)
      const currentLabelScale = MathUtils.lerp(labelState.currentScale, targetLabelScale, LABEL_LERP)
      labelState.currentScale = currentLabelScale
      labelState.element.style.opacity = `${MathUtils.clamp(0.35 + alignment * 0.9, 0.35, 1)}`
      labelState.element.style.pointerEvents = alignment > 0.12 ? 'auto' : 'none'
      labelState.element.style.transform = `translate(-50%, -112%) scale(${currentLabelScale})`
    })
  }

  const getOrCreateCountryLabel = (destination) => {
    const cachedLabel = labelsRef.current.get(destination.id)
    if (cachedLabel) return cachedLabel.element

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
      // Navigate to the destination page if it has a slug, otherwise go to contact
      if (destination.slug) {
        navigate(`/countries/${destination.slug}`)
      } else if (destination.id !== 'nepal') {
        navigate(`/countries/${destination.id}`)
      } else {
        navigate('/contact')
      }
    })

    labelsRef.current.set(destination.id, { element: label, currentScale: 1 })
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
      onMouseDown={() => { if (!isHoveringInteractive) setIsDragging(true) }}
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
            waitForGlobeReady={true}
            onGlobeReady={() => { if (onReady) onReady() }}
            animateIn={false}
            globeImageUrl={globeSkin}
            pointsData={globePoints}
            pointLat="lat"
            pointLng="lng"
            pointColor="color"
            pointAltitude={0.01}
            pointRadius="radius"
            pointsTransitionDuration={0}
            onPointClick={(point) => {
              if (point.slug) navigate(`/countries/${point.slug}`)
              else if (point.id && point.id !== 'nepal') navigate(`/countries/${point.id}`)
              else navigate('/contact')
            }}
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
