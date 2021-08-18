import createHeader from './makeStuff.js';

function aboutUs() {
    const about = document.createElement("div");
    about.classList.add("about");

    const aboutHeader = document.createElement("div");
    aboutHeader.classList.add("aboutHeader");
    aboutHeader.innerText = "About Us";

    const aboutText = document.createElement("div");
    aboutText.classList.add("aboutUs");
    aboutText.innerText = "The cat cafe is a cafe run primarily by cats. This cafe has been running for a 100 years ever since our founders: DD, Lala and CoCo, had run away from terrible humans. This is a cafe of cats, for cats. NO HUMAN PETS ARE ALLOWED - Fine of 50$ will be charged on breaking this rule";

    about.appendChild(addMoji());
    about.appendChild(aboutHeader);
    about.appendChild(aboutText);

    return about;
}

function hours() {
    const hours = document.createElement("div");
    hours.classList.add("hours");

    const hoursHeader = document.createElement("div");
    hoursHeader.classList.add("hoursHeader");
    hoursHeader.innerText = "Hours";

    const hoursText = document.createElement("div");
    hoursText.classList.add("hoursText");
    hoursText.innerText = "Monday : 0800 - 1600\n" +
                      "Tuesday : 0800 - 1600\n" +
                      "Wednesday : 0800- 1600\n" +
                      "Thursday : 0800 - 2000\n" +
                      "Friday : 0800 - 1800\n" +
                      "Saturday : 0800 - 2200\n" +
                      "Sunday : 0800 - 1500";

    hours.appendChild(addMoji());
    hours.appendChild(hoursHeader);
    hours.appendChild(hoursText);

    return hours;
}

function addMoji() {
    let emoji = document.createElement("div");
    emoji.classList.add("emoji");
    const imag = document.createElement("img");
    imag.classList.add("imaji");

    imag.src = 'images/catmoji.png';
    emoji.appendChild(imag);
    return emoji;
}

function loadHome() {
    const main = document.createElement("main");
    main.appendChild(aboutUs());
    main.appendChild(hours());

    const content = document.querySelector(".content");
    content.innerText = "";
    content.appendChild(createHeader());
    content.appendChild(main);
}

export {loadHome as default, addMoji};
