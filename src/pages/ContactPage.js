import Navbar from "../components/Navbar";
import Contact from "../components/Contact";
import CleanPage from "./CleanPage";
import Empty from "../components/Empty"

const ContactPage = (argument = "contact") => {

  const render = () => {
    Empty()
    Navbar()
    Contact()
  }

  CleanPage()
  render();
};

export default ContactPage;