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
// MDN -- Events -- Extra properties of event objects
