// navbar
const navbar = document.querySelector('.bgnavcustom');
const sticky = navbar.offsetTop;

function stickyNavbar() {
  if (window.pageYOffset > sticky) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
}

window.addEventListener('scroll', stickyNavbar);
