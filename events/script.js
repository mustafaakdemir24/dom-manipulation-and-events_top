// const btn = document.querySelector("#btn");
// btn.onclick = () => alert("Hellooo World!!");
// -----javascript.info-----
let sum = (a, b) => a + b;

let double = (n) => n * 2;

// let age = prompt("Whet is your age?", 18);

// let welcome = age < 18 ? () => alert("Hello!") : () => alert("Greetings!");

// welcome();
// -----javascript.info-----

// const btn = document.querySelector("#btn");
// btn.addEventListener("click", () => {
//   alert("Hello World!!!!");
// });

// Google A.I.'s solution for multiple #btn HTML element
const buttons = document.querySelectorAll("#btn");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // alert(`${button.textContent} has been clicked!`);
    e.target.style.background = "blue";
  });
});

// Method 1
const alertFunction = () => {
  alert("YAY! YOU DID IT!");
};

// Method 2
const btn1 = document.querySelector("#btn1");

// btn1.onclick = alertFunction;

// Method 3
btn1.addEventListener("click", alertFunction);

btn1.addEventListener("click", function (e) {
  console.log(e);
});

btn1.addEventListener("click", (e) => {
  e.target.style.background = "blue";
});
// buttons is a node list. It looks and acts much like an array.
const buttons1 = document.querySelectorAll("button");

// we use the .forEach method to iterate through each button
buttons1.forEach((button) => {
  // and for each one we add a 'click' listener
  button.addEventListener("click", () => {
    alert(button.id);
  });
});

// Assignment -- Keyboard events - How do you remove an element from the DOM? -- The Odin Project
