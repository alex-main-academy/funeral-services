const serviceButtonArray = document.querySelectorAll(".service__button");

serviceButtonArray.forEach((elem) => {
  elem.addEventListener("click", () => {
    serviceButtonArray.forEach((elem) => {
      elem.classList.remove("active");
    });

    elem.classList.add("active");
  });
});

// calculator
const totalSumArray = document.querySelectorAll(".js-service-sum");
const calcAgreeArray = document.querySelectorAll(".calc__agree");
let allSumArray = [];
let sum = 0;

calcAgreeArray.forEach((elem) => {
  elem.addEventListener("click", () => {
    if (elem.checked) {
      allSumArray.push(
        elem.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[0]
          .textContent
      );
    } else {
      const idx = allSumArray.indexOf(
        elem.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[0]
          .textContent
      );
      allSumArray.splice(idx, 1);
    }

    sum = 0;
    allSumArray.forEach((elem) => {
      sum += Number(elem);
    });

    totalSumArray.forEach((elem) => {
      elem.textContent = sum;
    });
  });
});

// scroll to top button
const scrollTopButton = document.querySelector(".js-scroll-top");
const header = document.querySelector(".header");
scrollTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  if (scrollPosition > 10 && window.innerWidth < 1201) {
    header.style.paddingTop = "10px";
    header.style.backgroundColor = "#242451";
  } else if (scrollPosition < 10 && window.innerWidth < 1201) {
    header.style.paddingTop = "32px";
    header.style.backgroundColor = "transparent";
  }

  if (scrollPosition > 800) {
    scrollTopButton.style.cssText = `
      opacity: 1;
      visibility: visible;
    `;
  } else {
    scrollTopButton.style.cssText = `
      opacity: 0;
      visibility: hidden;
    `;
  }
});

// behavior smooth for anchors
const anchors = document.querySelectorAll('a[href*="#"]');

anchors.forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const blockID = anchor.getAttribute("href").substr(1);
    const block = document.getElementById(blockID);
    const blockTop = block.getBoundingClientRect().top;
    const currentYOffset = window.pageYOffset;
    const targetYOffset = currentYOffset + blockTop;
    window.scrollTo({
      top: targetYOffset,
      behavior: "smooth",
    });
  });
});
