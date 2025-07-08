import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const FourthSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const contactRefs = useRef<(HTMLDivElement | null)[]>([])
  const formRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (!sectionRef.current || !titleRef.current || !formRef.current) return

      // 초기 상태 설정
      gsap.set(titleRef.current, { y: -50, opacity: 0 })
      gsap.set(contactRefs.current, { scale: 0, opacity: 0 })
      gsap.set(formRef.current, { y: 100, opacity: 0 })

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
        ease: 'bounce.out'
      }, 0)

      // 연락처 정보들 애니메이션
      contactRefs.current.forEach((contact, index) => {
        if (contact) {
          timeline.to(contact, {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: 'back.out(1.5)'
          }, 0.3 + index * 0.15)
        }
      })

      // 폼 애니메이션
      timeline.to(formRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power2.out'
      }, 0.8)

    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const setContactRef = (index: number) => (el: HTMLDivElement | null) => {
    contactRefs.current[index] = el
  }

  return (
    <section id="contact" ref={sectionRef} className="min-h-screen  bg-[rgba(240,240,240,1)] text-white py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* 섹션 제목 */}
        <div className="text-center mb-16">
          <h2 ref={titleRef} className="text-5xl md:text-7xl font-bold text-purple-100 mb-8">Contact</h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* 연락처 정보 */}
          <div className="space-y-8">
            <div ref={setContactRef(0)} className="flex items-center gap-6 p-6 bg-purple-800 rounded-2xl">
              <div className="text-4xl">📧</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Email</h3>
                <p className="text-purple-200">woominhuyk@example.com</p>
              </div>
            </div>

            <div ref={setContactRef(1)} className="flex items-center gap-6 p-6 bg-purple-800 rounded-2xl">
              <div className="text-4xl">📱</div>
              <div>
                <h3 className="text-xl font-bold mb-2">Phone</h3>
                <p className="text-purple-200">+82 10-1234-5678</p>
              </div>
            </div>

            <div ref={setContactRef(2)} className="flex items-center gap-6 p-6 bg-purple-800 rounded-2xl">
              <div className="text-4xl">🐙</div>
              <div>
                <h3 className="text-xl font-bold mb-2">GitHub</h3>
                <p className="text-purple-200">github.com/woominhuyk</p>
              </div>
            </div>

            <div ref={setContactRef(3)} className="flex items-center gap-6 p-6 bg-purple-800 rounded-2xl">
              <div className="text-4xl">💼</div>
              <div>
                <h3 className="text-xl font-bold mb-2">LinkedIn</h3>
                <p className="text-purple-200">linkedin.com/in/woominhuyk</p>
              </div>
            </div>
          </div>

          {/* 연락 폼 */}
          <div ref={formRef} className="bg-purple-800 p-8 rounded-2xl">
            <h3 className="text-2xl font-bold mb-6">메시지 보내기</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">이름</label>
                <input type="text" className="w-full p-3 bg-purple-700 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="이름을 입력하세요" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">이메일</label>
                <input type="email" className="w-full p-3 bg-purple-700 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400" placeholder="이메일을 입력하세요" />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">메시지</label>
                <textarea rows={4} className="w-full p-3 bg-purple-700 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 resize-none" placeholder="메시지를 입력하세요"></textarea>
              </div>
              
              <button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 py-3 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                메시지 전송
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FourthSection