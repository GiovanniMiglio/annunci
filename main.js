// pagina iniziale
let powerBtn = document.querySelector("#powerbtn");
let check = false;
let bodyiniziale = document.querySelector("#bodyiniziale");
document.addEventListener("DOMContentLoaded", function() {
    powerBtn.addEventListener("click", function() {
        if (!check) {
            powerBtn.src="img/powerbtngreen.png";
            powerBtn.style.boxShadow = "inset 0 0 10px rgba(0, 255, 0, 1.3)";
            
            let div = document.createElement("div");
            div.classList.add("col-12", "col-md-8", "mx-auto");
            div.id = "progress-container";
            div.innerHTML = `<div class="progress">
                <div id="progress-bar" class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
                    0% </div>
            </div>`;
            document.querySelector("#annunci-container").appendChild(div);
            let progressBar = document.querySelector("#progress-bar");
            let width = 0;
                function animateBar() {
                    if (width >= 100) {
                        bodyiniziale.classList.add("bodybg");
                        bodyiniziale.innerHTML=""
                        let logo = document.createElement("img");
                        logo.src = "img/logo ok.png";
                        logo.alt = "Logo";
                        logo.classList.add("img-fluid", "d-block", "mx-auto", "w-25", "mt-5");
                        bodyiniziale.appendChild(logo);
                        setTimeout(function() {
                            window.location.href = "home.html";
                        }, 2000);                   
                    } else {
                        width++;
                        progressBar.style.width = width + "%";
                        progressBar.setAttribute("aria-valuenow", width);
                        progressBar.innerHTML = width + "%";
                        setTimeout(function() {
                            requestAnimationFrame(animateBar);
                        }, 100);
                    }
                    return progressBar.getAttribute("aria-valuemax");
                }
                requestAnimationFrame(animateBar);
            
            check = true;
        } else {
            powerBtn.src="img/powerbtn.png";
            powerBtn.style.boxShadow = "";
            check = false;
            let divnon = document.querySelector("#progress-container");
            if (divnon) {
                divnon.remove();
            }
        }
    });
});
