import { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl'
import { useNavigate } from 'react-router-dom'
import * as THREE from 'three'

const destinations = [
  { name: 'USA', lat: 38.9072, lng: -77.0369 },
  { name: 'Canada', lat: 45.4215, lng: -75.6972 },
  { name: 'UK', lat: 51.5072, lng: -0.1276 },
  { name: 'Denmark', lat: 55.6761, lng: 12.5683 },
  { name: 'Australia', lat: -35.2809, lng: 149.13 },
]

const createMarker = () => {
  const marker = new THREE.Group()

  const stem = new THREE.Mesh(
    new THREE.CylinderGeometry(0.18, 0.18, 8, 12),
    new THREE.MeshBasicMaterial({
      color: '#f5f5f5',
      transparent: true,
      opacity: 0.9,
    })
  )

  const glow = new THREE.Mesh(
    new THREE.SphereGeometry(2.6, 18, 18),
    new THREE.MeshBasicMaterial({
      color: '#EEB649',
      transparent: true,
      opacity: 0.22,
    })
  )

  const core = new THREE.Mesh(
    new THREE.SphereGeometry(1.35, 18, 18),
    new THREE.MeshBasicMaterial({
      color: '#EEB649',
    })
  )

  stem.position.y = 4
  glow.position.y = 8.4
  core.position.y = 8.4

  marker.add(stem)
  marker.add(glow)
  marker.add(core)

  return marker
}

const HeroGlobe = () => {
  const containerRef = useRef(null)
  const globeRef = useRef(null)
  const [size, setSize] = useState({ width: 0, height: 0 })
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

  return (
    <div ref={containerRef} className="h-full w-full cursor-grab active:cursor-grabbing">
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
            objectsData={destinations}
            objectLat="lat"
            objectLng="lng"
            objectAltitude={0.01}
            objectThreeObject={createMarker}
            objectsTransitionDuration={0}
            labelsData={destinations}
            labelLat="lat"
            labelLng="lng"
            labelText="name"
            labelColor={() => '#F8FAFC'}
            labelAltitude={0.14}
            labelSize={1.15}
            labelIncludeDot={false}
            labelsTransitionDuration={0}
            onObjectClick={() => navigate('/contact')}
            onLabelClick={() => navigate('/contact')}
            showPointerCursor
            enablePointerInteraction
          />
        </div>
      ) : null}
    </div>
  )
}

export default HeroGlobe
