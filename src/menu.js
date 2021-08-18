import createHeader from './makeStuff.js';
import defaultExport, {addMoji} from './home.js';

function createMenu() {
    const div = document.createElement("div");
    div.classList.add("menu");

    div.appendChild(createMenuCard("Capuccino", "5$", "Cappuccino is one part espresso mixed with one part steamed milk, then topped with one part foamed milk","./images/cat-coffee.jpeg"));
    div.appendChild(createMenuCard("Cat Donut", "6$", "Our Donuts are made with flour, milk, yeast, and sugar, and then they are fried and dredged in sugar, topped by our exclusive créme and our founder's hair extract","./images/catDonut.jpeg"));
    div.appendChild(createMenuCard("Cat Cake", "20$", "Our black cat cake will purify you from all your sins and curses","./images/catCake.jpeg"));
    div.appendChild(createMenuCard("Catnip", "40$", "The catnip we harvested freshly from meowzieland - where out founder's led the rebellion 80 years ago, and is better than anything on the market","./images/catnip.jpeg"));
    div.appendChild(createMenuCard("Cat Cookies", "3$", "Freshly baked cookies - the original recipe passed down from our founders", "./images/catCookie.jpeg"));
    div.appendChild(createMenuCard("Cat Macarons", "4$", "Freshly baked macarons - the original recipe our founders used to conquer humans", "./images/catMacarons.jpeg"))

    return div;
}

function createMenuCard(dish, price, ingredients, imgSrc) {
    const card = document.createElement("div");
    card.classList.add("card");

    const image = document.createElement("div");
    image.classList.add("image");
    image.classList.add("cardElement");

    const img = document.createElement("img");
    img.classList.add("img");
    img.src = imgSrc;
    image.appendChild(img);

    const aboutDish = document.createElement("h3");
    aboutDish.classList.add("aboutDish");
    aboutDish.classList.add("cardElement");
    aboutDish.innerText = `${dish} - ${price}`

    const ingr = document.createElement("div");
    ingr.classList.add("ingredients");
    ingr.classList.add("cardElement");
    ingr.innerText = `${ingredients}`;

    card.appendChild(addMoji());
    card.appendChild(addMoji2());
    card.appendChild(image);
    card.appendChild(aboutDish);
    card.appendChild(ingr);

    return card;
}

function loadMenu() {
    const main = document.createElement("main");
    main.appendChild(createMenu());

    const content = document.querySelector(".content");
    content.innerText = "";
    content.appendChild(createHeader());
    content.appendChild(main);
}

function addMoji2() {
    let emoji = document.createElement("div");
    emoji.classList.add("emoji2");
    const imag = document.createElement("img");
    imag.classList.add("imaji2");

    imag.src = '../dist/images/catmoji2.png';
    emoji.appendChild(imag);
    return emoji;
}

export default loadMenu;
