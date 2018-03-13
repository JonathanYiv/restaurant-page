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
