{
  const welcome = () => {
    console.log("Witam wszystkich developerów");
  }
  const onButtonClick = () => {
    const body = document.querySelector(".body");
    body.classList.toggle("dark");
    themeName.innerText = body.classList.contains(".dark") ? "różowy" : "zielony";
    let themeName = document.querySelector(".themeName");
  };
  
  const init = () => {
    const changeBackgroundcolorButton = document.querySelector(
      ".changeBackgroundcolorButton");
    changeBackgroundcolorButton.addEventListener("click", onButtonClick);
    welcome();
  };
  init();
   
}
