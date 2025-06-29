import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

type Category = 'Frontend' | 'Backend' | 'Environment'

type CardData = {
  title: string
  description: string
  imgSrc: string
  category: Category
}

const cards: CardData[] = [
  {
    title: 'React',
    description: '2개 프로젝트 경험',
    imgSrc: '/public/reacticon.png',
    category: 'Frontend',
  },
  {
    title: 'Vue',
    description: '3개 프로젝트 경험',
    imgSrc: '/public/vueicon.png',
    category: 'Frontend',
  },
  {
    title: 'JavaScript',
    description: '애니메이션 제작',
    imgSrc: '/public/JavaScripticon.png',
    category: 'Frontend',
  },
  {
    title: 'Tailwind CSS',
    description: '디자인 시스템 구축',
    imgSrc: '/public/tailwindcssicon.png',
    category: 'Frontend',
  },
  {
    title: 'Java',
    description: '애니메이션 제작',
    imgSrc: '/public/javaicon.png',
    category: 'Backend',
  },
  {
    title: 'spring boot',
    description: '예시',
    imgSrc: '/public/spring-booticon.png',
    category: 'Backend',
  },
  {
    title: 'Oracle SQL',
    description: 'SQL 입문',
    imgSrc: '/public/oracleicon.png',
    category: 'Backend',
  },
  {
    title: 'GitHub',
    description: '애니메이션 제작',
    imgSrc: '/public/githubicon.png',
    category: 'Environment',
  },
  {
    title: 'VScode',
    description: '애니메이션 제작',
    imgSrc: '/public/vscodeicon.png',
    category: 'Frontend',
  },
  {
    title: 'intellij IDEA',
    description: '애니메이션 제작',
    imgSrc: '/public/intellijIDEAicon.png',
    category: 'Backend',
  },
  {
    title: 'ERD Cloud',
    description: '애니메이션 제작',
    imgSrc: '/public/ERDcloudicon.png',
    category: 'Backend',
  },
  {
    title: 'Notion',
    description: '애니메이션 제작',
    imgSrc: '/public/notionicon.png',
    category: 'Environment',
  },
  {
    title: 'Figma',
    description: '애니메이션 제작',
    imgSrc: '/public/figmaicon.png',
    category: 'Frontend',
  },
  {
    title: 'Claude',
    description: '애니메이션 제작',
    imgSrc: '/public/claude-icon.png',
    category: 'Environment',
  },
  {
    title: 'chatGPT',
    description: '애니메이션 제작',
    imgSrc: '/public/chatGPTicon.png',
    category: 'Environment',
  },
]

const SecondSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const [selectedCategory, setSelectedCategory] = useState<Category>('Frontend')

  useEffect(() => {
    if (!containerRef.current || !sectionRef.current) return

    const container = containerRef.current

    const ctx = gsap.context(() => {
      const vw = window.innerWidth
      let extraPadding = 0

      if (vw < 768) {
        extraPadding = 150
      }

      const scrollDistance =
        container.scrollWidth - vw + extraPadding - 60

      gsap.to(container, {
        x: -scrollDistance,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center top',
          end: 'bottom 2%',
          scrub: 1,
          markers: false,
          invalidateOnRefresh: true,
        },
      })

      ScrollTrigger.refresh()
    }, sectionRef)

    return () => ctx.revert()
  }, [selectedCategory])

  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el
  }

  const filteredCards = cards.filter(
    (card) => card.category === selectedCategory
  )

  return (
    <section
      ref={sectionRef}
      className="
        relative
        bg-[rgba(240,240,240,1)]
        h-[200vh]
        sm:h-[220vh]
        md:h-[260vh]
        lg:h-[280vh]
      "
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        {/* 카테고리 선택 UI */}
        <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10 flex space-x-4">
          {(['Frontend', 'Backend', 'Environment'] as Category[]).map(
            (category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded 
                ${
                  selectedCategory === category
                    ? 'bg-black text-white'
                    : 'bg-gray-200 text-black'
                }`}
              >
                {category}
              </button>
            )
          )}
        </div>

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
          {filteredCards.map((card, i) => (
            <div
              key={i}
              ref={setCardRef(i)}
              className="
                w-[80vw] sm:w-[50vw] md:w-[18.75rem]
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
              <h3 className="text-2xl font-bold mb-5 sm:text-3xl md:text-4xl">
                {card.title}
              </h3>
              <p className="text-black/80 text-sm sm:text-base md:text-lg">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SecondSection
