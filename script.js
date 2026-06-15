// selects the #container div
const container = document.querySelector("#container");

// selects the first child of #container => .display
// const display = container.firstElementChild;
// console.log(display); // <div class="display"></div>

// selects the .controls div
const controls = document.querySelector(".controls");

// selects the prior sibling => display
const display = controls.previousElementSibling;
console.log(display);

// Creates a new div referenced in the variable 'div'
const div = document.createElement("div");

// sets the indicated style rule to the element in the div variable
div.style.color = "blue";

// set the entire inline style
div.setAttribute("style", "color: blue; background: white");

// dot notation with kebab-cse: doesn't work as it attempts to substract color from div.style.background
// equivalent to: div.style.background - color
div.style.background - color;

// dot notation with camelCase: works, accesses the div's background-color style
div.style.backgroundColor;

// bracket notation with kebab-case: also works
div.style["background-color"];

// bracket notation with camelCase: also works
div.style["backgroundColor"];

/* 
    Editing attributes
*/
// if id exists, update it to 'theDiv', else create an id with value 'theDiv'
div.setAttribute("id", "theDiv");

// returns value of specified attribute, in this case "theDiv"
div.getAttribute("id");

// removes specified attribute
div.removeAttribute("id");

/*
    Working with classes
*/
// adds class "new" to your new div
div.classList.add("new");

// removes "new" class from div
div.classList.remove("new");

// if div doesn't have class "active" then add it, or if it does, then remove it
div.classList.toggle("active");

/*
    Adding text content
*/
// creates a text node containing "Hello World!" and inserts it in div
div.textContent = "Hello World!";

/*
    Adding HTML content
*/
// renders the HTML inside div
div.innerHTML = "<span>Hello World!</span>";
