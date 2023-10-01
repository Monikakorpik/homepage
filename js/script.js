{
  const welcome = () => {
    console.log("Witam wszystkich developerów");
  }
  const onButtonClick = () => {
    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains(".dark") ? "różowy" : "zielony";
  };
  welcome();
  let  changeBackgroundcolorButton = document.querySelector(
    ".changeBackgroundcolorButton");
  let body = document.querySelector(".body");
  let themeName = document.querySelector(".themeName");
  changeBackgroundcolorButton.addEventListener("click", onButtonClick)();
   
}