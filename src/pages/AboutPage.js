import Navbar from "../components/Navbar";
import About from "../components/About";
import Hero from "../components/Hero";
import CleanPage from "./CleanPage";
import Empty from "../components/Empty"


const AboutPage = (argument = "about") => {

  const render = () => {
    Empty()
    Navbar()
    About()
  }

  CleanPage()
  render();
};

export default AboutPage;