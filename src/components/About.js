const About = () => {

  const createAbout = () =>{
    const section = document.createElement('section')
    section.classList.add('about')
    const header = document.createElement('h2')
    const paragraph1 = document.createElement('p')
    const paragraph2 = document.createElement('p')
    const paragraph3 = document.createElement('h5')

    header.textContent = "À propos de moi"
    paragraph1.innerHTML = "Depuis tout jeune je suis passioné d'informatique, j'ai toujours eu un ordinateur dans ma chambre et dès mes 14 ans je suivais déjà les tutoriels du fameux Site du Zero, devenu Open Classroom maintenant. </br> Arrivé en terminal j'ai choisi cependant de me tourner vers la cuisine, une de mes autres passions, après mes études et mes différents emplois j'ai décidé de me réorienté dans les métiers du web."

    paragraph2.innerHTML = "Je suis actuellement une formation de dévellopeur Fullstack au sein de The Hacking Project, une école en ligne basé sur l'apprentissage partagé.</br> Je vous partage ici mon portfolio qui a été réalisé entièrement en custom CSS, hébergé par mes soins sur un serveur distant, m'éloignant le plus possible des options de facilité proposées par des services comme Wordpress et surtout pour montrez mon savoir faire actuel, l'idée derrière ce portfolio c'est qu'il m'accompagne tout au long de ma carrière afin que je l'améliore au fur et à mesure."  

    paragraph3.textContent = "Bonne visite ! - Thomas"

    section.append(header, paragraph1,paragraph2,paragraph3)
    main.append(section)
  }
  const render = () => {
    createAbout()
  }

  render()
};
export default About;
