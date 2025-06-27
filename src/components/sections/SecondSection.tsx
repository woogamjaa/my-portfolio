import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SecondSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])
  

  useEffect(() => {
  if (!containerRef.current || !sectionRef.current) return

  const container = containerRef.current

  const ctx = gsap.context(() => {
    const vw = window.innerWidth
    let extraPadding = 0

    if (vw < 768) {
      extraPadding = 150  // 모바일에서 스크롤 여유 공간 추가
    }

    const scrollDistance = container.scrollWidth - vw + extraPadding - 60

    gsap.to(container, {
      x: -scrollDistance,
      ease: 'none',
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'center top', // 요소가 거의 화면 위에 올라왔을 때 시작하고 싶음
        end: 'bottom 2%',
        scrub: 1,
        markers: false,
        invalidateOnRefresh: true,
      },
    })

    ScrollTrigger.refresh()
  }, sectionRef)

  return () => ctx.revert()
}, [])

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el
  }

  return (
    <section
      ref={sectionRef}
      className="
        relative
        bg-white
        h-[200vh]            /* 기본 모바일 높이 */
        sm:h-[220vh]         /* sm 이상 */
        md:h-[260vh]         /* md 이상 */
        lg:h-[280vh]         /* lg 이상 */
      "
    >

      {/* 고정된 카드 영역 */}
      <div className="sticky top-0 h-screen overflow-hidden">
        <div
          ref={containerRef}
          className="
            flex
            w-max
            space-x-4
            sm:space-x-6
            md:space-x-8
            h-full
            items-center
            px-4
            sm:px-[3rem]
            md:px-[5rem]
            lg:px-[8rem]
          "
        >
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              ref={setCardRef(i)}
              className="
                w-[80vw]           /* 모바일 카드 너비 */
                sm:w-[50vw]        /* sm 이상 */
                md:w-[18.75rem]    /* md 이상 (300px = 18.75rem) */
                h-[20rem]          /* 카드 높이 (320px) */
                md:h-[25rem]       /* md 이상 (400px) */
                bg-gradient-to-br
                from-indigo-500
                to-purple-600
                rounded-2xl
                p-6
                shadow-xl
                flex-shrink-0
                text-white
                flex
                flex-col
                justify-center
              "
            >
              <div className="text-4xl mb-4 sm:text-5xl md:text-6xl">🚀</div>
              <h3 className="text-2xl font-bold mb-2 sm:text-3xl md:text-4xl">
                Card {i + 1}
              </h3>
              <p className="text-white/80 text-sm sm:text-base md:text-lg">
                스크롤에 따라 등장하는 가로 스크롤 카드입니다.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SecondSection
