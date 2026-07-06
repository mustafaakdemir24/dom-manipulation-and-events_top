const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text content";

container.appendChild(content);

const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I'am red!";
container.appendChild(paragraph);

const h3Title = document.createElement("h3");
h3Title.style["color"] = "blue";
h3Title.textContent = "I'm a blue h3!";
container.appendChild(h3Title);

const childDiv = document.createElement("div");
childDiv.style.border = "black 1px solid";
childDiv.style["background"] = "pink";

const h1Title = document.createElement("h1");
h1Title.textContent = "I'm in a div";

const childParagraph = document.createElement("p");
childParagraph.textContent = "ME TOO!";

childDiv.appendChild(h1Title);
childDiv.appendChild(childParagraph);

container.appendChild(childDiv);

// Events --> The Odin Project
