// Navbar scroll 
(function(){
  const navbar = document.querySelector('.bgnavcustom');
  const bordoInfNavbar = document.querySelector('#bordo-inf-navbar');
  if (!navbar) return;
  function stickyNavbar() {
    if (window.pageYOffset > 50) {
      navbar.classList.add('scrolled');
      bordoInfNavbar && bordoInfNavbar.classList.add('bordo-inferiore-navbar-visible');
    } else {
      navbar.classList.remove('scrolled');
      bordoInfNavbar && bordoInfNavbar.classList.remove('bordo-inferiore-navbar-visible');
    }
  }
  window.addEventListener('scroll', stickyNavbar);
  stickyNavbar();
})();
// animazione andre
document.addEventListener("DOMContentLoaded", () => {
  const up = document.querySelector("#andre-up");
  const down = document.querySelector("#andre-down");

if (up && down) {
    let visibile = true;

    setInterval(() => {
      if (visibile) {
        up.style.opacity = "1";
        up.style.transform = "translateY(0)";
         setTimeout(() => {
          down.style.opacity = "0";
          down.style.transform = "translateY(1px)";
        }, 50);

      } else {
         down.style.opacity = "1";
        down.style.transform = "translateY(0)";
        down.classList.add("bagliore");
        setTimeout(() => {
          down.classList.remove("bagliore");
        }, 100);
        setTimeout(() => {
          up.style.opacity = "0";
          up.style.transform = "translateY(1px)";
        }, 50);
      }
      visibile = !visibile;
    }, 800);
  }
});

// crea annuncio  
document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#crea-annuncio-form");
  const successMessage = document.querySelector("#success-message");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const titolo = document.querySelector("#titolo").value;
    const descrizione = document.querySelector("#descrizione").value;
    const categoria = document.querySelector("#categoria").value;
    const prezzo = parseFloat(document.querySelector("#prezzo").value);
    const immagine = document.querySelector("#immagine").value;
    const annunci = JSON.parse(localStorage.getItem("annunci")) || [];
    annunci.push({ titolo, descrizione, categoria, prezzo, immagine });
    localStorage.setItem("annunci", JSON.stringify(annunci));
    successMessage.classList.remove("d-none");
    form.reset();
  });
});