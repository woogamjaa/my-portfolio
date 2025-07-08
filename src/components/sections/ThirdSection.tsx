import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const ThirdSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const projectRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !titleRef.current) return

      // 초기 상태 설정
      gsap.set(titleRef.current, { scale: 0.8, opacity: 0 })
      gsap.set(projectRefs.current, { x: -100, opacity: 0, rotation: -5 })

      // ScrollTrigger 타임라인
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          end: 'bottom 30%',
          scrub: 1.5,
        }
      })

      // 제목 애니메이션
      timeline.to(titleRef.current, {
        scale: 1,
        opacity: 1,
        duration: 1.2,
        ease: 'elastic.out(1, 0.8)'
      }, 0)

      // 프로젝트 카드들 애니메이션
      projectRefs.current.forEach((project, index) => {
        if (project) {
          timeline.to(project, {
            x: 0,
            opacity: 1,
            rotation: 0,
            duration: 1,
            ease: 'power3.out'
          }, 0.3 + index * 0.2)
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const setProjectRef = (index: number) => (el: HTMLDivElement | null) => {
    projectRefs.current[index] = el
  }

  return (
    <section ref={sectionRef} className="min-h-screen bg-[rgba(240,240,240,1)] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 섹션 제목 */}
        <div className="text-center mb-20">
          <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold text-black">Projects</h2>
        </div>

        {/* 프로젝트 그리드 */}
        <div className="space-y-20">
          {/* 프로젝트 1 */}
          <div ref={setProjectRef(0)} className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="w-140 bg-white h-80 rounded-2xl shadow-xl flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl md:text-4xl text-black font-bold mb-3">E-Commerce Platform</h3>
              <p className="text-xl text-gray-700 mb-3">React와 TypeScript로 구축한 현대적인 온라인 쇼핑몰 플랫폼입니다.</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-black px-4 py-2 rounded-full text-sm">React</span>
                <span className="bg-black px-4 py-2 rounded-full text-sm">TypeScript</span>
                <span className="bg-black px-4 py-2 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* 프로젝트 2 */}
          <div ref={setProjectRef(1)} className="flex flex-col lg:flex-row-reverse items-center gap-12">
            <div className="lg:w-1/2">
              <div className="w-140 bg-white h-80 rounded-2xl shadow-xl flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl md:text-4xl text-black font-bold mb-3">E-Commerce Platform</h3>
              <p className="text-xl text-gray-700 mb-3">React와 TypeScript로 구축한 현대적인 온라인 쇼핑몰 플랫폼입니다.</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-black px-4 py-2 rounded-full text-sm">React</span>
                <span className="bg-black px-4 py-2 rounded-full text-sm">TypeScript</span>
                <span className="bg-black px-4 py-2 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>
          </div>

          {/* 프로젝트 3 */}
          <div ref={setProjectRef(2)} className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="w-140 bg-white h-80 rounded-2xl shadow-xl flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-3xl md:text-4xl text-black font-bold mb-3">E-Commerce Platform</h3>
              <p className="text-xl text-gray-700 mb-3">React와 TypeScript로 구축한 현대적인 온라인 쇼핑몰 플랫폼입니다.</p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-black px-4 py-2 rounded-full text-sm">React</span>
                <span className="bg-black px-4 py-2 rounded-full text-sm">TypeScript</span>
                <span className="bg-black px-4 py-2 rounded-full text-sm">Tailwind CSS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ThirdSection