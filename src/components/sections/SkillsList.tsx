import { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { cards } from '../../data/skillsData'

gsap.registerPlugin(ScrollTrigger)

const SecondSection = () => {
  const sectionRef = useRef<HTMLElement>(null)
  const forntlistRef = useRef<HTMLDivElement>(null)
  const backlistRef = useRef<HTMLDivElement>(null)
  const enlistRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
  if (!sectionRef.current) return;

  gsap.set(forntlistRef.current, { x: "100vw", opacity: 0 });
  gsap.set(backlistRef.current, { x: "200vw", opacity: 0 });
  gsap.set(enlistRef.current, { x: "300vw", opacity: 0 });

  // Frontend
  ScrollTrigger.create({
    trigger: forntlistRef.current,
    start: "center top",
    end: "bottom 2%",
    scrub: 1,
    markers: true,
    animation: gsap.to(forntlistRef.current, {
      x: "-18.7vw",
      opacity: 1,
      duration: 1,
      ease: "slow(1.5, 1.5, false)",
    }),
  });

  // Backend
  ScrollTrigger.create({
    trigger: backlistRef.current,
    start: "center top",
    end: "bottom 2%",
    scrub: 1,
    markers: true,
    animation: gsap.to(backlistRef.current, {
      x: "0vw",
      opacity: 1,
      duration: 1,
      ease: "slow(1.5, 1.5, false)",
    }),
  });

  // Environment
  ScrollTrigger.create({
    trigger: enlistRef.current,
    start: "center top",
    end: "bottom 2%",
    scrub: 1,
    markers: true,
    animation: gsap.to(enlistRef.current, {
      x: "0vw",
      opacity: 1,
      duration: 1,
      ease: "slow(1.5, 1.5, false)",
    }),
  });
}, []);

  const ExpBar = ({ percent }: { percent: number }) => {
  return (
    <svg width="100%" height="15" className="my-3">
      <rect x="0" y="0" width="100%" height="15" fill="#e5e7eb" rx="10" />
      <rect
        x="0"
        y="0"
        width={`${percent}%`}
        height="15"
        fill="#10b981"
        rx="10"
      />
    </svg>
  )
}

 return (
   <section ref={sectionRef} className="relative bg-[rgba(240,240,240,1)] py-16 px-10 space-y-12 overflow-hidden">
  
     {/* Frontend 섹션 */}
     <div ref={forntlistRef} className="space-y-4">
       <div className="flex gap-4 sm:gap-6 md:gap-8">
         {cards.filter(card => card.category === 'Frontend').map((card, i) => (
           <div key={i} className="w-[80vw] sm:w-[45vw] md:w-[18rem] h-[20rem] md:h-[25rem] bg-white rounded-2xl p-6 shadow-xl flex-shrink-0 text-black flex flex-col justify-center items-center">
             <div className="text-4xl mb-4 sm:text-5xl md:text-6xl">
               <img src={card.imgSrc} alt={card.title} className="w-30 h-28" />
             </div>
             <h3 className="text-2xl font-bold mb-3 sm:text-3xl md:text-4xl">{card.title}</h3>
         {typeof card.description === "number" ? (
           <ExpBar percent={card.description} />
              ) : (
                <p className="text-black/80 text-sm sm:text-base md:text-lg">
                  {card.description}
                </p>  
              )}
              <p className="text-black/80 text-sm sm:text-base md:text-lg">{card.description}</p>
           </div>
         ))}
       </div>
     </div>

     {/* Backend 섹션 */}
     <div ref={backlistRef} className="space-y-4">
       <div className="flex gap-4 sm:gap-6 md:gap-8">
         {cards.filter(card => card.category === 'Backend').map((card, i) => (
           <div key={i} className="w-[80vw] sm:w-[45vw] md:w-[18rem] h-[20rem] md:h-[25rem] bg-white rounded-2xl p-6 shadow-xl flex-shrink-0 text-black flex flex-col justify-center items-center">
             <div className="text-4xl mb-4 sm:text-5xl md:text-6xl">
               <img src={card.imgSrc} alt={card.title} className="w-30 h-28" />
             </div>
             <h3 className="text-2xl font-bold mb-3 sm:text-3xl md:text-4xl">{card.title}</h3>
             {typeof card.description === "number" ? (
           <ExpBar percent={card.description} />
              ) : (
                <p className="text-black/80 text-sm sm:text-base md:text-lg">
                  {card.description}
                </p>  
              )}
             <p className="text-black/80 text-sm sm:text-base md:text-lg">{card.description}</p>
           </div>
         ))}
       </div>
     </div>

     {/* Environment 섹션 */}
     <div ref={enlistRef} className="space-y-4">
       <div className="flex gap-4 sm:gap-6 md:gap-8">
         {cards.filter(card => card.category === 'Environment').map((card, i) => (
           <div key={i} className="w-[80vw] sm:w-[45vw] md:w-[18rem] h-[20rem] md:h-[25rem] bg-white rounded-2xl p-6 shadow-xl flex-shrink-0 text-black flex flex-col justify-center items-center">
             <div className="text-4xl mb-4 sm:text-5xl md:text-6xl">
               <img src={card.imgSrc} alt={card.title} className="w-30 h-28" />
             </div>
             <h3 className="text-2xl font-bold mb-3 sm:text-3xl md:text-4xl">{card.title}</h3>
             {typeof card.description === "number" ? (
           <ExpBar percent={card.description} />
              ) : (
                <p className="text-black/80 text-sm sm:text-base md:text-lg">
                  {card.description}
                </p>  
              )}
             <p className="text-black/80 text-sm sm:text-base md:text-lg">{card.description}</p>
           </div>
         ))}
       </div>
     </div>
   </section>
 )
}

export default SecondSection