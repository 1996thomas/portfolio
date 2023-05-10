import { skillImgArr } from '../assets/textData';
import { skillTitleArr, skillParagraphArr} from '../assets/textData';

const Skills = () => {
  const createSkills = () => {
    const section = document.createElement('section')
    section.classList.add('skills')
    const skillsWrapper = document.createElement('div')
    skillsWrapper.classList.add('skills__wrapper')
    const header = document.createElement('h2')

    header.textContent = "Compétences"

    for (let i = 0; i < 6; i++) {
      let skill = document.createElement('div')
      let skillImg = document.createElement('img')
      let skillTitle = document.createElement('h4')
      skill.classList.add('skill')

      skillImg.setAttribute('src', skillImgArr[i])
      skillImg.setAttribute('alt', `Icône de ${skillTitleArr[i]}`)
      skillTitle.textContent = skillTitleArr[i]

      skill.append(skillImg,skillTitle)
      skillsWrapper.appendChild(skill)

      
    }
    
    skillsWrapper.append()
    section.append(header, skillsWrapper)
    main.append(section)
  };

  const render = () => {
    createSkills();
  };

  render();
};

export default Skills;
