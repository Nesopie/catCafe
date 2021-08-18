import createHeader from './makeStuff.js';

function createContact() {
    const div = document.createElement("div");
    div.classList.add("contact");

    div.innerText = "📞 299 792 458\n" +
                    "You can visit our cafe - as shown in the map below, for more details\n\n"
    const map = document.createElement("img");
    map.classList.add("map");
    map.src = "../dist/images/catMap.png";

    div.appendChild(map);
    return div;
}

function loadContact() {
    const main = document.createElement("main");
    main.appendChild(createContact());

    const content = document.querySelector(".content");
    content.innerText = "";
    content.appendChild(createHeader());
    content.appendChild(main);
}

export default loadContact;
