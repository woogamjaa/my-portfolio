// SecondSection.tsx (자연스러운 가로 스크롤 애니메이션)

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// 플러그인 등록
gsap.registerPlugin(ScrollTrigger)

const SecondSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!containerRef.current || !sectionRef.current) return

      const container = containerRef.current
      const scrollDistance = container.scrollWidth - window.innerWidth;

      gsap.to(container, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top+=300 top',
          end: `+=${scrollDistance}`,
          scrub: 1,
          markers: true
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el
  }

  return (
    <section ref={sectionRef} className="relative h-[260vh] bg-white">
      {/* 고정된 카드 영역 */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={containerRef}
          className="flex w-max space-x-8 h-full items-center px-20"
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              ref={setCardRef(i)}
              className="min-w-[300px] h-[400px] bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 shadow-xl flex-shrink-0 text-white flex flex-col justify-center"
            >
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-2xl font-bold mb-2">Card {i + 1}</h3>
              <p className="text-white/80">스크롤에 따라 등장하는 가로 스크롤 카드입니다.</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SecondSection
