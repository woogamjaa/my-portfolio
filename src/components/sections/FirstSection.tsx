import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FirstSection = () => {
  // 각 요소에 접근하기 위한 ref 생성
  const leftRef = useRef(null)
  const rightRef = useRef(null)
  const middleRef = useRef(null)
  const triggerRef = useRef(null) // 전체 섹션 트리거용

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: triggerRef.current, // 트리거 대상은 전체 섹션
        start: 'top center',         // 뷰포트 중앙에 도달할 때 시작
        end: 'bottom center',        // 뷰포트 벗어나면 되돌림
        scrub: true,                 // 스크롤에 따라 부드럽게 움직임
        markers: false               // 디버깅용 마커 (원하면 true로)
      }
    })

    // 왼쪽 텍스트 왼쪽으로 이동
    tl.to(leftRef.current, {
      x: '-80px',
      duration: 1,
      ease: 'power2.out'
    }, 0)

    // 오른쪽 텍스트 오른쪽으로 이동
    tl.to(rightRef.current, {
      x: '80px',
      duration: 1,
      ease: 'power2.out'
    }, 0)

    // 가운데 텍스트 아래에서 위로 등장 + 투명도 증가
    tl.fromTo(middleRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power2.out'
      }, 0.1
    )

    // 클린업: 컴포넌트 unmount 시 ScrollTrigger 제거
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <section
      ref={triggerRef}
      className="h-screen flex flex-col items-center justify-center relative bg-black text-white overflow-hidden"
    >
      {/* 상단 네비 */}
      <header className="absolute top-0 left-0 w-full p-6 z-50 flex justify-between">
        <h1 className="text-xl font-bold">WOOMINHUYK</h1>
        <div className="space-y-1">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </div>
      </header>

      {/* 텍스트 그룹 */}
      <div className="relative flex items-center justify-center h-[200px]">
        {/* 왼쪽 텍스트 */}
        <div
          ref={leftRef}
          className="text-[4rem] font-bold whitespace-nowrap px-4"
        >
          Welcome To
        </div>

        {/* 가운데 텍스트 (처음엔 opacity: 0 으로 숨김) */}
        <div
          ref={middleRef}
          className="absolute text-[2.5rem] italic opacity-0"
        >
          FrontEnd
        </div>

        {/* 오른쪽 텍스트 */}
        <div
          ref={rightRef}
          className="text-[4rem] font-bold whitespace-nowrap px-4"
        >
          MINHYUK PAGE
        </div>
      </div>

      {/* 하단 문구 */}
      <p className="absolute bottom-20 text-sm text-center">
        ADCAPSULE is always with you from <strong>1999</strong> to <strong>2025</strong>.
      </p>
    </section>
  )
}

export default FirstSection
