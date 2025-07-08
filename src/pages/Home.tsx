import FirstSection from "@/components/sections/FirstSection"
import SecondSection from "@/components/sections/SecondSection"
import ThirdSection from "@/components/sections/ThirdSection"
import FourthSection from "@/components/sections/FourthSection"
import ProfileSection from "@/components/sections/ProfileSection"

const Home = () => {
  return (
    <div className="bg-black text-white">
      <FirstSection />
      <ProfileSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
    </div>
  )
}

export default Home