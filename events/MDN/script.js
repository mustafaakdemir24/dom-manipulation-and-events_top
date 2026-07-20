const btn = document.querySelector("button");

const random = (number) => {
  return Math.floor(Math.random() * (number + 1));
};

const bgChange = (e) => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  e.target.style.backgroundColor = rndCol;
  console.log(e);
};

btn.addEventListener("click", bgChange);

const textBox = document.querySelector("#textBox");
const output = document.querySelector("#output");
textBox.addEventListener("keydown", (event) => {
  output.textContent = `You pressed "${event.key}."`;
});

// MDN -- Events -- Extra properties of event objects
