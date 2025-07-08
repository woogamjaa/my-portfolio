import { useState } from "react";

export default function ProfileSection() {
  const [isRealProfile, setIsRealProfile] = useState(false);

  return (
    <section className="relative bg-[rgba(240,240,240,1)] py-16 px-4 h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* 보여줄 이미지 + 텍스트 그룹 */}
        {!isRealProfile ? (
          <>
            {/* 프로필 이미지 */}
            <div className="flex-1 flex justify-center">
              <img
                src="/woogamjaa.png"
                alt="Profile"
                className="cursor-pointer w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover shadow-lg"
                onClick={() => setIsRealProfile(true)}
              />
            </div>

            {/* 프로필 텍스트 */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold mb-4">
                안녕하세요!
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6">
                민혁 페이지에 오신 것을 환영합니다🙏
              </p>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700">
                이 페이지는 제 포트폴리오로, 개발과 관련된 프로젝트와 기술을 소개하고 있습니다.
              </p>
            </div>
          </>
        ) : (
          <>
            {/* 호버시 프로필 실사 이미지 */}
            <div className="flex-1 flex justify-center">
              <img
                src="/존잘러.jpg"
                alt="Profile Real"
                className="cursor-pointer w-40 h-40 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 object-cover shadow-lg"
                onClick={() => setIsRealProfile(false)}
              />
            </div>

            {/* 호버시 프로필 변환 될 텍스트 */}
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold mb-4">
                실제 모습입니다 ! ㅎㅎ
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-700 mb-6">
                발표하는 제 모습 멋있지 않나요 😊
              </p>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
