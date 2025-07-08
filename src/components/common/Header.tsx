import { useState, useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)
  const logoRef = useRef<HTMLHeadingElement>(null)
  const iconRef = useRef<HTMLButtonElement>(null)

  // 메뉴 열릴 때 스크롤 방지
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : 'unset'
    return () => { document.body.style.overflow = 'unset' }
  }, [menuOpen])

  // GSAP ScrollTrigger 설정
  useEffect(() => {
    if (!headerRef.current || !logoRef.current || !iconRef.current) return

    const ctx = gsap.context(() => {
      // 어두운 섹션용 (흰색 글씨)
      const toDark = () => {
        gsap.to([logoRef.current, iconRef.current], { color: '#ffffff', duration: 0.3 })
      }

      // 밝은 섹션용 (검은색 글씨)
      const toLight = () => {
        gsap.to([logoRef.current, iconRef.current], { color: '#000000', duration: 0.3 })
      }

      // 각 섹션별 ScrollTrigger 생성 (적절한 타이밍으로 조정)
      ScrollTrigger.create({
        trigger: '#maintitle',
        start: 'top top',
        end: 'bottom 10%',      // 좀 더 길게 유지
        onEnter: toDark,
        onEnterBack: toDark,
        markers: true, 
      })

      ScrollTrigger.create({
        trigger: '#profile',
        start: 'top 80%',       // 섹션이 화면 80% 지점에 올 때 (더 빨리)
        end: 'bottom 10%',
        onEnter: toLight,
        onEnterBack: toLight
      })

      ScrollTrigger.create({
        trigger: '#skills',
        start: 'top 80%',
        end: 'bottom 10%', 
        onEnter: toLight,
        onEnterBack: toLight
      })

      ScrollTrigger.create({
        trigger: '#projects',
        start: 'top 80%',
        end: 'bottom 10%',
        onEnter: toLight,
        onEnterBack: toLight
      })

      ScrollTrigger.create({
        trigger: '#contact',
        start: 'top 80%',
        end: 'bottom 10%',
        onEnter: toLight,
        onEnterBack: toLight
      })

      // 초기 테마 설정
      toDark()
    }, headerRef)

    return () => ctx.revert()
  }, [])

  return (
    <>
      {/* 상단 네비게이션 바 */}
      <header 
        ref={headerRef}
        className="w-full max-w-7xl p-4 md:p-6 xl:p-8 flex justify-between items-center fixed top-0 left-1/2 transform -translate-x-1/2 z-50"
      >
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
          style={{ color: '#ffffff' }}
        >
          <svg width="28" height="28" className="md:w-8 md:h-8 xl:w-9 xl:h-9">
            {!menuOpen ? (
              <path fill="currentColor" d="M3 18v-2h18v2H3zm0-5v-2h18v2H3zm0-5V6h18v2H3z" />
            ) : (
              <path fill="currentColor" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
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