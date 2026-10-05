/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menu-btn");
const navbar = document.getElementById("navbar");

if (menuBtn && navbar) {

    menuBtn.addEventListener("click", () => {

        navbar.classList.toggle("active");

        const icon = menuBtn.querySelector("i");

        if (navbar.classList.contains("active")) {

            icon.classList.remove("bx-menu");
            icon.classList.add("bx-x");

        } else {

            icon.classList.remove("bx-x");
            icon.classList.add("bx-menu");

        }

    });


    /* Close menu after clicking */

    navbar.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            navbar.classList.remove("active");

            const icon = menuBtn.querySelector("i");

            icon.classList.remove("bx-x");
            icon.classList.add("bx-menu");

        });

    });

}


/* =========================================================
   TYPED TEXT
========================================================= */

if (
    typeof Typed !== "undefined" &&
    document.querySelector(".typed-role")
) {

    new Typed(".typed-role", {

        strings: [
            "Frontend Developer",
            "Backend Developer",
            "Web Developer",
            "Python Developer",
            "Django Developer"
        ],

        typeSpeed: 70,

        backSpeed: 45,

        backDelay: 1400,

        loop: true

    });

}


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(
    ".navbar a[href^='#']"
);

function updateActiveNav() {

    let current = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 160;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            current = section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {

            link.classList.add("active");

        }

    });

}

window.addEventListener(
    "scroll",
    updateActiveNav
);


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".about-wrapper, .skills-list, .skill-image-box, .project-card, .hire-card, .role-card, .about-info-card"
);

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },

        {
            threshold: 0.12
        }

    );


revealElements.forEach(element => {

    element.classList.add("reveal");

    revealObserver.observe(element);

});


/* =========================================================
   SCROLL TO TOP
========================================================= */

const topBtn = document.querySelector(".top-btn");

if (topBtn) {

    topBtn.addEventListener("click", event => {

        if (
            topBtn.getAttribute("href") === "#"
        ) {

            event.preventDefault();

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }

    });

}