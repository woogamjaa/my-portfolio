import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FirstSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const leftTextRef = useRef<HTMLSpanElement>(null)
  const rightTextRef = useRef<HTMLSpanElement>(null)
  const middleTextRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // 0.5초 후에 ScrollTrigger 등록 (페이지 안정화 후)
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        if (!sectionRef.current || !leftTextRef.current || !rightTextRef.current || !middleTextRef.current) {
          return
        }

        console.log('GSAP 초기화 시작 - 지연 후')

        // 초기 상태 다시 강제 설정
        gsap.set(leftTextRef.current, {
          x: 0,
          opacity: 1,
          clearProps: "all"  // 모든 기존 속성 제거
        })
        
        gsap.set(rightTextRef.current, {
          x: 0,
          opacity: 1,
          clearProps: "all"  // 모든 기존 속성 제거
        })
        
        gsap.set(middleTextRef.current, {
          opacity: 0,
          scale: 0,
          display: 'none',
          clearProps: "all"  // 모든 기존 속성 제거
        })

      // ScrollTrigger 타임라인 - 범위 완전 변경!
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'bottom bottom',    // 섹션 하단이 화면 하단에 닿을 때 시작
          end: 'bottom top',         // 섹션 하단이 화면 상단에 갈 때 끝
          scrub: 1,
          markers: true,
          onUpdate: (self) => {
            console.log('진행도:', Math.round(self.progress * 100) + '%')
          },
          immediateRender: false,    // 즉시 렌더링 방지
        }
      })

      // 애니메이션 실행
      timeline
        .to(leftTextRef.current, {
          x: -400,
          duration: 1,
          ease: 'power2.out'
        }, 0)
        .to(rightTextRef.current, {
          x: 400,
          duration: 1,
          ease: 'power2.out'
        }, 0)
        .set(middleTextRef.current, {
          display: 'block'
        }, 0.3)
        .to(middleTextRef.current, {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'back.out(1.7)'
        }, 0.3)

    }, sectionRef)

    return () => ctx.revert()
    }, 500) // 0.5초 지연

    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden px-4">
      {/* 상단 네비게이션 바 */}
      <header className="w-full max-w-7xl p-6 flex justify-between items-center fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
        <h1 className="text-lg sm:text-xl font-bold tracking-wider">WOOMINHUYK</h1>
        <button className="flex flex-col space-y-1 group cursor-pointer">
          <div className="w-5 sm:w-6 h-0.5 bg-white transition-all group-hover:bg-gray-300"></div>
          <div className="w-5 sm:w-6 h-0.5 bg-white transition-all group-hover:bg-gray-300"></div>
          <div className="w-5 sm:w-6 h-0.5 bg-white transition-all group-hover:bg-gray-300"></div>
        </button>
      </header>

      {/* 메인 텍스트 컨테이너 - 진짜 간단하게! */}
      <div className="w-full max-w-7xl flex items-center justify-center">
        {/* 처음에는 정말로 한 줄로 붙어있음 */}
        <span ref={leftTextRef} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold whitespace-nowrap tracking-tight">
          Welcome To
        </span>
        <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mx-2">
          &nbsp;
        </span>
        <span ref={rightTextRef} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold whitespace-nowrap tracking-tight">
          MINHYUK PAGE
        </span>
        
        {/* FrontEnd - 진짜로 숨김
        <div ref={middleTextRef} className="absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-light italic text-gray-300 tracking-widest">
          FrontEnd
        </div> */}
      </div>

      {/* 스크롤 힌트 */}
      <div className="w-full flex justify-center mt-16">
        <div className="w-5 h-8 sm:w-6 sm:h-10 border-2 border-white rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-2 sm:h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>

      {/* 현재 상태 표시 */}
      <div className="w-full max-w-7xl p-4 text-xs text-gray-500 mt-8">
        <div className="text-center">
          <div>🔥 처음에는 정말로 "Welcome To MINHYUK PAGE" 한 줄!</div>
          <div>🚀 스크롤하면 좌우로 벌어지며 "FrontEnd" 등장!</div>
        </div>
      </div>
    </section>
  )
}

export default FirstSection