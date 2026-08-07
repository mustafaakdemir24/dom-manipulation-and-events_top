let btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  alert("Mouse Clicked!");
});

let clickEvent = new Event("click");
btn.dispatchEvent(clickEvent);
