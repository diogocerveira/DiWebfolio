const cocas = document.getElementById("paper-cocas");

function toggleCocasState() {
    // switch between closed and two types of open
    if (cocas.classList.contains("open-cocas-vertical")) { /* cocas open vertically */
        cocas.classList.remove("open-cocas-vertical");
        cocas.classList.add("open-cocas-horizontal");
        console.log("Cocas State: Opened Horizontal")
    }
    else { /* cocas closed or opened vertically */
        cocas.classList.remove("open-cocas-horizontal");
        cocas.classList.add("open-cocas-vertical");
        console.log("Cocas State: Opened Vertically")
    }
    
}
if (cocas) {
    cocas.addEventListener("click", toggleCocasState);
}

window.addEventListener("load", () => { /* on click remove preload (turn on transitions) */
    document.body.classList.remove("preload");
});
