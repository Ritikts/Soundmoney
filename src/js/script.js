let openButton = document.getElementById("open");
let closeButton = document.getElementById("close");
let menu = document.getElementById("menu");

openButton.addEventListener("click", function () {
  menu.classList.remove("hidden");
  openButton.style.display = "none";
  closeButton.classList.remove("hidden");
});
closeButton.addEventListener("click", function () {
  menu.classList.add("hidden");
  openButton.style.display = "block";
  closeButton.classList.add("hidden");
});