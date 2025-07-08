import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Header from '../common/Header'

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

        // 초기 상태 설정
        gsap.set(leftTextRef.current, {
          x: 0,              // 중앙 위치에서 시작
          opacity: 1
        })
        
        gsap.set(rightTextRef.current, {
          x: 0,              // 중앙 위치에서 시작  
          opacity: 1
        })
    
        gsap.set(middleTextRef.current, {
          y: 150,          // 아래쪽에 완전히 숨겨짐
          opacity: 1,         
          scale: 0.7,           
          display: 'block'    
        })

        // ScrollTrigger 타임라인 - 배경 고정, 텍스트만 움직임
        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'center center',          // 섹션이 화면 최상단에 닿을 때 시작
            end: 'bottom 2%',            // 뷰포트 높이만큼 스크롤해야 완료
            scrub: 1,               
            pin: true,                 // 배경 고정 (핀 효과)
            pinSpacing: true,          // 핀 간격 유지
            markers: false,            
            // invalidateOnRefresh: true,
          }
        })

        // 애니메이션: 텍스트들이 화면 밖으로 나가며 dev 중앙에 나타남
        timeline
        .to(leftTextRef.current, {
          x: '-6vw',        // 화면 밖이 아닌 적당한 왼쪽 위치에서 멈춤
          duration: 1,
          ease: 'none'       
        }, 0)
        .to(rightTextRef.current, {
          x: '16vw',         // 화면 밖이 아닌 적당한 오른쪽 위치에서 멈춤  
          duration: 1,
          ease: 'none'       
        }, 0)
        .to(middleTextRef.current, {
          y: '5%',           
          duration: 2,
          ease: 'none'       
        }, 0)
      }, sectionRef)

      return () => ctx.revert()
    }, 300)

    return () => clearTimeout(timer)
  }, [])

    return (
    <>
      {/* 상단 고정 헤더 - 섹션 밖에 위치 */}
      <div className="fixed top-0 left-0 w-full z-[100]">
        <Header />
      </div>

      {/* 메인 섹션 */}
      <section id="maintitle" ref={sectionRef} className="relative min-h-screen bg-black text-white flex flex-col items-center justify-center overflow-hidden">
        {/* 배경 영상 */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-50"
        >
          <source src="/star.webm" type="video/webm" />
          <source src="/star.mp4" type="video/mp4" />
        </video>

        {/* 메인 텍스트 컨테이너 - Flex 반응형 */}
        <div className="relative z-10 w-full h-full flex flex-col xl:flex-row items-center justify-center relative gap-4 xl:gap-0">
          
          {/* Welcome To - 모바일/태블릿: 첫번째 줄, 데스크탑: 왼쪽 */}
          <span ref={leftTextRef} className="text-3xl md:text-5xl xl:text-8xl font-bold whitespace-nowrap tracking-tight order-1 xl:order-1">
            Welcome To
          </span> 

          {/* Developer - 모바일/태블릿: 두번째 줄, 데스크탑: 중앙 (절대위치) */}
          <div className="order-2 xl:order-2 xl:absolute xl:inset-0 flex items-center justify-center">
            <div className="relative overflow-hidden flex items-center justify-center" style={{ width: 'fit-content', height: 'fit-content', minWidth: 'clamp(150px, 40vw, 500px)', minHeight: 'clamp(40px, 8vh, 120px)' }}>
              <div ref={middleTextRef} className="absolute xl:relative text-3xl md:text-5xl xl:text-8xl font-bold whitespace-nowrap tracking-tight">
                <img src="/Developer.png" alt="Developer" className=" w-100 pr-5 2xl:w-130 2xl:ml-10 2xl:pr-0 object-cover" />
              </div>
            </div>
          </div>
          
          {/* MINHYUK Page - 모바일/태블릿: 세번째 줄, 데스크탑: 오른쪽 */}
          <span ref={rightTextRef} className="text-3xl md:text-5xl xl:text-8xl font-bold whitespace-nowrap tracking-tight order-3 xl:order-3 xl:ml-5">
            MINHYUK Page
          </span>
        </div>
      </section>
    </>
  )
}

export default FirstSection