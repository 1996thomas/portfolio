import logo from "../assets/images/moipc.jpg";
let x = window.matchMedia("(max-width: 550px)")

const Navbar = () => {
  const createNavbar = () => {
    const nav = document.createElement("nav");
    const navWrapper = document.createElement("div");
    const navBrand = document.createElement("a");
    const navBrandImage = document.createElement("img");
    const navUl = document.createElement("ul");

    nav.setAttribute("id", "nav");
    nav.classList.add("colored");
    navWrapper.classList.add("nav__wrapper");
    navBrand.append(navBrandImage);
    navBrand.setAttribute("href", "");
    navBrandImage.setAttribute("src", logo);

    nav.append(navWrapper);
    navWrapper.append(navBrand, navUl);
    main.append(nav);

    navUl.innerHTML = `
    <li><a href="#about">Profil</a></li>
    <li><a href="#skills">Compétences</a></li>
    <li><a href="#portfolio">Portfolio</a></li>
    <li><a href="#contact">Contact</a></li>
    `;
    let links = document.querySelectorAll(".nav__wrapper > ul > li > a");
    for (let link of links) {
      link.classList.add("colored__link");
    }
  };

  const render = () => {
    createNavbar();
  };

  render();
};

export default Navbar;
