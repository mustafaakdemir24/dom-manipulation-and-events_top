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
  button.addEventListener("click", () => {
    alert(`${button.textContent} has been clicked!`);
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
// Understanding callbacks --> The Odin Project
