document.addEventListener("DOMContentLoaded", () => {
    // Animasi Loading
    setTimeout(() => {
        const loader = document.querySelector(".loader");
        if (loader) {
            loader.style.opacity = "0";
            setTimeout(() => {
                loader.style.display = "none";
            }, 500);
        }
    }, 500);
});
document.addEventListener("DOMContentLoaded", function () {
    const text = "Klik tombol dibawah....";
    let i = 0;
    function typeEffect() {
        if (i < text.length) {
            document.getElementById("typing-text").textContent = text.substring(0, i + 1);
            i++;
            setTimeout(typeEffect, 100);
        }
    }
    typeEffect();
});
// Toggle menu hamburger
function toggleMenu() {
    const nav = document.getElementById("navMenu");
    if (nav) {
        nav.classList.toggle("show");
    }
}

// Animasi Scroll
const sections = document.querySelectorAll("section");

const revealSection = () => {
    sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 100) {
            section.classList.add("show");
        }
    });
};

window.addEventListener("scroll", revealSection);
revealSection();