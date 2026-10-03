/*=========================================
    SM PORTFOLIO V3
=========================================*/

// ======================================
// LOADER
// ======================================

const loader = document.querySelector(".loader");
const progress = document.querySelector(".loader-progress");

let width = 0;

const loading = setInterval(() => {

    width += 2;

    progress.style.width = width + "%";

    if (width >= 100) {

        clearInterval(loading);

        setTimeout(() => {

            loader.style.opacity = "0";
            loader.style.visibility = "hidden";

        }, 300);

    }

}, 25);

// ======================================
// MOBILE MENU
// ======================================

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", () => {

    nav.classList.toggle("show-menu");

});

// ======================================
// CLOSE MENU AFTER CLICK
// ======================================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("show-menu");

    });

});

// ======================================
// HEADER SCROLL EFFECT
// ======================================

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.style.top = "10px";
        header.style.boxShadow = "0 20px 40px rgba(0,0,0,.35)";

    } else {

        header.style.top = "20px";
        header.style.boxShadow = "0 15px 40px rgba(0,0,0,.25)";

    }

});

// ======================================
// SMOOTH SCROLL
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({

                behavior:"smooth"

            });

        }

    });

});

/*=========================================
    SCROLL REVEAL
=========================================*/

const revealElements = document.querySelectorAll(
    ".stat-card, .about, .skill-card, .project-card, .game-card, .contact-card"
);

const revealOnScroll = () => {

    const trigger = window.innerHeight * 0.85;

    revealElements.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        if (top < trigger) {

            element.classList.add("active");

        }

    });

};

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


/*=========================================
    ACTIVE NAVIGATION
=========================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});


/*=========================================
    STATS COUNTER
=========================================*/

const stats = document.querySelectorAll(".stat-card h2");

let counterStarted = false;

function runCounter() {

    if (counterStarted) return;

    const statsSection = document.querySelector(".stats");

    if (!statsSection) return;

    const top = statsSection.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        counterStarted = true;

        stats.forEach((stat) => {

            const text = stat.innerText;

            const number = parseInt(text);

            if (isNaN(number)) return;

            let count = 0;

            const speed = Math.max(15, 1500 / number);

            const update = () => {

                count++;

                stat.innerText = count + "+";

                if (count < number) {

                    setTimeout(update, speed);

                } else {

                    if (text.includes("%")) {

                        stat.innerText = number + "%";

                    } else if (text.includes("+")) {

                        stat.innerText = number + "+";

                    } else {

                        stat.innerText = text;

                    }

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", runCounter);
runCounter();


/*=========================================
    PARALLAX BACKGROUND
=========================================*/

document.addEventListener("mousemove", (e) => {

    const circles = document.querySelectorAll(".circle");

    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;

    circles.forEach((circle, index) => {

        const move = (index + 1) * 8;

        circle.style.transform =
            `translate(${x * move}px, ${y * move}px)`;

    });

});


/*=========================================
    CURRENT YEAR
=========================================*/

const footerText = document.querySelector("footer p");

if (footerText) {

    footerText.innerHTML =
        `© ${new Date().getFullYear()} SM Portfolio. Designed & Developed by SM.`;

}

