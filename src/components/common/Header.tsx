import { useState, useEffect } from 'react'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  // 메뉴 열릴 때 스크롤 방지
  useEffect(() => {
    if (menuOpen) {
      // 스크롤 방지
      document.body.style.overflow = 'hidden'
    } else {
      // 스크롤 복원
      document.body.style.overflow = 'unset'
    }

    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [menuOpen])

  return (
    <>
      {/* 상단 네비게이션 바 */}
      <header className={`w-full max-w-7xl p-4 md:p-6 xl:p-8 flex justify-between items-center fixed top-0 left-1/2 transform -translate-x-1/2 z-50 transition-colors duration-300 ${menuOpen ? 'bg-transparent' : 'bg-transparent'}`}>
        <h1 className={`text-lg md:text-xl xl:text-2xl font-bold tracking-wider transition-colors duration-300 ${menuOpen ? 'text-white' : 'text-white'}`}>
          WOOMINHUYK
        </h1>
        <button 
          className="flex items-center justify-center cursor-pointer relative z-50"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {!menuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="md:w-8 md:h-8 xl:w-9 xl:h-9">
              <path fill="#fff" d="M3 18v-2h18v2H3zm0-5v-2h18v2H3zm0-5V6h18v2H3z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" className="md:w-8 md:h-8 xl:w-9 xl:h-9">
              <path fill="#fff" d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/>
            </svg>
          )}
        </button>
      </header>

      {/* 풀스크린 메뉴 */}
      {menuOpen && (
        <div className="fixed inset-0 bg-black z-40 flex items-center justify-start animate-fadeIn">
          <div className="pl-4 md:pl-16 xl:pl-32 w-full h-full flex flex-col justify-center items-start">
            <div className="flex flex-col justify-start space-y-4 md:space-y-6 xl:space-y-8">
              <a 
                href="#about" 
                onClick={() => setMenuOpen(false)}
                className="text-white text-4xl md:text-6xl xl:text-8xl font-bold text-decoration-none relative transition-colors duration-300 hover:text-gray-400 group"
              >
                ABOUT
                <span className="absolute left-0 bottom-0 w-full h-0.5 md:h-1 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a 
                href="#projects" 
                onClick={() => setMenuOpen(false)}
                className="text-white text-4xl md:text-6xl xl:text-8xl font-bold text-decoration-none relative transition-colors duration-300 hover:text-gray-400 group"
              >
                PROJECTS
                <span className="absolute left-0 bottom-0 w-full h-0.5 md:h-1 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a 
                href="#contact" 
                onClick={() => setMenuOpen(false)}
                className="text-white text-4xl md:text-6xl xl:text-8xl font-bold text-decoration-none relative transition-colors duration-300 hover:text-gray-400 group"
              >
                CONTACT
                <span className="absolute left-0 bottom-0 w-full h-0.5 md:h-1 bg-white transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Header

// Tailwind에 fadeIn 애니메이션 추가하려면 tailwind.config.js에 다음 코드 추가:
/*
module.exports = {
  theme: {
    extend: {
      animation: {
        'fadeIn': 'fadeIn 0.3s ease-in-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        }
      }
    }
  }
}
*/