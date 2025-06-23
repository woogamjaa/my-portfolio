import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

// ScrollTrigger 플러그인 등록
gsap.registerPlugin(ScrollTrigger)

const FirstSection = () => {
  // DOM 요소 참조용 ref들
  const sectionRef = useRef<HTMLElement>(null)
  const leftTextRef = useRef<HTMLSpanElement>(null)
  const rightTextRef = useRef<HTMLSpanElement>(null)
  const middleTextRef = useRef<HTMLDivElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // GSAP context로 애니메이션 관리 (cleanup을 위해)
    const ctx = gsap.context(() => {
      // 모든 요소들이 존재하는지 확인
      if (!sectionRef.current || !leftTextRef.current || !rightTextRef.current || !middleTextRef.current) {
        console.warn('Some refs are not ready')
        return
      }

      // 초기 상태 설정
      gsap.set([leftTextRef.current, rightTextRef.current], {
        x: 0,
        opacity: 1
      })
      
      gsap.set(middleTextRef.current, {
        y: 100,
        opacity: 0,
        scale: 0.8
      })

      // ScrollTrigger를 사용한 타임라인 생성
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,        // 트리거 요소
          start: 'top 80%',                   // 애니메이션 시작 지점
          end: 'bottom 20%',                  // 애니메이션 끝 지점
          scrub: 1.5,                         // 스크롤과 동기화 (부드러운 효과)
          markers: false,                     // 개발시 true로 설정하면 마커 표시
          anticipatePin: 1,
          fastScrollEnd: true,
          preventOverlaps: true
        }
      })

      // 애니메이션 시퀀스 정의
      timeline
        // 좌측 텍스트를 왼쪽으로 이동 + 페이드 아웃
        .to(leftTextRef.current, {
          x: -150,
          opacity: 0.3,
          duration: 1,
          ease: 'power2.out'
        }, 0)
        // 우측 텍스트를 오른쪽으로 이동 + 페이드 아웃 (동시 실행)
        .to(rightTextRef.current, {
          x: 150,
          opacity: 0.3,
          duration: 1,
          ease: 'power2.out'
        }, 0)
        // 중앙 텍스트 등장 (약간의 딜레이 후)
        .to(middleTextRef.current, {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'back.out(1.2)'
        }, 0.3)

      // 추가: 컨테이너 전체 크기 조정 효과
      timeline.to(containerRef.current, {
        scale: 0.95,
        duration: 0.8,
        ease: 'power1.out'
      }, 0.2)

    }, sectionRef) // context 스코프를 sectionRef로 설정

    // cleanup 함수
    return () => {
      ctx.revert() // 모든 GSAP 애니메이션과 ScrollTrigger 정리
    }
  }, []) // 빈 의존성 배열 - 컴포넌트 마운트시 한번만 실행

  return (
    <section ref={sectionRef} className="relative h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      {/* 상단 네비게이션 바 */}
      <header className="absolute top-0 left-0 w-full p-6 flex justify-between items-center z-50">
        <h1 className="text-xl font-bold tracking-wider">WOOMINHUYK</h1>
        {/* 햄버거 메뉴 아이콘 */}
        <button className="flex flex-col space-y-1 group cursor-pointer" aria-label="메뉴 열기">
          <div className="w-6 h-0.5 bg-white transition-all group-hover:bg-gray-300"></div>
          <div className="w-6 h-0.5 bg-white transition-all group-hover:bg-gray-300"></div>
          <div className="w-6 h-0.5 bg-white transition-all group-hover:bg-gray-300"></div>
        </button>
      </header>

      {/* 메인 텍스트 컨테이너 */}
      <div ref={containerRef} className="flex flex-col items-center justify-center space-y-4">
        {/* 상단 텍스트 줄: "Welcome To" + "MINHYUK PAGE" */}
        <div className="flex items-center justify-center space-x-8">
          <span ref={leftTextRef} className="text-4xl md:text-6xl lg:text-7xl font-bold whitespace-nowrap tracking-tight">
            Welcome To
          </span>
          <span ref={rightTextRef} className="text-4xl md:text-6xl lg:text-7xl font-bold whitespace-nowrap tracking-tight">
            MINHYUK PAGE
          </span>
        </div>

        {/* 중앙에 등장할 텍스트: "FrontEnd" */}
        <div ref={middleTextRef} className="text-2xl md:text-4xl lg:text-5xl font-light italic text-gray-300 tracking-widest opacity-0">
          FrontEnd
        </div>
      </div>

      {/* 스크롤 힌트 (선택사항) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default FirstSection