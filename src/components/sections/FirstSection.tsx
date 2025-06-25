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
            end: '+=450vh',            // 뷰포트 높이만큼 스크롤해야 완료
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
          x: '14vw',         // 화면 밖이 아닌 적당한 오른쪽 위치에서 멈춤  
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
      <header className="w-full max-w-7xl p-4 md:p-6 xl:p-8 flex justify-between items-center fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
        <h1 className="text-lg md:text-xl xl:text-2xl font-bold tracking-wider">WOOMINHUYK</h1>
        <button className="flex flex-col space-y-1 group cursor-pointer">
          <div className="w-5 md:w-6 xl:w-7 h-0.5 xl:h-1 bg-white transition-all group-hover:bg-gray-300"></div>
          <div className="w-5 md:w-6 xl:w-7 h-0.5 xl:h-1 bg-white transition-all group-hover:bg-gray-300"></div>
          <div className="w-5 md:w-6 xl:w-7 h-0.5 xl:h-1 bg-white transition-all group-hover:bg-gray-300"></div>
        </button>
      </header>

      {/* 메인 텍스트 컨테이너 - Flex 반응형 */}
      <div className="w-full h-full flex flex-col xl:flex-row items-center justify-center relative gap-4 xl:gap-0">
        
        {/* Welcome To - 모바일/태블릿: 첫번째 줄, 데스크탑: 왼쪽 */}
        <span 
          ref={leftTextRef} 
          className="text-3xl md:text-5xl xl:text-8xl font-bold whitespace-nowrap tracking-tight order-1 xl:order-1"
        >
          Welcome To
        </span> 

        {/* FrontEnd - 모바일/태블릿: 두번째 줄, 데스크탑: 중앙 (절대위치) */}
        <div className="order-2 xl:order-2 xl:absolute xl:inset-0 flex items-center justify-center">
          <div className="relative overflow-hidden flex items-center justify-center"
               style={{
                 width: 'fit-content',
                 height: 'fit-content',
                 minWidth: 'clamp(150px, 40vw, 500px)',
                 minHeight: 'clamp(40px, 8vh, 120px)'
               }}>
            <div 
              ref={middleTextRef} 
              className="absolute xl:relative text-3xl md:text-5xl xl:text-8xl font-bold whitespace-nowrap tracking-tight"
              style={{
                fontSize: 'clamp(1.5rem, 6vw, 6rem)'
              }}
            >
              FrontEnd
            </div>
          </div>
        </div>
        
        {/* MINHYUK Page - 모바일/태블릿: 세번째 줄, 데스크탑: 오른쪽 */}
        <span 
          ref={rightTextRef} 
          className="text-3xl md:text-5xl xl:text-8xl font-bold whitespace-nowrap tracking-tight order-3 xl:order-3 xl:ml-5"
        >
          MINHYUK Page
        </span>

      </div>
    </section>
  )
}

export default FirstSection