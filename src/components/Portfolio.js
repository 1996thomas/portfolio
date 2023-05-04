const Portfolio = () => {

  const createPortfolio = () => {

    const section = document.createElement('section')
    section.classList.add('portfolio')
    const header = document.createElement('h2')
    const paragraph = document.createElement('p')
    const image = document.createElement('img')

    header.textContent = "Portfolio"

    section.append(header, paragraph, image)
    main.append(section)
    
  }

  const render = () => {
    createPortfolio()
  }

  render()

}
export default Portfolio