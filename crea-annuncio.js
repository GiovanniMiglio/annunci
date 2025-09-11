// Navbar scroll behavior shared with home
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