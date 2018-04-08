const content = document.querySelector("#content");

const pizzaImage = document.createElement("img");
pizzaImage.src = "assets/images/pizza.jpeg";
content.appendChild(pizzaImage);

const header = document.createElement("h1");
header.textContent = "We're so good.";
content.appendChild(header);

const paragraph = document.createElement("p");
paragraph.textContent = "Oh man. Come eat here. So good. Much delicious.";
content.appendChild(paragraph);

const nav = document.createElement("ul");
const menu = document.createElement("li");
menu.textContent = "Menu";
menu.classList.add("menu", "current-tab");
const contact = document.createElement("li");
contact.textContent = "Contact";
contact.classList.add("contact");
nav.appendChild(menu);
nav.appendChild(contact);
content.appendChild(nav);

const tab = document.createElement('div');
tab.textContent = "pizza";
tab.classList.add("tab");
content.appendChild(tab);
