const body = document.body;
const cocas = document.getElementById("paper-cocas");
const nav = document.getElementById("nav-cocas");

const pastPage = document.getElementById("page-past");
const languagePage = document.getElementById("page-language");
const tastePage = document.getElementById("page-taste");
const healthPage = document.getElementById("page-health");
const futurePage = document.getElementById("page-future");
const profilePage = document.getElementById("page-profile");
const nowPage = document.getElementById("page-now");
const contactPage = document.getElementById("page-contact");

const pastLink = document.getElementById("past");
const languageLink = document.getElementById("language");
const tasteLink = document.getElementById("taste");
const healthLink = document.getElementById("health");
const futureLink = document.getElementById("future");
const profileLink = document.getElementById("profile");
const nowLink = document.getElementById("now");
const contactLink = document.getElementById("contact");

function toggleCocasState() {
    // switch between closed and two types of open
    if (cocas.classList.contains("roll3-h2v") || cocas.classList.contains("roll3-c2v")) { // cocas open vertical sequence -> horizontal
        cocas.classList.remove("roll3-h2v");
        cocas.classList.remove("roll3-c2v");

        cocas.classList.add("roll3-v2h");    // start roll
        console.log("Cocas State: Opening Horizontally");

    } else { // cocas closed or open horizontal sequence -> vertical
        if (cocas.classList.contains("closed-state")) { // starting closed
            cocas.classList.remove("closed-state");
            cocas.classList.add("roll3-c2v")
        }
        else { // starting horizontal
            cocas.classList.remove("roll3-v2h");
            cocas.classList.add("roll3-h2v")
        }
        console.log("Cocas State: Rolling Vertically");
    }
}

function toggleDebug() {
    if (cocas.classList.contains("debug-spin")) {
        cocas.classList.remove("debug-spin");
    }
    else {
        cocas.classList.add("debug-spin");
    }
}

let isAnimating = false;

if (cocas) {
    body.addEventListener("click", () => {
        if (isAnimating) return; /* prevent state change during animations */
        isAnimating = true;

        toggleCocasState();
    
        setTimeout(() => {  /* wait 3s asynchronously (in the background) */
            isAnimating = false;
        }, 3000);
    });

    cocas.addEventListener("click", (event) => {
        event.stopPropagation(); /* prevent body click event when clicking on cocas */
    });
    nav.addEventListener("click", (event) => {
        event.stopPropagation(); /* prevent body click event when clicking on cocas */
    });

    pastLink.addEventListener("click", () => {  // toggle hidden class to show page
        event.stopPropagation();
        pastPage.classList.remove("hidden");
    });
    pastPage.addEventListener("click", () => { // toggle hidden class to hide page when clicking on it
        event.stopPropagation();
        pastPage.classList.add("hidden");
    });

    languageLink.addEventListener("click", () => {
        event.stopPropagation();
        languagePage.classList.remove("hidden");
    });
    languagePage.addEventListener("click", () => {
        event.stopPropagation();
        languagePage.classList.add("hidden");
    });

    tasteLink.addEventListener("click", () => {
        event.stopPropagation();
        tastePage.classList.remove("hidden");
    });
    tastePage.addEventListener("click", () => {
        event.stopPropagation();
        tastePage.classList.add("hidden");
    });

    healthLink.addEventListener("click", () => {
        event.stopPropagation();
        healthPage.classList.remove("hidden");
    });
    healthPage.addEventListener("click", () => {
        event.stopPropagation();
        healthPage.classList.add("hidden");
    });

    futureLink.addEventListener("click", () => {
        event.stopPropagation();
        futurePage.classList.remove("hidden");
    });
    futurePage.addEventListener("click", () => {
        event.stopPropagation();
        futurePage.classList.add("hidden");
    });

    profileLink.addEventListener("click", () => {
        event.stopPropagation();
        profilePage.classList.remove("hidden");
    });
    profilePage.addEventListener("click", () => {
        event.stopPropagation();
        profilePage.classList.add("hidden");
    });

    nowLink.addEventListener("click", () => {
        event.stopPropagation();
        nowPage.classList.remove("hidden");
    });
    nowPage.addEventListener("click", () => {
        event.stopPropagation();
        nowPage.classList.add("hidden");
    });

    contactLink.addEventListener("click", () => {
        event.stopPropagation();
        contactPage.classList.remove("hidden");
    }
     );
    contactPage.addEventListener("click", () => {
        event.stopPropagation();
        contactPage.classList.add("hidden");
    });
}
if (nav) {
    // nav.addEventListener("click", () => toggleDebug());
}

window.addEventListener("load", () => { /* on page load */
    body.classList.remove("preload"); /* remove preload class (that blocks transitions through style.css) */
    cocas.classList.add("closed-state"); /* start with closed state */
    isAnimating = true;

    setTimeout(() => {  /* wait for most of the beginning closing animation to finish before accepting clicks */
            isAnimating = false;
        }, 2000);
});