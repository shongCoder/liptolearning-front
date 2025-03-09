import MainComponent from "../components/MainComponent";
import { useOutletContext } from "react-router-dom";

function Mainpage() {
  const { setActiveSection } = useOutletContext();
  return <MainComponent setActiveSection={setActiveSection} />;
}

export default Mainpage;
