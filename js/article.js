const openButtonFirst = document.querySelector(".js-read-first");
const openButtonSecond = document.querySelector(".js-read-second");
const articleFirst = document.querySelector(".article__first");
const articleSecond = document.querySelector(".article__second");
const closeArticle = document.querySelectorAll(".js-close-article");

openButtonFirst.addEventListener("click", () => {
  articleFirst.style.cssText = `
        opacity: 1;
        visibility: visible;
    `;
  document.body.style.overflow = "hidden";
});

openButtonSecond.addEventListener("click", () => {
  articleSecond.style.cssText = `
        opacity: 1;
        visibility: visible;
    `;
  document.body.style.overflow = "hidden";
});

closeArticle.forEach((elem) => {
  elem.addEventListener("click", () => {
    articleFirst.style.cssText = `
              opacity: 0;
              visibility: hidden;
          `;

    articleSecond.style.cssText = `
              opacity: 0;
              visibility: hidden;
          `;

    document.body.style.overflow = "auto";
  });
});
