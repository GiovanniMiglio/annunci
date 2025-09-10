// navbar
const navbar = document.querySelector('.bgnavcustom');
const sticky = navbar.offsetTop;
const bordoInfNavbar = document.getElementById('bordo-inf-navbar');
function stickyNavbar() {
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
        bordoInfNavbar.classList.add('bordo-inferiore-navbar-visible');
    } else {
        navbar.classList.remove('scrolled');
        bordoInfNavbar.classList.remove('bordo-inferiore-navbar-visible');
    }
}

window.addEventListener('scroll', stickyNavbar);