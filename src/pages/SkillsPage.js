import Navbar from "../components/Navbar";
import Skills from "../components/Skills";
import Empty from "../components/Empty"
import CleanPage from "./CleanPage";


const SkillsPage = (argument = "contact") => {

  const render = () => {
    Empty()
    Navbar()
    Skills()
  }

  CleanPage()
  render();
};

export default SkillsPage;