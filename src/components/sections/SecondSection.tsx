import { useRef } from 'react'
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
    title: 'Figma',
    description: '애니메이션 제작',
    imgSrc: '/public/figmaicon.png',
    category: 'Frontend',
  },
  {
    title: 'VScode',
    description: '애니메이션 제작',
    imgSrc: '/public/vscodeicon.png',
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
    title: 'GitHub',
    description: '애니메이션 제작',
    imgSrc: '/public/githubicon.png',
    category: 'Environment',
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
    category: 'Environment',
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
