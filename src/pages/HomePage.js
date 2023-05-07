import About from "../components/About";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Skills from "../components/Skills";
import Contact from "../components/Contact";
import CleanPage from "./CleanPage";
import Empty from "../components/Empty";
const Home = (argument = "home") => {
  
  const lazyLoading = () => {
    window.onload = () => {
    let observer = new IntersectionObserver(observables => {
      for(let observable of observables){
        console.log(observable)
        if(observable.intersectionRatio > 0.5){
          observable.target.classList.remove("hidden")
        }else{
          observable.target.classList.add("hidden")
        }
      }    
    },{
      threshold: [0.5]
    })
      const sections = document.querySelectorAll("main > section")
      for(let section of sections){
        section.classList.add("hidden")
        observer.observe(section)
        console.log(section);
      }
    }
  }


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
  lazyLoading()
};

export default Home;
