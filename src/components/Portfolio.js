


import { portfolioHeader, portfolioParagraph, portfolioLink,galleryImage1, galleryImage2} from '../assets/textData'



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

  const createGallery = (galleryImage, headerText, paragraphText, link) =>{
    const section = document.querySelector('.portfolio')
    const sectionWrapper = document.createElement('div')
    const grid = document.createElement('div')
    sectionWrapper.classList.add('section__wrapper')
    grid.classList.add('gallery')

    for (let i = 0; i < 4; i++) {
      const cell = document.createElement('div')
      const cellContentLink = document.createElement('a')
      const cellContent = document.createElement('img')
      cellContentLink.setAttribute('href', galleryImage[i] )
      cellContentLink.setAttribute('target', '_blank' )
      cellContent.setAttribute('src', galleryImage[i] )
      cellContent.setAttribute('alt', `exemple du projet ${headerText} ` )
      cellContentLink.append(cellContent)
      cell.append(cellContentLink)
      grid.append(cell)
      
    }
    const textSection = document.createElement('div')
    textSection.classList.add('text-section')
    const header = document.createElement('h3')
    const paragraph = document.createElement('p')

    header.textContent = headerText
    paragraph.textContent = paragraphText



    textSection.append(header, paragraph)

    if(link !== ""){
      const websiteLink = document.createElement('a')
      websiteLink.textContent = "Visiter le site"
      websiteLink.setAttribute('href', link)
      websiteLink.setAttribute('target', 'blank')
      textSection.append(websiteLink)
    }

    sectionWrapper.append(grid, textSection)
    section.append(sectionWrapper)

  }

  const render = () => {
    createPortfolio()
    createGallery(galleryImage1, portfolioHeader[0], portfolioParagraph[0], portfolioLink[0])
    createGallery(galleryImage2, portfolioHeader[1], portfolioParagraph[1], portfolioLink[1])
  }

  render()

}
export default Portfolio