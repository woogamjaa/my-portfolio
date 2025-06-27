const ProfileSection = () => {




  return (
    <section className="relative bg-white py-16 px-4 h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">

        {/* 프로필 이미지 */}
        <div className="flex-1 flex justify-center">
          <img src="/public/woogamjaa.png" alt="Profile" className="w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover shadow-lg" />
        </div>
        
        {/* 프로필 텍스트 */}
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold mb-4">
            안녕하세요!
          </h2>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6">
            저는 MINHYUK이고, 프론트엔드 개발자입니다. 열정적으로 웹 기술을 배우고, 더 나은 UI/UX를 고민합니다.
          </p>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700">
            React, TypeScript, Tailwind CSS 등을 활용해 프로젝트를 개발하고 있습니다.
          </p>
        </div>

        
      </div>
    </section>
  )
}

export default ProfileSection
