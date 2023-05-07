import logo from '../assets/images/moipc.jpg'

const Navbar = () => {
  const createNavbar = () => {
    const nav = document.createElement("nav");
    const navWrapper = document.createElement("div");
    const navBrand = document.createElement("a");
    const navBrandImage = document.createElement("img")
    const navUl = document.createElement("ul")

    nav.setAttribute('id', 'nav')
    navWrapper.classList.add('nav__wrapper')
    navBrand.append(navBrandImage)
    navBrand.setAttribute('href', '')
    navBrandImage.setAttribute('src', logo)


    nav.append(navWrapper)
    navWrapper.append(navBrand,navUl)
    main.append(nav)

    navUl.innerHTML = `
      <li><a href="#about">Profil</a></li>
      <li><a href="#skills">Compétences</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#contact">Contact</a></li>
    `
  };

  const switchNavbarColor = () => {
    window.addEventListener('scroll', function(e){
      console.log(e.target)
    })
  }

  const render = () => {
    createNavbar()
  };

  render();


  
};

export default Navbar;
