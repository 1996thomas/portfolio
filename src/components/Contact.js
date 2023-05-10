import gps from "../assets/images/gps.png";
import email from "../assets/images/email.png";
import phone from "../assets/images/phone.png";
const Contact = () => {
  const createContact = () => {
    const section = document.createElement("section");
    const contactWrapper = document.createElement("div");
    section.classList.add("contact");
    contactWrapper.classList.add("contact__wrapper");
    const header = document.createElement("h2");

    header.textContent = "Contact";

    section.append(header,contactWrapper);
    main.append(section);

    createForm();
    createContactInformation();
  };

  const createForm = () => {
    const section = document.querySelector(".contact__wrapper");
    const form = document.createElement("form");

    form.innerHTML = `
    <div>
      <div>
        <label for="lastname">Nom * :</label>
        <input type="text" id="name" name="name" required minlength="3" maxlength="15" size="10">
      </div>
      <div>
        <label for="firstname">Prénom :</label>
        <input type="text" id="name" name="name" minlength="3" maxlength="15" size="10">
      </div>
    </div>
    <div>
      <div>
        <label for="email">E-mail *:</label>
        <input type="email" id="name" name="name" required minlength="6" maxlength="50" size="10">
      </div>
      <div>
        <label for="object">Objet *:</label>
        <input type="text" id="name" name="name" required minlength="4" maxlength="50" size="10">
      </div>
    </div>

      <label for="object">Message * :</label>
      <textarea placeholder="cette fonctionnalité n'est pas encore disponible" type="text" id="name" name="name" rows="10" required minlength="10" maxlength="500" size="10"></textarea>
      <input type="submit">
    `;

    section.append(form);
  };

  const createContactInformation = () => {
    const section = document.querySelector(".contact__wrapper");
    const div = document.createElement("div");

    div.innerHTML = `
      <a href="mailto:thomas.kanthack@gmail.com"><img src=${email}>thomas.kanthack@gmail.com</a>
      <a href="tel:0762126287"><img src=${phone}>+33 7 62 12 62 87</a>
      <a><img src=${gps}>Paris, France</a>
    `;
    section.append(div);
  };

  const render = () => {
    createContact();
  };

  render();
};

export default Contact;
