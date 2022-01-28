const changeText = document.querySelector(".text");
const textButton = document.querySelector(".next");
const profileThings = document.querySelector(".profile");
const linkedThings = document.querySelector(".linked");
const home = document.querySelector(".home");

let clicked = 0;

textButton.addEventListener("click", (e) => {

  clicked++;

  if (clicked === 1) {
    changeText.innerHTML =
      "Oh no! You've stumbled across some mystery profiles. Maybe follow them?";
    profileThings.classList.toggle("display-none");
  }

  if (clicked === 2) {
    changeText.innerHTML =
      "More links have appeared! Hurry and follow them too.";
    linkedThings.classList.toggle("display-none");
  }
  if (clicked === 3) {
    changeText.innerHTML = "The End.";
    home.classList.toggle("display-none");
  }
  if (clicked === 4) {
    window.location.href = "/";
  }
});
