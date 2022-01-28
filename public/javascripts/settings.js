counter = () => {
  let targ = document.getElementById("editDesc");
  let targ2 = document.getElementById("editProfPic");

  if (targ.value.length > 254) {
    event.preventDefault();
    targ.value = "";
    return window.alert(
      "You cannot write a description longer than 255 characters!"
    );
  }

  if (targ2.value.length > 254) {
    event.preventDefault();
    targ2.value = "";
    return window.alert(
      "You cannot write a description longer than 255 characters!"
    );
  }
};
