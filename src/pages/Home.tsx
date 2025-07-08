import MainTitle from "@/components/sections/MainTitle"
import SkillsList from "@/components/sections/SkillsList"
import ProjectList from "@/components/sections/ProjectList"
import FourthSection from "@/components/sections/ContactSection"
import ProfileSection from "@/components/sections/ProfileSection"

const Home = () => {
  return (
    <div className="bg-black text-white">
      <MainTitle />
      <ProfileSection />
      <SkillsList />
      <ProjectList />
      <FourthSection />
    </div>
  )
}

export default Home