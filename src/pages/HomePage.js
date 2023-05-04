import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import CleanPage from "./CleanPage";
import Empty from "../components/Empty";
const Home = (argument = "home") => {
  

  const render = () => {
    Navbar()
    Hero()
    About()
    Skills()
    Portfolio()
    Contact()
    Empty()
  }

  CleanPage()
  render();
};

export default Home;
