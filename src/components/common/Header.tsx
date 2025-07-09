import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const logoRef = useRef<HTMLHeadingElement>(null)
  const iconRef = useRef<HTMLButtonElement>(null)

  // 메뉴 열릴 때 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [menuOpen])

  // 간단한 스크롤 기반 색상 변경
  useEffect(() => {
    if (!logoRef.current || !iconRef.current) return

    const ctx = gsap.context(() => {
      // maintitle 섹션에서만 흰색, 나머지는 검은색
      ScrollTrigger.create({
        trigger: '#maintitle',
        start: 'top bottom',    // 섹션이 화면에 나타나기 시작할 때
        end: 'bottom top',      // 섹션이 화면에서 완전히 사라질 때
        onEnter: () => {
          gsap.to([logoRef.current, iconRef.current], { color: '#ffffff', duration: 0.3 })
        },
        onLeave: () => {
          gsap.to([logoRef.current, iconRef.current], { color: '#000000', duration: 0.3 })
        },
        onEnterBack: () => {
          gsap.to([logoRef.current, iconRef.current], { color: '#ffffff', duration: 0.3 })
        },
        onLeaveBack: () => {
          gsap.to([logoRef.current, iconRef.current], { color: '#000000', duration: 0.3 })
        },
        // markers: true // 디버깅용 - 테스트 후 제거
      })

      // 초기 색상 설정 (첫 화면 = maintitle = 흰색)
      gsap.set([logoRef.current, iconRef.current], { color: '#ffffff' })
    })

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* 상단 네비게이션 바 */}
      <header className="w-full max-w-7xl p-4 md:p-6 xl:p-8 flex justify-between items-center fixed top-0 left-1/2 transform -translate-x-1/2 z-50">
        <h1 
          ref={logoRef}
          className="text-lg md:text-xl xl:text-2xl font-bold tracking-wider"
          style={{ color: '#ffffff' }}
        >
          WOOMINHUYK
        </h1>
        
        <button 
          ref={iconRef}
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-[60] p-2"
          style={{ color: menuOpen ? '#ffffff' : undefined }}
        >
          <svg width="28" height="28" className="md:w-8 md:h-8 xl:w-9 xl:h-9">
            {!menuOpen ? (
              <path fill="currentColor" d="M3 18v-2h18v2H3zm0-5v-2h18v2H3zm0-5V6h18v2H3z" />
            ) : (
              <path fill="#ffffff" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            )}
          </svg>
        </button>
      </header>

      {/* 풀스크린 메뉴 */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex items-center justify-start">
          <div className="pl-4 md:pl-16 xl:pl-32 w-full h-full flex flex-col justify-center items-start">
            <div className="flex flex-col justify-start space-y-4 md:space-y-6 xl:space-y-8">
              <a href="#about" onClick={() => setMenuOpen(false)} className="text-white text-4xl md:text-6xl xl:text-8xl font-bold hover:text-gray-400">
                ABOUT
              </a>
              <a href="#projects" onClick={() => setMenuOpen(false)} className="text-white text-4xl md:text-6xl xl:text-8xl font-bold hover:text-gray-400">
                PROJECTS
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)} className="text-white text-4xl md:text-6xl xl:text-8xl font-bold hover:text-gray-400">
                CONTACT
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header