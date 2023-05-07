import banner from "../assets/images/banner.jpg";
console.log();
const Hero = () => {
  const createBanner = () => {
    const hero = document.createElement("div");
    hero.setAttribute('id','hero')
    const heroImage = document.createElement("img");
    const heroGradient = document.createElement("div")
    hero.classList.add('hero')
    heroImage.setAttribute("src", banner);
    heroImage.setAttribute("alt", "banner of the site, this is the photo of a computer");
    hero.append(heroGradient,heroImage);
    main.append(hero);
  };

  const render = () => {
    createBanner();
  };

  render();

};

export default Hero;
