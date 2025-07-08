import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { cards } from '../../data/skillsData'

const SecondSection = () => {
  const frontlistRef = useRef<HTMLDivElement>(null)
  const backlistRef = useRef<HTMLDivElement>(null)
  const enlistRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!frontlistRef.current || !backlistRef.current || !enlistRef.current) return;

    // 각 카드 리스트의 실제 너비 계산 (복제된 부분 제외)
    const frontCards = frontlistRef.current.children
    const backCards = backlistRef.current.children
    const enCards = enlistRef.current.children

    // 원본 카드들의 너비만 계산 (절반)
    const frontWidth = Array.from(frontCards).slice(0, frontCards.length / 2).reduce((total, card) => {
      return total + (card as HTMLElement).offsetWidth + 32 // gap-8 = 32px
    }, 0)

    const backWidth = Array.from(backCards).slice(0, backCards.length / 2).reduce((total, card) => {
      return total + (card as HTMLElement).offsetWidth + 32
    }, 0)

    const enWidth = Array.from(enCards).slice(0, enCards.length / 2).reduce((total, card) => {
      return total + (card as HTMLElement).offsetWidth + 32
    }, 0)

    // Frontend (오른쪽 -> 왼쪽) 
    gsap.fromTo(frontlistRef.current, 
      { x: 0 },
      {
        x: -frontWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      }
    );

    // Backend (왼쪽 -> 오른쪽)
    gsap.fromTo(backlistRef.current,
      { x: -backWidth },
      {
        x: 0,
        duration: 25,
        ease: "none", 
        repeat: -1,
      }
    );

    // Environment (오른쪽 -> 왼쪽)
    gsap.fromTo(enlistRef.current,
      { x: 0 },
      {
        x: -enWidth,
        duration: 35,
        ease: "none",
        repeat: -1,
      }
    );
  }, []);

  // 카드 필터링 + 3번 복제로 더 부드러운 루프 구현
  const renderCardsLoop = (category: string) => {
    const filtered = cards.filter(card => card.category === category);
    // 3번 복제해서 더 부드러운 무한 루프 구현
    return [...filtered, ...filtered, ...filtered].map((card, i) => (
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
    <section className="relative bg-[rgba(240,240,240,1)] py-16 px-10 space-y-12 overflow-hidden">
      {/* Frontend */}
      <div className="relative">
        <div
          ref={frontlistRef}
          className="flex gap-8 whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          {renderCardsLoop('Frontend')}
        </div>
      </div>

      {/* Backend */}
      <div className="relative">
        <div
          ref={backlistRef}
          className="flex gap-8 whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          {renderCardsLoop('Backend')}
        </div>
      </div>

      {/* Environment */}
      <div className="relative">
        <div
          ref={enlistRef}
          className="flex gap-8 whitespace-nowrap"
          style={{ willChange: "transform" }}
        >
          {renderCardsLoop('Environment')}
        </div>
      </div>
    </section>
  );
};

export default SecondSection;