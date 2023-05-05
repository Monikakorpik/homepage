let changeBackgroundcolorButton = document.querySelector(
  ".changeBackgroundcolorButton");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");
changeBackgroundcolorButton.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeName.innerText = body.classList.contains(".dark") ? "różowy" : "zielony";
});