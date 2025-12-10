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
    const box = document.getElementById("surpriseBox");
    const musicBtn = document.getElementById("musicBtn");
    const bgMusic = document.getElementById("bgMusic");

    if (btn) {
        btn.addEventListener("click", () => {
            window.location.href = "page3.html";
        });
    }


    // Music autoplay + rotation for ALL PAGES
    bgMusic.play().then(() => {
        musicBtn.classList.add("playing");
    }).catch(() => {
        musicBtn.addEventListener("click", () => {
            bgMusic.play();
            musicBtn.classList.add("playing");
        });
    });

    // Snow only on page 2
    const snowContainer = document.getElementById("snow");
    if (snowContainer) {
        function createSnowflake() {
            const snowflake = document.createElement("div");
            snowflake.classList.add("snowflake");
            snowflake.textContent = "❄";
            snowflake.style.left = Math.random() * window.innerWidth + "px";
            snowflake.style.fontSize = (Math.random() * 24 + 12) + "px";
            snowflake.style.animationDuration = (Math.random() * 5 + 5) + "s";
            snowflake.style.opacity = Math.random();
            snowContainer.appendChild(snowflake);

            setTimeout(() => { snowflake.remove(); }, 10000);
        }
        setInterval(createSnowflake, 200);
    }

});


