import { useRef } from 'react'
import { cards, Category } from '../../data/skillsData'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const SecondSection = () => {
  const sectionRef = useRef<HTMLElement>(null)

  return (
    <section
      ref={sectionRef}
      className="
        relative
        bg-[rgba(240,240,240,1)]
        py-16
        px-4
        space-y-12
      "
    >
      {(['Frontend', 'Backend', 'Environment'] as Category[]).map((category) => (
        <div key={category} className="space-y-4">

          {/* 카드 리스트 */}
          <div
            className="
              flex
              gap-4
              sm:gap-6
              md:gap-8
            "
          >
            {cards
              .filter((card) => card.category === category)
              .map((card, i) => (
                <div
                  key={i}
                  className="
                    w-[80vw] sm:w-[45vw] md:w-[18rem]
                    h-[20rem] md:h-[25rem]
                    bg-white
                    rounded-2xl
                    p-6
                    shadow-xl
                    flex-shrink-0
                    text-black
                    flex
                    flex-col
                    justify-center
                    items-center
                  "
                >
                  <div className="text-4xl mb-4 sm:text-5xl md:text-6xl">
                    <img
                      src={card.imgSrc}
                      alt={card.title}
                      className="w-30 h-28"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 sm:text-3xl md:text-4xl">
                    {card.title}
                  </h3>
                  <p className="text-black/80 text-sm sm:text-base md:text-lg">
                    {card.description}
                  </p>
                </div>
              ))}
          </div>
        </div>
      ))}
    </section>
  )
}

export default SecondSection