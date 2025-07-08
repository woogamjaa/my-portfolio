import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { cards } from '../../data/skillsData'

const SecondSection = () => {
  const frontlistRef = useRef<HTMLDivElement>(null)
  const backlistRef = useRef<HTMLDivElement>(null)
  const enlistRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!frontlistRef.current || !backlistRef.current || !enlistRef.current) return;

    // 각 카드의 너비 + gap 계산
    const cardWidth = 320 // 18rem = 288px + padding 등 고려
    const gap = 32 // gap-8 = 32px

    const frontCards = cards.filter(card => card.category === 'Frontend')
    const backCards = cards.filter(card => card.category === 'Backend')
    const enCards = cards.filter(card => card.category === 'Environment')

    const frontWidth = (cardWidth + gap) * frontCards.length
    const backWidth = (cardWidth + gap) * backCards.length  
    const enWidth = (cardWidth + gap) * enCards.length

    // Timeline 생성으로 더 정밀한 제어
    const frontTl = gsap.timeline({ repeat: -1 })
    const backTl = gsap.timeline({ repeat: -1 })
    const enTl = gsap.timeline({ repeat: -1 })

    // Frontend (오른쪽 -> 왼쪽)
    frontTl.set(frontlistRef.current, { x: 0 })
           .to(frontlistRef.current, { 
             x: -frontWidth, 
             duration: 20, 
             ease: "none" 
           })

    // Backend (왼쪽 -> 오른쪽) 
    backTl.set(backlistRef.current, { x: -backWidth })
          .to(backlistRef.current, { 
            x: 0, 
            duration: 25, 
            ease: "none" 
          })

    // Environment (오른쪽 -> 왼쪽)
    enTl.set(enlistRef.current, { x: 0 })
        .to(enlistRef.current, { 
          x: -enWidth, 
          duration: 30, 
          ease: "none" 
        })

    // 컴포넌트 언마운트 시 애니메이션 정리
    return () => {
      frontTl.kill()
      backTl.kill() 
      enTl.kill()
    }
  }, []);

  // 2번만 복제 (원본 + 1개 복사본)
  const renderCardsLoop = (category: string) => {
    const filtered = cards.filter(card => card.category === category);
    return [...filtered, ...filtered].map((card, i) => (
      <div
        key={`${category}-${i}`}
        className="w-[80vw] sm:w-[45vw] md:w-[18rem] h-[20rem] md:h-[25rem] bg-white rounded-2xl p-6 shadow-xl flex-shrink-0 text-black flex flex-col justify-center items-center"
      >
        <div className="text-4xl mb-4 sm:text-5xl md:text-6xl">
          <img src={card.imgSrc} alt={card.title} className="w-30 h-28" />
        </div>
        <h3 className="text-2xl font-bold mb-3 sm:text-3xl md:text-4xl">{card.title}</h3>
        {typeof card.description === "number" ? (
          <ExpBar percent={card.description} />
        ) : (
          <p className="text-black/80 text-sm sm:text-base md:text-lg">{card.description}</p>
        )}
      </div>
    ));
  }

  const ExpBar = ({ percent }: { percent: number }) => {
    return (
      <svg width="100%" height="15" className="my-3">
        <rect x="0" y="0" width="100%" height="15" fill="#e5e7eb" rx="10" />
        <rect x="0" y="0" width={`${percent}%`} height="15" fill="#10b981" rx="10" />
      </svg>
    )
  }

  return (
    <section id="skills" className="relative bg-[rgba(240,240,240,1)] py-16 px-10 space-y-12 overflow-hidden">
      {/* Frontend */}
      <div className="relative">
        <div
          ref={frontlistRef}
          className="flex gap-8"
          style={{ willChange: "transform" }}
        >
          {renderCardsLoop('Frontend')}
        </div>
      </div>

      {/* Backend */}
      <div className="relative">
        <div
          ref={backlistRef}
          className="flex gap-8"
          style={{ willChange: "transform" }}
        >
          {renderCardsLoop('Backend')}
        </div>
      </div>

      {/* Environment */}
      <div className="relative">
        <div
          ref={enlistRef}
          className="flex gap-8"
          style={{ willChange: "transform" }}
        >
          {renderCardsLoop('Environment')}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;