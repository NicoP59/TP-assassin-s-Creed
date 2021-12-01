const message = "Thank you for fight or die.";

document
  .getElementById("contact_form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert(message);
  });

//   ************************dark mode

let theme_toggler = document.querySelector("#form_button");

let count = 1;
theme_toggler.addEventListener("click", function () {
  document.body.classList.toggle("assassin_mode");
  count++;
  if (count % 2 === 0) {
    document.getElementById("logo-ac").src = "img/drapeau-usa.png";
    document.body.style.backgroundImage = "url('img/fond_american.jpg')";
  } else {
    document.getElementById("logo-ac").src = "img/logo.png";
    document.body.style.backgroundImage = "url('img/war.jpg')";
  }
});
