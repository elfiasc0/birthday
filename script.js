function goToPage2() {
    window.location.href = "page2.html";
}

function typeText(text) {
    const container = document.getElementById("typedText");
    let i = 0;

    function type() {
        if (i < text.length) {
            container.textContent += text[i];
            i++;
            setTimeout(type, 120);
        } else {
            // ✅ typing finished → wait 5 seconds → hide
            setTimeout(() => {
                container.style.opacity = "0";
            }, 3000);
        }
    }

    type();
}


document.addEventListener("DOMContentLoaded", () => {

    const btn = document.getElementById("surpriseBtn");
    const dimOverlay = document.getElementById("dimOverlay");
    const musicBtn = document.getElementById("musicBtn");
    const bgMusic = document.getElementById("bgMusic");

    // Music autoplay
    bgMusic.play().then(() => {
        musicBtn.classList.add("playing");
    }).catch(() => {
        musicBtn.addEventListener("click", () => {
            bgMusic.play();
            musicBtn.classList.add("playing");
        });
    });

    // Snow...
    const snowContainer = document.getElementById("snow");
    if (snowContainer) {
        function createSnowflake() {
            const s = document.createElement("div");
            s.classList.add("snowflake");
            s.textContent = "❄";
            s.style.left = Math.random() * window.innerWidth + "px";
            s.style.fontSize = (Math.random() * 24 + 12) + "px";
            s.style.animationDuration = (Math.random() * 5 + 5) + "s";
            s.style.opacity = Math.random();
            snowContainer.appendChild(s);
            setTimeout(() => s.remove(), 10000);
        }
        setInterval(createSnowflake, 100);
    }

    // 🎁 Working dimming transition
    if (btn) {
        btn.addEventListener("click", () => {
            dimOverlay.classList.add("active");
            setTimeout(() => {
                window.location.href = "page3.html";
            }, 1200);
        });
    }

});



