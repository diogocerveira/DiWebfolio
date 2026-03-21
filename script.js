const body = document.body;
const cocas = document.getElementById("paper-cocas");
const nav = document.getElementById("nav-cocas");

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
}
if (nav) {
    nav.addEventListener("click", () => toggleDebug());
}

window.addEventListener("load", () => { /* on page load */
    body.classList.remove("preload"); /* remove preload class (that blocks transitions through style.css) */
    cocas.classList.add("closed-state"); /* start with closed state */
    isAnimating = true;

    setTimeout(() => {  /* wait for most of the beginning closing animation to finish before accepting clicks */
            isAnimating = false;
        }, 2000);
});