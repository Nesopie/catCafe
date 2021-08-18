import loadHome from './home.js'
import loadContact from './contact.js'
import loadMenu from './menu.js'

function createHeader() {
    const header = document.createElement("header");
    header.classList.add("header");

    const headerText = document.createElement("h1");
    headerText.innerText = "Cat Cafe";

    header.appendChild(headerText);
    header.appendChild(createNav());

    return header;

}

function createNav() {
    const nav = document.createElement("nav");
    nav.classList.add("nav");

    const home = document.createElement("button");
    home.classList.add("navButton");
    home.textContent = "Home";
    home.addEventListener("click", () => {
        loadHome();
    });

    const menu = document.createElement("button");
    menu.classList.add("navButton");
    menu.textContent = "Menu";
    menu.addEventListener("click", () => {
        loadMenu();
    })

    const contact = document.createElement("button");
    contact.classList.add("navButton");
    contact.textContent = "Contact Us";
    contact.addEventListener("click", () => {
        loadContact();
    })

    nav.appendChild(home);
    nav.appendChild(menu);
    nav.appendChild(contact);

    return nav;
}

export default createHeader;
