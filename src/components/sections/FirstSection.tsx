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
    // 0.3초 후에 ScrollTrigger 등록 (페이지 안정화 후)
    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        if (!sectionRef.current || !leftTextRef.current || !rightTextRef.current || !middleTextRef.current) {
          return
        }

        console.log('GSAP 초기화 시작 - 고정 배경, 화면 밖으로 가려짐')

        // 초기 상태 설정
        gsap.set(leftTextRef.current, {
          x: 0,              // 중앙 위치에서 시작
          opacity: 1
        })
        
        gsap.set(rightTextRef.current, {
          x: 0,              // 중앙 위치에서 시작  
          opacity: 1
        })
        
        // FrontEnd는 Welcome To와 MINHYUK PAGE 사이 중앙에 숨겨져 있음
        gsap.set(middleTextRef.current, {
          y: 80,          // 아래쪽에 완전히 숨겨짐
          opacity: 1,         
          scale: 0.7,           
          display: 'block'    
        })

        // ScrollTrigger 타임라인 - 배경 고정, 텍스트만 움직임
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',          // 섹션이 화면 최상단에 닿을 때 시작
            end: '+=300vh',            // 뷰포트 높이만큼 스크롤해야 완료
            scrub: 3,               
            pin: true,                 // 배경 고정 (핀 효과)
            pinSpacing: true,          // 핀 간격 유지
            markers: false,            
            onUpdate: (self) => {
              console.log('진행도:', Math.round(self.progress * 100) + '%')
            }
          }
        })

        // 애니메이션: 텍스트들이 화면 밖으로 나가며 FrontEnd가 중앙에 나타남
        timeline
        .to(leftTextRef.current, {
          x: '-5vw',        // 화면 밖이 아닌 적당한 왼쪽 위치에서 멈춤
          duration: 1,
          ease: 'none'       
        }, 0)
        .to(rightTextRef.current, {
          x: '12vw',         // 화면 밖이 아닌 적당한 오른쪽 위치에서 멈춤  
          duration: 1,
          ease: 'none'       
        }, 0)
        .to(middleTextRef.current, {
          y: '10%',           
          duration: 0.8,
          ease: 'none'       
        }, 0)
      }, sectionRef)

      return () => ctx.revert()
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
      {/* 상단 네비게이션 바 */}
      <header className="w-full max-w-7xl p-6 flex justify-between items-center fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
        <h1 className="text-lg sm:text-xl font-bold tracking-wider">WOOMINHUYK</h1>
        <button className="flex flex-col space-y-1 group cursor-pointer">
          <div className="w-5 sm:w-6 h-0.5 bg-white transition-all group-hover:bg-gray-300"></div>
          <div className="w-5 sm:w-6 h-0.5 bg-white transition-all group-hover:bg-gray-300"></div>
          <div className="w-5 sm:w-6 h-0.5 bg-white transition-all group-hover:bg-gray-300"></div>
        </button>
      </header>

      {/* 메인 텍스트 컨테이너 - 전체 섹션에 오버플로우 숨김 적용 */}
      <div className="w-full h-full flex items-center justify-center relative">
        {/* Welcome To - 스크롤시 화면 왼쪽 밖으로 완전히 사라짐 */}
        <span ref={leftTextRef} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold whitespace-nowrap tracking-tight">
            Welcome To&nbsp;
        </span> 
        
        {/* MINHYUK PAGE - 스크롤시 화면 오른쪽 밖으로 완전히 사라짐 */}
        <span ref={rightTextRef} className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold whitespace-nowrap tracking-tight">
            MINHYUK PAGE
        </span>

       {/* 오버플로우 숨김 컨테이너 (투명 박스 역할) */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-60 h-16 overflow-hidden flex items-center justify-center">
            {/* FrontEnd - 밑에서 위로 올라오며 마스킹 컨테이너에 의해 가려짐/나타남 */}
            <div ref={middleTextRef} className="absolute text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold whitespace-nowrap tracking-tight">
              FrontEnd
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FirstSection