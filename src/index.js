import "./less/index.less";

// Your code goes here!

//mouseover
const mainNavigation = document.querySelector(".main-navigation");

mainNavigation.addEventListener("mouseover", (e) => {
  mainNavigation.style.backgroundColor = "blue";
});

//keydown
//add a keydown on escape key event listener to the h2 element
const h2 = document.querySelector("h2");
h2.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    h2.style.color = "red";
    console.log("sldfjdslkf");
  }
});

//wheel
//add a wheel event listener to the image element to change the image when the wheel is scrolled
const image = document.querySelector("img");
image.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    image.src =
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
  } else {
    image.src =
      "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60";
  }
});

//load
//add a load event listener to the window to display a success message when the page has loaded
window.addEventListener("load", () => {
  console.log("page loaded");
});

//focus

//resize

//scroll

//select

//dblclick

//drag/drop
