const openModalButton = document.querySelectorAll(".service__design");
const backdrop = document.querySelector(".backdrop");
const secondBackDrop = document.querySelector(".backdrop_2");
const openHeroForm = document.querySelector(".js-first-form");

openHeroForm.addEventListener("click", () => {
  secondBackDrop.style.cssText = `
            opacity: 1;
            visibility: visible;
        `;
  document.body.style.overflow = "hidden";
});

secondBackDrop.addEventListener("click", (event) => {
  if (event.target.classList.contains("backdrop_2")) {
    secondBackDrop.style.cssText = `
        opacity: 0;
        visibility: hidden;
    `;
    document.body.style.overflow = "auto";
  }
});

openModalButton.forEach((elem) => {
  elem.addEventListener("click", () => {
    backdrop.style.cssText = `
            opacity: 1;
            visibility: visible;
        `;
    document.body.style.overflow = "hidden";
  });
});

backdrop.addEventListener("click", (event) => {
  if (event.target.classList.contains("backdrop")) {
    backdrop.style.cssText = `
        opacity: 0;
        visibility: hidden;
    `;
    document.body.style.overflow = "auto";
  }
});
