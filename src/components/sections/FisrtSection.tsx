import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FirstSection = () => {
  const leftRef = useRef(null)
  const rightRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(leftRef.current, { x: '-100%', opacity: 0 }, {
      x: '0%',
      opacity: 1,
      duration: 1.2,
      scrollTrigger: {
        trigger: leftRef.current,
        start: 'top center',
      },
    })

    gsap.fromTo(rightRef.current, { x: '100%', opacity: 0 }, {
      x: '0%',
      opacity: 1,
      duration: 1.2,
      scrollTrigger: {
        trigger: rightRef.current,
        start: 'top center',
      },
    })
  }, [])

  return (
    <section className="h-screen flex flex-col items-center justify-center relative">
      <header className="absolute top-0 left-0 w-full p-6 z-50 flex justify-between">
        <h1 className="text-xl font-bold">ADCAPSULE</h1>
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </header>

      <div className="text-[5rem] font-bold flex flex-wrap justify-center gap-6">
        <div ref={leftRef} className="whitespace-nowrap">6 YEARS</div>
        <div className="italic text-[3rem] opacity-60">To be.</div>
        <div ref={rightRef} className="whitespace-nowrap">TOGETHER</div>
      </div>

      <p className="absolute bottom-20 text-sm text-center">
        ADCAPSULE is always with you from <strong>1999</strong> to <strong>2025</strong>.
      </p>
    </section>
  )
}

export default FirstSection
