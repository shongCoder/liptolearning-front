import { useCallback, useEffect, useRef } from "react";

const MainComponent = ({ setActiveSection }) => {
  const homeRef = useRef(null);
  const curriculumRef = useRef(null);
  const informationRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";

      if (
        informationRef.current &&
        informationRef.current.getBoundingClientRect().top <= 150
      ) {
        currentSection = "information";
      } else if (
        curriculumRef.current &&
        curriculumRef.current.getBoundingClientRect().top <= 150
      ) {
        currentSection = "curriculum";
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="lg:w-full md:w-full w-full lg:p-0 md:px-8 px-5">
        <div
          id="home"
          ref={homeRef}
          className="w-full h-[50rem] bg-[url('/img/background_img.png')] bg-center bg-cover"
        >
          <div className="pt-[17.815rem] w-full text-center">
            <p className="text-lip_purple mb-4 md:text-[1rem] text-[0.625rem]">
              대기업 거래소 현업 전문가와 오프라인에서 함께하는 맞춤교육
            </p>
            <p className="md:text-[2.5rem] text-[1.2rem] font-semibold text-lip_black">
              립토러닝에서 주최하는{" "}
              <span className="text-lip_purple">무료강의</span>
            </p>
            <p className="md:text-[4.5rem] text-[2rem] font-bold text-lip_black mb-2">
              제1차 코인 투자 홀로서기
            </p>
            <div className="text-lip_text md:text-[1rem] text-[0.8125rem]">
              <p className="md:block inline">
                대기업 거래소의 현업 전문가와 함께 오프라인에서 맞춤형 교육을
                제공합니다.{" "}
              </p>
              <p className="md:block inline">
                이 과정에서는 가상자산, 블록체인, 그리고 웹3 기술을 실습을 통해
                배워보세요.
              </p>
            </div>
            <div className="mt-10">
              <button className="py-4 px-10 bg-lip_purple text-lip_white border border-[#2E0082] rounded-[2rem] shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)]">
                신청하기
              </button>
            </div>
          </div>
        </div>
        {/* 메인 비주얼 */}

        <div>
          <img src="./img/question.png" className="md:block hidden" />
          <img src="./img/question_m.png" className="md:hidden block" />
        </div>
        {/* 질문 박스 */}

        <div className="w-full flex justify-center">
          <div className="my-20 md:h-[10rem] h-20 w-[1px] bg-[#C8C8C8]"></div>
        </div>
        {/* 세로선 */}

        <div className="text-center w-full">
          <div className="inline-block md:font-normal font-bold md:text-lip_white text-lip_purple md:bg-lip_purple bg-lip_white py-2 px-3 rounded-[0.5rem] md:border border-none border-[#2E0082] shadow-[inset_1px_3px_8px_0_rgba(255,255,255,0.2)]">
            CHECK
          </div>
          <div className="font-bold md:text-[2.25rem] text-[1.5rem] text-lip_black mt-5">
            <p>어렵지 않습니다 !</p>
            <p>
              대한민국 시민이라면{" "}
              <span className="text-lip_purple">
                <span className="italic">&quot;</span> 무료
                <span className="italic">&quot;</span>{" "}
              </span>
              로 강의를 받으실 수 있습니다.
            </p>
          </div>
          <div className="md:text-[1.125rem] text-[0.875rem] text-lip_text mt-5 mb-20">
            <p className="md:block inline">
              크립토러닝에서 현업전문가 직접 찾아뵙고 눈높이 교육을
              진행합니다{" "}
            </p>
            <p className="md:block inline">
              아무것도 요구하지 않으니 필요한 정보 챙겨가세요
            </p>
          </div>
          <div className="w-full flex flex-col items-center">
            <ul className="text-lip_black lg:w-[65rem] md:w-full w-full">
              <li className="py-7 pl-10 bg-lip_light_gray rounded-[1.25rem] flex items-center justify-start w-full mb-5">
                <img src="./img/check.png" className="w-8 h-8 inline" />
                <span className="ml-3 md:text-[1.25rem] text-[0.875rem] font-medium">
                  어떤 매매도 강요하지 않습니다
                </span>
              </li>
              <li className="py-7 pl-10 bg-lip_light_gray rounded-[1.25rem] flex items-center justify-start w-full mb-5">
                <img src="./img/check.png" className="w-8 h-8 inline" />
                <span className="ml-3 md:text-[1.25rem] text-[0.875rem] font-medium">
                  어떤 거래서도 소개해지 않습니다
                </span>
              </li>
              <li className="py-7 pl-10 bg-lip_light_gray rounded-[1.25rem] flex items-center justify-start w-full mb-5">
                <img src="./img/check.png" className="w-8 h-8 inline" />
                <span className="ml-3 md:text-[1.25rem] text-[0.875rem] font-medium">
                  어떤 코인도 홍보하지 않습니다
                </span>
              </li>
              <li className="py-7 pl-10 bg-lip_light_gray rounded-[1.25rem] flex items-center justify-start w-full mb-5">
                <img src="./img/check.png" className="w-8 h-8 inline" />
                <span className="ml-3 md:text-[1.25rem] text-[0.875rem] font-medium">
                  저희는 유사투자 회사가 아닙니다
                </span>
              </li>
            </ul>
            <div className="mt-5 text-lip_text md:text-[1rem] text-[0.8125rem] md:text-center text-left">
              <p className="md:block inline">
                코인 관련 홍보나 사기에 지쳐 계신 분들을 위해, 정확한 정보와
                스마트한 해석을 제공합니다.
              </p>
              <p className="md:block inline">
                올바른 인식을 바탕으로 현명한 판단을 내릴 수 있도록
                도와드리겠습니다.
              </p>
            </div>

            <div className="mt-10 md:mb-[7.5rem] mb-10 lg:w-[65rem] md:w-full w-full h-[1px] bg-lip_gray"></div>
            {/* 가로선 */}
          </div>
        </div>
        {/* check */}

        <div className="w-full flex flex-col justify-center items-center bg-gradient-to-b from-[#FCFDFD] to-white md:py-[6.25rem] py-10">
          <div
            id="curriculum"
            ref={curriculumRef}
            className="lg:w-[65rem] md:w-full w-full"
          >
            <div className="flex md:justify-between md:flex-row flex-col md:items-end items-start">
              <div>
                <p className="text-lip_purple md:text-[0.875rem] text-[0.75rem] font-extrabold tracking-widest">
                  CURRICULUM
                </p>
                <p className="font-bold md:text-[2.25rem] text-[1.5rem] text-lip_black mt-3">
                  강의 커리큘럼
                </p>
              </div>
              <div className="md:text-right text-left text-lip_text md:text-[1rem] text-[0.8125rem]">
                <p>코인 투자, 어디서부터 시작해야 할지 막막하다면?</p>
                <div>
                  <p className="md:inline block">
                    현업 전문가와 함께하는 맞춤형 실습 교육으로
                  </p>
                  <p className="md:inline block">기초부터 실전까지 한 번에!</p>
                </div>
              </div>
            </div>
            <div className="mt-[3.75rem]">
              <ul className="w-full">
                <li className="flex md:flex-row flex-col items-start">
                  <div className="bg-[url('/img/curriculum/image1.png')] bg-cover bg-center md:w-[20.8125rem] w-full h-[15.625rem] rounded-[0.75rem]"></div>
                  <div className="md:ml-[3.75rem] ml-0 md:mt-0 mt-3">
                    <p className="text-lip_purple font-semibold">Chapter 1</p>
                    <p className="text-lip_black text-[1.75rem] font-bold">
                      강사 자기소개
                    </p>
                    <div className="mt-5">
                      <ol>
                        <li className="text-[#666666] font-medium">
                          지미의 커리어 소개
                        </li>
                        <li className="text-[#666666] font-medium">
                          왜 블록체인 교육을 시작하게 됐는지
                        </li>
                      </ol>
                    </div>
                  </div>
                </li>
                <li className="flex md:flex-row flex-col items-start mt-10">
                  <div className="bg-[url('/img/curriculum/image2.png')] bg-cover bg-center md:w-[20.8125rem] w-full h-[15.625rem] rounded-[0.75rem]"></div>
                  <div className="md:ml-[3.75rem] ml-0 md:mt-0 mt-3">
                    <p className="text-lip_purple font-semibold">Chapter 2</p>
                    <p className="text-lip_black text-[1.75rem] font-bold">
                      블록체인 교육이란?
                    </p>
                    <div className="mt-5">
                      <ol>
                        <li className="text-[#666666] font-medium">
                          웹3? 블록체인? 어렵게 생각할 필요 없다
                        </li>
                        <li className="text-[#666666] font-medium">
                          블록체인 누구나 할 수 있다
                        </li>
                        <li className="text-[#666666] font-medium">
                          국가/나이/성별을 초월해서 소통하는 커뮤니티
                        </li>
                      </ol>
                    </div>
                  </div>
                </li>
                <li className="flex md:flex-row flex-col items-start mt-10">
                  <div className="bg-[url('/img/curriculum/image3.png')] bg-cover bg-center md:w-[20.8125rem] w-full h-[15.625rem] rounded-[0.75rem]"></div>
                  <div className="md:ml-[3.75rem] ml-0 md:mt-0 mt-3">
                    <p className="text-lip_purple font-semibold">Chapter 3</p>
                    <p className="text-lip_black text-[1.75rem] font-bold">
                      블록체인의 중요성과 비전
                    </p>
                    <div className="mt-5">
                      <ol>
                        <li className="text-[#666666] font-medium">
                          4차 산업혁명의 핵심
                        </li>
                        <li className="text-[#666666] font-medium">
                          각 주요 국가별 블록체인을 대하는 자세
                        </li>
                        <li className="text-[#666666] font-medium">
                          최근 주요 블록체인 메이저 업체별 트렌드 소개
                        </li>
                        <li className="text-[#666666] font-medium">
                          블록체인 및 웹3가 전 산업군에 미칠 전망
                        </li>
                      </ol>
                    </div>
                  </div>
                </li>
                <li className="flex md:flex-row flex-col items-start mt-10">
                  <div className="bg-[url('/img/curriculum/image4.png')] bg-cover bg-center md:w-[20.8125rem] w-full h-[15.625rem] rounded-[0.75rem]"></div>
                  <div className="md:ml-[3.75rem] ml-0 md:mt-0 mt-3">
                    <p className="text-lip_purple font-semibold">Chapter 4</p>
                    <p className="text-lip_black text-[1.75rem] font-bold">
                      블록체인 어떻게 공부해요?
                    </p>
                    <div className="mt-5">
                      <ol>
                        <li className="text-[#666666] font-medium">기초지식</li>
                        <li className="text-[#666666] font-medium">
                          섹터별 연구
                        </li>
                        <li className="text-[#666666] font-medium">
                          투자원칙 세우기
                        </li>
                        <li className="text-[#666666] font-medium">
                          생태계 참여 방법
                        </li>
                        <li className="text-[#666666] font-medium">
                          기술을 바라보는 법
                        </li>
                      </ol>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="mt-10 text-lip_text md:text-[1rem] text-[0.8125rem]">
                * 커리큘럼은 기수별 상황에 따라 조금씩 달라질 수 있습니다.
              </div>

              <div className="mt-10 md:mb-[7.5rem] mb-10 lg:w-[65rem] md:w-full w-full h-[1px] bg-lip_gray"></div>
              {/* 가로선 */}
            </div>
          </div>
          {/* 강의 커리큘럼 */}

          <div
            id="information"
            ref={informationRef}
            className="lg:w-[65rem] md:w-full w-full"
          >
            <div>
              <p className="text-lip_purple md:text-[0.875rem] text-[0.75rem] font-extrabold tracking-widest">
                INFORMATION
              </p>
              <p className="font-bold md:text-[2.25rem] text-[1.5rem] text-lip_black mt-3">
                강의 안내
              </p>
            </div>
            <div className="mt-5 mb-4 md:text-[1rem] text-[0.8125rem] text-lip_black flex">
              <div className="mb-2 md:mr-5 mr-3 whitespace-nowrap">
                <p className="font-bold">강의 일정</p>
                <p className="font-bold">강의 장소</p>
              </div>
              <div>
                <p className="text-lip_text">
                  2025년 3월 22일 토요일 오전 10시
                </p>
                <p className="text-lip_text">
                  <span className="md:inline block">
                    서울 강남구 테헤란로 427 위워크타워 1층
                  </span>
                  <span className="md:inline block">
                    (2호선, 수인분당) 선릉역 10번 출구에서 371m
                  </span>
                </p>
              </div>
            </div>
            <a
              href="https://place.map.kakao.com/512509853"
              target={"_blank"}
              className="cursor-pointer"
            >
              <img
                src="./img/information/map.png"
                className="md:block hidden w-full"
              />
              <img
                src="./img/information/map_m.png"
                className="md:hidden block w-full"
              />
            </a>
          </div>
          {/* 강의 안내 */}
        </div>
        {/* 안내 */}

        <div className="flex justify-center items-center mb-10">
          <div className="mt-10 w-[77.5rem] h-[13rem] bg-[#1C1F33] md:rounded-[2.5rem] rounded-[1.5rem] md:px-[5rem] px-5 md:py-[3.75rem] py-6 flex lg:justify-between lg:flex-row md:flex-col flex-col md:justify-center justify-center items-center">
            <div className="lg:text-[1.75rem] md:text-[1.5rem] text-[1.125rem] font-bold text-lip_white">
              <p className="md:block inline">
                크립토러닝에서 현업 전문가 눈높이 교육을 진행합니다
              </p>
              <p className="md:block inline">
                아무것도 요구하지 않으니 필요한 정보 챙겨가세요
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <button className="py-4 md:px-10 px-0 md:w-fit w-full bg-lip_purple text-lip_white border border-[#2E0082] rounded-[2rem] shadow-[inset_4px_4px_14px_0_rgba(255,255,255,0.2)] lg:mt-0 md:mt-5 mt-5">
                지금 신청하기
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainComponent;
