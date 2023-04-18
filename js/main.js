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

// новый калькулятор для каждого отдеально
const serviceButtonArray = document.querySelectorAll(".service__button");

serviceButtonArray.forEach((elem) => {
  elem.addEventListener("click", () => {
    serviceButtonArray.forEach((elem) => {
      elem.classList.remove("active");
    });

    elem.classList.add("active");
  });
});

const firstCalculator = document.querySelector(".js-calc-1");
const secondCalculator = document.querySelector(".js-calc-2");
const thirdCalculator = document.querySelector(".js-calc-3");
const fourthCalculator = document.querySelector(".js-calc-4");
const fifthCalculator = document.querySelector(".js-calc-5");

firstCalculator.addEventListener("click", () => {
  const checkedInput = document.querySelectorAll(".js-calc-1 input:checked");
  const sumElement = document.querySelector(".js-calc-1 .js-service-sum");
  const totalSumArray = [];
  let sum = 0;

  checkedInput.forEach((elem) => {
    totalSumArray.push(
      elem.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[0]
        .textContent
    );
  });

  totalSumArray.forEach((elem) => {
    sum += Number(elem);
  });

  sumElement.textContent = sum;
});

secondCalculator.addEventListener("click", () => {
  const checkedInput = document.querySelectorAll(".js-calc-2 input:checked");
  const sumElement = document.querySelector(".js-calc-2 .js-service-sum");
  const totalSumArray = [];
  let sum = 0;

  checkedInput.forEach((elem) => {
    totalSumArray.push(
      elem.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[0]
        .textContent
    );
  });

  totalSumArray.forEach((elem) => {
    sum += Number(elem);
  });

  sumElement.textContent = sum;
});

thirdCalculator.addEventListener("click", () => {
  const checkedInput = document.querySelectorAll(".js-calc-3 input:checked");
  const sumElement = document.querySelector(".js-calc-3 .js-service-sum");
  const totalSumArray = [];
  let sum = 0;

  checkedInput.forEach((elem) => {
    totalSumArray.push(
      elem.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[0]
        .textContent
    );
  });

  totalSumArray.forEach((elem) => {
    sum += Number(elem);
  });

  sumElement.textContent = sum;
});

fourthCalculator.addEventListener("click", () => {
  const checkedInput = document.querySelectorAll(".js-calc-4 input:checked");
  const sumElement = document.querySelector(".js-calc-4 .js-service-sum");
  const totalSumArray = [];
  let sum = 0;

  checkedInput.forEach((elem) => {
    totalSumArray.push(
      elem.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[0]
        .textContent
    );
  });

  totalSumArray.forEach((elem) => {
    sum += Number(elem);
  });

  sumElement.textContent = sum;
});

fifthCalculator.addEventListener("click", () => {
  const checkedInput = document.querySelectorAll(".js-calc-5 input:checked");
  const sumElement = document.querySelector(".js-calc-5 .js-service-sum");
  const totalSumArray = [];
  let sum = 0;

  checkedInput.forEach((elem) => {
    totalSumArray.push(
      elem.nextSibling.nextSibling.nextSibling.nextSibling.childNodes[0]
        .textContent
    );
  });

  totalSumArray.forEach((elem) => {
    sum += Number(elem);
  });

  sumElement.textContent = sum;
});
