const Header = ({ activeSection }) => {
  const handleMenuClick = (section) => {
    document.getElementById(section)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="lg:h-20 fixed top-0 left-0 w-full z-50 h-[3.5rem] bg-lip_white opacity-95">
      <div className="lg:px-[6.25rem] md:px-8 px-5 text-lip_menu flex h-full items-center justify-between">
        {/* 로고 */}
        <div className="lg:w-52 md:w-[9.125rem] w-[8rem]">
          <button onClick={() => handleMenuClick("home")}>
            <img src="./img/LiptoLearning_logo.png" alt="LiptoLearning Logo" />
          </button>
        </div>

        {/* 네비게이션 메뉴 (모바일에서는 숨김) */}
        <div className="lg:flex md:flex hidden">
          <ul className="lg:flex md:flex lg:space-x-6 md:space-x-6 flex-row items-center p-0 m-0 text-lip_menu">
            <li>
              <button
                onClick={() => handleMenuClick("home")}
                className={`transition-colors duration-300 ${
                  activeSection === "home"
                    ? "text-[#5200E9] font-bold"
                    : "text-lip_black"
                }`}
              >
                홈
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("curriculum")}
                className={`transition-colors duration-300 ${
                  activeSection === "curriculum"
                    ? "text-[#5200E9] font-bold"
                    : "text-lip_black"
                }`}
              >
                커리큘럼
              </button>
            </li>
            <li>
              <button
                onClick={() => handleMenuClick("information")}
                className={`transition-colors duration-300 ${
                  activeSection === "information"
                    ? "text-[#5200E9] font-bold"
                    : "text-lip_black"
                }`}
              >
                강의 안내
              </button>
            </li>
          </ul>
        </div>

        {/* 신청하기 버튼 (모바일에서도 항상 보이도록 유지) */}
        <div>
          <button className="px-6 py-[0.5rem] text-[0.8125rem] text-lip_white bg-lip_purple md:rounded-[6px] rounded-3xl font-bold ">
            신청하기
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
