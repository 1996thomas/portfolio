import Navbar from "../components/Navbar";
import CleanPage from "./CleanPage";
import Portfolio from "../components/Portfolio";
import Empty from "../components/Empty"

const PortfolioPage = (argument = "portfolio") => {

  const render = () => {
    Empty()
    Navbar()
    Portfolio()
  }

  CleanPage()
  render();
};

export default PortfolioPage;