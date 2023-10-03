{
  const welcome = () => {
    console.log("Witam wszystkich developerów");
  }
  const onButtonClick = () => {
    const body = document.querySelector(".body");
    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains(".dark") ? "różowy" : "zielony";
  };
  
  const init = () => {
    const changeBackgroundcolorButton = document.querySelector(
      ".changeBackgroundcolorButton");
    let themeName = document.querySelector(".themeName");
    changeBackgroundcolorButton.addEventListener("click", onButtonClick)();
    welcome();
  };
  init();
   
}