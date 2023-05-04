const Skills = () => {
  const createSkills = () => {
    const section = document.createElement('section')
    section.classList.add('skills')
    const header = document.createElement('h2')
    const paragraph = document.createElement('p')
    const image = document.createElement('img')

    header.textContent = "Compétences"

    section.append(header, paragraph, image)
    main.append(section)
  };

  const render = () => {
    createSkills();
  };

  render();
};

export default Skills;
