import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Footer from "../../components/layout/Footer.jsx";
import Header from "../../components/layout/Header.jsx";
import TopButton from "../../components/layout/TopButton.jsx";

const LayoutPage = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    console.log("현재 activeSection 값:", activeSection); // 🔥 디버깅: 값이 업데이트되는지 확인
  }, [activeSection]);

  return (
    <div>
      <Header activeSection={activeSection} />
      <Outlet context={{ setActiveSection }} />

      <Footer />
      <TopButton />
    </div>
  );
};

export default LayoutPage;
