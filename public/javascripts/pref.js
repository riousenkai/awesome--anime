const submitButton = document.querySelector(".submit-genre");
const prefSelects = document.querySelectorAll(".pref");
let num = 0;

prefSelects.forEach((ele) => {
  let isTrue = false;

  ele.addEventListener("click", () => {
    if (!isTrue) {
      isTrue = true;
      num++;
    } else {
      isTrue = false;
      num--;
    }
    if (num > 0) submitButton.classList.remove("display-none");
    else submitButton.classList.add("display-none");
  });
});
