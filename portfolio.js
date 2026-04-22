function startSlider(sliderId) {
    const slider = document.getElementById(sliderId);
    if (!slider) return;

    const images = slider.querySelectorAll("img");
    if (images.length === 0) return;

    let index = 0;

    images.forEach((img, i) => {
        img.classList.toggle("active", i === 0);
    });

    setInterval(() => {
        images[index].classList.remove("active");
        index = (index + 1) % images.length;
        images[index].classList.add("active");
    }, 2500);
}

function revealOnScroll() {
    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const parent = entry.target.parentElement;
                const children = parent.querySelectorAll(".reveal");

                children.forEach((el, index) => {
                    setTimeout(() => {
                        el.classList.add("show");
                    }, index * 150);
                });

                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });

    elements.forEach(el => observer.observe(el));
}

function setupMobileMenu() {
    const menuBtn = document.querySelector(".menu-btn");
    const navLinks = document.querySelector(".nav-links");

    if (!menuBtn || !navLinks) return;

    menuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("open");
    });

    const navItems = navLinks.querySelectorAll("a");
    navItems.forEach(link => {
        link.addEventListener("click", () => {
            navLinks.classList.remove("open");
        });
    });

    window.addEventListener("resize", () => {
        if (window.innerWidth > 760) {
            navLinks.classList.remove("open");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    startSlider("slider1");
    startSlider("slider2");
    startSlider("slider3");
    revealOnScroll();
    setupMobileMenu();
});