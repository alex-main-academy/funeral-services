const openBurgerMenu = document.querySelector(".js-burger-open");
const closeBurgerMenu = document.querySelector(".js-burger-close");
const burgerMenu = document.querySelector(".burger");

openBurgerMenu.addEventListener("click", () => {
  burgerMenu.style.cssText = `
        transform: translate(0);
    `;

  document.body.style.overflow = "hidden";
});

closeBurgerMenu.addEventListener("click", () => {
  burgerMenu.style.cssText = `
        transform: translate(100%);
    `;

  document.body.style.overflow = "auto";
});

// закрытие меню после нажатия на ссылки
const burgerLinksArray = document.querySelectorAll(".burger__link");

burgerLinksArray.forEach((elem) => {
  elem.addEventListener("click", () => {
    burgerMenu.style.cssText = `
        transform: translate(100%);
    `;

    document.body.style.overflow = "auto";
  });
});
