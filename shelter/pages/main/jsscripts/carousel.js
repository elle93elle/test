import pets from "../../../data/cards.js";

const BTN_LEFT = document.querySelector(".arrow-left");
const BTN_RIGHT = document.querySelector(".arrow-right");
const CAROUSEL = document.querySelector(".slider__cards");
const ITEM_LEFT = document.querySelector("#list-left");
const ITEM_RIGHT = document.querySelector("#list-right");
const ITEM_CENTER = document.querySelector("#list-center")

let uniqueNumbers = [];

function generateUniqueNumbers(max) {
    const IdNumbers = []
    while (IdNumbers.length < 3) {
        const randomNumber = Math.floor(Math.random() * max)
        if (!IdNumbers.includes(randomNumber)) {
            IdNumbers.push(randomNumber)
        }
    }
    return IdNumbers
}

function excludeNumbers() {
    let arr = [0,1,2,3,4,5,6,7]
    let res = arr.filter(n => uniqueNumbers.indexOf(n) === -1)
    return res
}

function createCard(num) {
const card = document.createElement('li');
card.classList.add('slider__card', 'card');
card.setAttribute('data-index',num);

const image = document.createElement('div');
image.classList.add('card__image');

const img = document.createElement('img');
img.setAttribute('alt', pets[num].breed);
img.setAttribute('src', pets[num].img);
image.append(img);

const name = document.createElement('div');
name.classList.add('card__name');
name.textContent = pets[num].name;

const button = document.createElement('a');
button.classList.add('card__button', 'button', 'button_light');
button.textContent='Learn more';

card.append(image, name, button)
return card
}

const createCards = () => {
    uniqueNumbers = generateUniqueNumbers(8)
    let cards = uniqueNumbers.map(number => createCard(number))
    ITEM_CENTER.append(...cards);
}

const moveLeft = () => {
    ITEM_LEFT.innerHTML = ''
    let numbers = excludeNumbers()
    let numbersIndex = generateUniqueNumbers(5)
    uniqueNumbers.length = 0
    const cards = []
    for (let i = 0; i < numbersIndex.length; i++) {
        let index = numbersIndex[i]
        cards.push(createCard(numbers[index]))
        uniqueNumbers.push(numbers[index])
    }
    ITEM_LEFT.append(...cards)
    CAROUSEL.classList.add("transition-left");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};

const moveRight = () => {
    ITEM_RIGHT.innerHTML = ''
    let numbers = excludeNumbers()
    let numbersIndex = generateUniqueNumbers(5)
    uniqueNumbers.length = 0
    const cards = []
    for (let i = 0; i < numbersIndex.length; i++) {
        let index = numbersIndex[i]
        cards.push(createCard(numbers[index]))
        uniqueNumbers.push(numbers[index])
    }
    ITEM_RIGHT.append(...cards)
    CAROUSEL.classList.add("transition-right");
    BTN_LEFT.removeEventListener("click", moveLeft);
    BTN_RIGHT.removeEventListener("click", moveRight);
};


CAROUSEL.addEventListener("animationend", (animationEvent) => {
   
    if (animationEvent.animationName === "move-left") {
        CAROUSEL.classList.remove("transition-left");
        ITEM_CENTER.innerHTML = ITEM_LEFT.innerHTML;
    } else {
        CAROUSEL.classList.remove("transition-right");
        ITEM_CENTER.innerHTML = ITEM_RIGHT.innerHTML;
    }

    BTN_LEFT.addEventListener("click", moveLeft);
    BTN_RIGHT.addEventListener("click", moveRight);
})

window.addEventListener('load', createCards)
BTN_LEFT.addEventListener('click', moveLeft)
BTN_RIGHT.addEventListener('click', moveRight)