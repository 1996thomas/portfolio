
import image1 from '../assets/images/1.png'
import image2 from '../assets/images/6.png'
import image3 from '../assets/images/3.png'
import image4 from '../assets/images/4.png'

const galleryImage1 = [image1,image2,image3,image4]

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

  const createGallery = (galleryImage) =>{
    const section = document.querySelector('.portfolio')
    const sectionWrapper = document.createElement('div')
    const grid = document.createElement('div')
    sectionWrapper.classList.add('section__wrapper')
    grid.classList.add('gallery')

    for (let i = 0; i < 4; i++) {
      const cell = document.createElement('div')
      const cellContent = document.createElement('img')
      cellContent.setAttribute('src', galleryImage[i] )
      cell.append(cellContent)
      grid.append(cell)
      
    }
    const textSection = document.createElement('div')
    textSection.classList.add('text-section')
    const header = document.createElement('h3')
    const paragraph = document.createElement('p')

    header.textContent = "Cookin Project"
    paragraph.textContent = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."


    textSection.append(header, paragraph)
    sectionWrapper.append(grid, textSection)
    section.append(sectionWrapper)

  }

  const render = () => {
    createPortfolio()
    createGallery(galleryImage1)
    createGallery(galleryImage1)
  }

  render()

}
export default Portfolio