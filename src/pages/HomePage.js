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
        console.log(observable.target)
      }    
    },{
      threshold: [0.5]
    })
      const sections = document.querySelectorAll("main > section")
      for(let section of sections){
        section.classList.add("hidden")
        observer.observe(section)
      }
    }
  }
  const switchNavbarColor = () => {
    window.onload = () => {
      const nav = document.querySelector('nav')
      const navLink = document.querySelectorAll('.nav__wrapper > ul > li > a')
      console.log(navLink)
      let observer = new IntersectionObserver(observables => {
        for(let observable of observables){
          console.log(observable.isIntersecting);
          if(observable.isIntersecting == true){

            nav.classList.remove('colored')
            for( let link of navLink){
              link.classList.remove('colored__link')
            }
          }
          else{
            nav.classList.add('colored')
            for(let link of navLink){
              link.classList.add('colored__link')
            }
          }
        }
      },{
        threshold: [0.2]
      })
      const hero = document.querySelector('.hero')
      console.log(hero)
      observer.observe(hero)
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
  switchNavbarColor()
  
};

export default Home;
