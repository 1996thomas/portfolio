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
    heroImage.setAttribute("alt", "bannière du site représentant un ordinateur vintage");
    hero.append(heroGradient,heroImage);
    main.append(hero);
  };

  const render = () => {
    createBanner();
  };

  render();

};

export default Hero;
