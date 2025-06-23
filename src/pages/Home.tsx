import FirstSection from "@/components/sections/FirstSection"
import SecondSection from "@/components/sections/SecondSection"
import ThirdSection from "@/components/sections/ThirdSection"
import FourthSection from "@/components/sections/FourthSection"

const Home = () => {
  return (
    <div className="bg-black text-white">
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  )
}

export default Home