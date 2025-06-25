import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SecondSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const descriptionRef = useRef<HTMLParagraphElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !titleRef.current || !descriptionRef.current) return

      // 초기 상태 설정
      gsap.set(titleRef.current, { y: 60, opacity: 0 })
      gsap.set(descriptionRef.current, { y: 40, opacity: 0 })
      gsap.set(cardRefs.current, { y: 80, opacity: 0, scale: 0.8 })

      // ScrollTrigger 타임라인
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          end: 'bottom 20%',
          scrub: 1,
        }
      })

      // 제목 애니메이션
      timeline.to(titleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      }, 0)

      // 설명 애니메이션
      timeline.to(descriptionRef.current, {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      }, 0.2)

      // 카드들 순차적 애니메이션
      cardRefs.current.forEach((card, index) => {
        if (card) {
          timeline.to(card, {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: 'back.out(1.2)'
          }, 0.4 + index * 0.1)
        }
      })

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  // 카드 ref 설정 함수
  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el
  }

  return (
    <section ref={sectionRef} className="min-h-screen bg-white text-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* 섹션 제목 */}
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-4xl md:text-6xl font-bold mb-6">About Me</h2>
          <p ref={descriptionRef} className="text-xl md:text-2xl text-black max-w-3xl mx-auto">프론트엔드 개발자로서의 여정과 기술 스택을 소개합니다</p>
        </div>

        {/* 스킬 카드들 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div ref={setCardRef(0)} className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-2xl shadow-xl">
            <div className="text-4xl mb-4">⚛️</div>
            <h3 className="text-2xl font-bold mb-4">React</h3>
            <p className="text-blue-100">컴포넌트 기반 개발과 최신 Hook을 활용한 상태 관리</p>
          </div>

          <div ref={setCardRef(1)} className="bg-gradient-to-br from-green-600 to-green-800 p-8 rounded-2xl shadow-xl">
            <div className="text-4xl mb-4">📘</div>
            <h3 className="text-2xl font-bold mb-4">TypeScript</h3>
            <p className="text-green-100">타입 안정성을 보장하는 현대적인 JavaScript 개발</p>
          </div>

          <div ref={setCardRef(2)} className="bg-gradient-to-br from-purple-600 to-purple-800 p-8 rounded-2xl shadow-xl">
            <div className="text-4xl mb-4">🎨</div>
            <h3 className="text-2xl font-bold mb-4">UI/UX</h3>
            <p className="text-purple-100">사용자 중심의 인터페이스 설계와 디자인</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecondSection