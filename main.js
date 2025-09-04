// pagina iniziale
let powerBtn = document.querySelector("#powerbtn");
let check = false;
document.addEventListener("DOMContentLoaded", function() {
    powerBtn.addEventListener("click", function() {
        if (!check) {
            powerBtn.src="img/powerbtngreen.png";
            powerBtn.style.boxShadow = "inset 0 0 10px rgba(0, 255, 0, 1.3)";
            check = true;
        } else {
            powerBtn.src="img/powerbtn.png";
            powerBtn.style.boxShadow = "";
            check = false;
        }
    });
});
