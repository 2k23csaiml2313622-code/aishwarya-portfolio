/* =========================================================
   AISHWARYA MISHRA — PORTFOLIO INTERACTIONS
   ========================================================= */

function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    if (navLinks) {
        navLinks.classList.toggle("active");
    }
}


/* =========================================================
   MOBILE NAVIGATION
   ========================================================= */

document.addEventListener("DOMContentLoaded", function () {

    const navLinks = document.querySelectorAll(".nav-links a");

    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            const menu = document.getElementById("navLinks");

            if (menu) {
                menu.classList.remove("active");
            }

        });

    });

});


/* =========================================================
   PROFILE CARD FLIP
   ========================================================= */

function flipProfile() {

    const profileCard = document.getElementById("profileCard");

    if (!profileCard) return;

    profileCard.classList.toggle("flipped");
}


/* =========================================================
   PROJECT CARD FLIP
   ========================================================= */

function flipProject(button) {

    const projectCard = button.closest(".project-card");

    if (!projectCard) return;

    projectCard.classList.toggle("flipped");
}


/* =========================================================
   ESCAPE KEY
   Close flipped cards when pressing Escape
   ========================================================= */

document.addEventListener("keydown", function (event) {

    if (event.key !== "Escape") return;

    /* Close all flipped project cards */
    document.querySelectorAll(".project-card.flipped").forEach(function (card) {

        card.classList.remove("flipped");

    });

    /* Close profile card */
    const profileCard = document.getElementById("profileCard");

    if (profileCard) {

        profileCard.classList.remove("flipped");

    }

});