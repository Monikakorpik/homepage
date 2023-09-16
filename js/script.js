let changeBackgroundcolorButton = document.querySelector(
  ".changeBackgroundcolorButton");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");
changeBackgroundcolorButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeName.innerText = body.classList.contains(".dark") ? "różowy" : "zielony";
});

function double(numer){
  return number *2;
}
let myNumber =5;

console.log(double(myNumber));
console.log(double(10));
