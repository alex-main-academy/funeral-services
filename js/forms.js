const backDrop = document.querySelector(".backdrop");
const secondBackdrop = document.querySelector(".backdrop_2");
const thanksBlock = document.querySelector(".js-thanks");

const formsArray = document.querySelectorAll("form");
formsArray.forEach((elem) => {
  elem.addEventListener("submit", (event) => {
    event.preventDefault();

    // отправка данных со всех форм
    if (event.target.getAttribute("id") !== "form_3") {
      const formData = new FormData(elem);
      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://hook.eu1.make.com/x61dagvagnmxnkf2x5fmmppkasko3opk"
      );
      xhr.send(formData);
    }

    // отправка данных с формы где калькулятор
    if (event.target.getAttribute("id") === "form_3") {
      const formSum = document.querySelector(".js-service-sum").textContent;
      const checkboxesArray = document.querySelectorAll("input[type=checkbox]");
      const checkedCheckboxesArray = [];

      checkboxesArray.forEach((elem) => {
        if (elem.checked) {
          checkedCheckboxesArray.push(elem.nextSibling.nextSibling.innerHTML);
        }
      });

      const additionalData = {
        amount: formSum,
        services: checkedCheckboxesArray,
      };
      const formData = new FormData(elem);

      for (const key in additionalData) {
        if (additionalData.hasOwnProperty(key)) {
          formData.append(key, additionalData[key]);
        }
      }

      const xhr = new XMLHttpRequest();
      xhr.open(
        "POST",
        "https://hook.eu1.make.com/x61dagvagnmxnkf2x5fmmppkasko3opk"
      );
      xhr.send(formData);
    }

    // закрытие модалок после отправки формы
    backDrop.style.cssText = `
      opacity: 0;
      visibility: hidden;
    `;

    secondBackdrop.style.cssText = `
      opacity: 0;
      visibility: hidden;
    `;

    document.body.style.overflow = "auto";

    // окно с благодарностью
    thanksBlock.style.cssText = `
      opacity: 1;
      visibility: visible;
    `;

    setTimeout(() => {
      thanksBlock.style.cssText = `
        opacity: 0;
        visibility: hidden;
      `;
    }, 2000);

    event.target.elements.name.value = "";
    event.target.elements.phone.value = "";
  });
});
