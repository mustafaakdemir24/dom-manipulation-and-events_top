const highlight = (elem, callback) => {
  elem.style.backgroundColor = "yellow";

  if (callback && typeof callback === "function") {
    callback(elem);
  }
};

let note = document.querySelector(".note");
const addBorders = (elem) => {
  elem.style.border = "solid 1px red";
};

highlight(note, addBorders);
