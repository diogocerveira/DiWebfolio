const body = document.body;
const cocas = document.getElementById("paper-cocas");

function toggleCocasState() {
    // switch between closed and two types of open
    if (cocas.classList.contains("open-cocas-vertical")) { /* cocas open vertically */
        // cocas.classList.remove("open-cocas-vertical");
        // cocas.classList.add("open-cocas-horizontal");
        console.log("Cocas State: Opened Horizontal")
        cocas.classList.remove("debug-spin"); /* stop debug spin on first click */
    }
    if (cocas.classList.contains("debug-spin")) {
        cocas.classList.remove("debug-spin");
    }
    else { /* cocas closed or opened vertically */
        // cocas.classList.remove("open-cocas-horizontal");
        // cocas.classList.add("open-cocas-vertical");
        console.log("Cocas State: Opened Vertically")
        cocas.classList.add("debug-spin"); /* stop debug spin on first click */
    }
    
}
let isAnimating = false;

if (cocas) {
    body.addEventListener("click", () => {
        if (isAnimating) return; 

        isAnimating = true;

        toggleCocasState();
    
        setTimeout(() => {  /* wait 3s */
            isAnimating = false;
        }, 3000);

    cocas.addEventListener("click", (event) => {
        event.stopPropagation(); /* prevent body click event when clicking on cocas */
    })
});
}

window.addEventListener("load", () => { /* on page load remove preload class (that blocks transitions through style.css) */
    document.body.classList.remove("preload");
});
