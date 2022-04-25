import pets from "../../../data/cards.js";

const popupMask = document.querySelector(".popup-mask");
const popup__button = document.querySelector(".popup__button");
const popup__modal = document.querySelector(".popup-modal");
const body = document.querySelector("body");
const listCenter = document.querySelector("#list-center");

function createModal(index) {
  const result = [];

  const img = document.createElement("img");
  img.setAttribute("src", pets[index].img);
  result.push(img);

  const content = document.createElement("div");
  content.classList.add("popup-content");
  content.innerHTML = `
    <h3>${pets[index].name}</h3>
    <h4>${pets[index].type} - ${pets[index].breed}</h4>
    <p class='popap__description'>${pets[index].description}</p>
   <p class='list__item'><span>Age: </span>${pets[index].age}</p>
   <p class='list__item'><span>Inoculations: </span>${pets[index].inoculations}</p>
   <p class='list__item'><span>Diseases: </span>${pets[index].diseases}</p>
   <p class='list__item'><span>Parasite: </span>${pets[index].parasites}</p>
    `;
  result.push(content);
  return result;
}

function callPopap(event) {
  const index = event.target.dataset.index;
  const modalContent = createModal(index);
  popup__modal.append(...modalContent);
  popupMask.classList.add("active");
  body.classList.add("active");
}

function closePopap(event) {
  if (
    event.target.classList.contains("popup__button") ||
    event.target.classList.contains("popup-mask")
  ) {
    popupMask.classList.remove("active");
    body.classList.remove("active");
    popup__modal.innerHTML = '<button class="popup__button"></button>';
  }
}

listCenter.addEventListener("click", callPopap);
popup__button.addEventListener("click", closePopap);
popupMask.addEventListener("click", closePopap);
