const openModalButton = document.querySelectorAll(".service__design");
const backdrop = document.querySelector(".backdrop");

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
