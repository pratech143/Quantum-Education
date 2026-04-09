import { useEffect, useRef, useState } from 'react'
import Globe from 'react-globe.gl'

const HeroGlobe = () => {
  const containerRef = useRef(null)
  const globeRef = useRef(null)
  const [size, setSize] = useState({ width: 0, height: 0 })

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
    controls.minDistance = 300
    controls.maxDistance = 300
    controls.rotateSpeed = 0.6

    globe.pointOfView({ lat: 18, lng: 72, altitude: 2.25 })
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
            globeImageUrl="https://unpkg.com/three-globe/example/img/earth-night.jpg"
            arcsData={[]}
            enablePointerInteraction
          />
        </div>
      ) : null}
    </div>
  )
}

export default HeroGlobe
