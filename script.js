document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("surpriseBtn");
  const box = document.getElementById("surpriseBox");

  btn.addEventListener("click", () => {
    box.classList.toggle("hidden");
  });

});
