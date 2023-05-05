import "./style/index.scss";
import routes from "./routes";

const callRoute = () => {
  const { hash } = window.location;
  const pathParts = hash.substring(1).split("/");

  const pageName = pathParts[0];
  const pageArgument = pathParts[1] || "";
  const pageFunction = routes[pageName];

  if (pageFunction !== undefined) {
    pageFunction(pageArgument);
  }
};

const nav = document.querySelectorAll(".hero");

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("active");
    } else {
      entry.target.classList.remove("active");
    }
  });
});



// Looping through the bars and adding them as targets of the observer
Array.prototype.forEach.call(nav, (el) => {
  observer.observe(el);
});

window.addEventListener("hashchange", () => callRoute());
window.addEventListener("DOMContentLoaded", () => callRoute());
