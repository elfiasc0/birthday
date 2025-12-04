document.addEventListener("DOMContentLoaded", () => {

  const btn = document.getElementById("surpriseBtn");
  const box = document.getElementById("surpriseBox");
  const musicBtn = document.getElementById("musicBtn");
  const bgMusic = document.getElementById("bgMusic");

  // Surprise button
  btn.addEventListener("click", () => {
    box.classList.toggle("hidden");
  });

  // Try autoplay first
  bgMusic.play().then(() => {
    musicBtn.classList.add("playing");
  }).catch(() => {
    musicBtn.addEventListener("click", () => {
      bgMusic.play();
      musicBtn.classList.add("playing");
    });
  });

  // Snow animation
  const snowContainer = document.getElementById("snow");

  function createSnowflake() {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");
    snowflake.textContent = "❄";
    snowflake.style.left = Math.random() * window.innerWidth + "px";
    snowflake.style.fontSize = (Math.random() * 24 + 12) + "px";
    snowflake.style.animationDuration = (Math.random() * 5 + 5) + "s";
    snowflake.style.opacity = Math.random();
    snowContainer.appendChild(snowflake);

    setTimeout(() => {
      snowflake.remove();
    }, 10000);
  }

  setInterval(createSnowflake, 200);

});
