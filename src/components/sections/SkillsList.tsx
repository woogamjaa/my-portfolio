import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { cards } from '../../data/skillsData'

const SecondSection = () => {
  const forntlistRef = useRef<HTMLDivElement>(null)
  const backlistRef = useRef<HTMLDivElement>(null)
  const enlistRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!forntlistRef.current || !backlistRef.current || !enlistRef.current) return;

    // 카드 컨테이너 너비 측정
    const frontWidth = forntlistRef.current.scrollWidth / 2; // 두 번 복제했으니 2로 나눔
    const backWidth = backlistRef.current.scrollWidth / 2;
    const envirWidth = enlistRef.current.scrollWidth / 2;

    // gsap modifiers 플러그인 로드 (gsap 모듈에 내장됨)
    // 이걸로 x 값을 모듈로 연산하여 무한 반복 좌표 변환 가능

    // Frontend (오른쪽 -> 왼쪽)
    gsap.to(forntlistRef.current, {
      x: `-=${frontWidth}`, // frontWidth 만큼 왼쪽으로 이동
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % -frontWidth) // -frontWidth로 모듈러 연산
      }
    });

    // Backend (왼쪽 -> 오른쪽)
    gsap.to(backlistRef.current, {
      x: `+=${backWidth}`, // backWidth 만큼 오른쪽으로 이동
      duration: 20,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % backWidth) // backWidth로 모듈러 연산
      }
    });

    // Environment (오른쪽 -> 왼쪽)
    gsap.to(enlistRef.current, {
      x: `-=${envirWidth}`,
      duration: 25,
      ease: "linear",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % -envirWidth)
      }
    });
  }, []);

  // 카드 필터링 + 2번 복제 렌더링
  const renderCardsLoop = (category: string) => {
    const filtered = cards.filter(card => card.category === category);
    return [...filtered, ...filtered].map((card, i) => (
      <div
        key={category + i}
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
      <div
        ref={forntlistRef}
        className="flex gap-4 sm:gap-6 md:gap-8 whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {renderCardsLoop('Frontend')}
      </div>

      {/* Backend */}
      <div
        ref={backlistRef}
        className="flex gap-4 sm:gap-6 md:gap-8 whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {renderCardsLoop('Backend')}
      </div>

      {/* Environment */}
      <div
        ref={enlistRef}
        className="flex gap-4 sm:gap-6 md:gap-8 whitespace-nowrap"
        style={{ willChange: "transform" }}
      >
        {renderCardsLoop('Environment')}
      </div>
    </section>
  );
};

export default SecondSection;
