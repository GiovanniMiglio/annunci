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
// filtro annunci
(function(){
  const ordineSelect = document.querySelector('#ordine');
  const prezzoInput = document.querySelector('#prezzo');
  if(!ordineSelect || !prezzoInput) return;
  
  function togglePrezzo(){
    if(ordineSelect.value === 'prezzo') {
      prezzoInput.style.display = 'block';
      prezzoInput.focus();
    } else {
      prezzoInput.style.display = 'none';
      prezzoInput.value = '';
    }
  }
  ordineSelect.addEventListener('change', togglePrezzo);
  togglePrezzo();
})();

// card
fetch('annunci.json')
.then(response => response.json())
.then(data => {
  let annunciData = [];
  annunciData = data;
  function aggiornaAnnunci() {
    const filtroTesto = document.querySelector('#search').value.toLowerCase();
    const categoriaSelezionata = document.querySelector('#categoria').value;
    const ordine = document.querySelector('#ordine').value;
    const prezzoInput = parseFloat(document.querySelector('#prezzo').value);
    
    let filtrati = annunciData.filter(annuncio => {
      const matchTesto = annuncio.titolo.toLowerCase().includes(filtroTesto) ||
      annuncio.descrizione.toLowerCase().includes(filtroTesto);
      const matchCategoria = categoriaSelezionata === '' || annuncio.categoria === categoriaSelezionata;
      const matchPrezzo = ordine !== 'prezzo' || isNaN(prezzoInput) || annuncio.prezzo <= prezzoInput;
      
      return matchTesto && matchCategoria && matchPrezzo;
    });
    
    if (ordine === 'prezzoAsc' || (ordine === 'prezzo' && !isNaN(prezzoInput))) {
      filtrati.sort((a, b) => a.prezzo - b.prezzo);
    } else if (ordine === 'prezzoDesc') {
      filtrati.sort((a, b) => b.prezzo - a.prezzo);
    }
    
    renderAnnunci(filtrati);
  }
  document.querySelector('#search').addEventListener('input', aggiornaAnnunci);
  document.querySelector('#categoria').addEventListener('change', aggiornaAnnunci);
  document.querySelector('#ordine').addEventListener('change', aggiornaAnnunci);
  document.querySelector('#prezzo').addEventListener('input', aggiornaAnnunci);
  function renderAnnunci(data) {
    const cardContainer = document.querySelector('#annunci-grid');
    cardContainer.innerHTML = '';
    data.forEach(annuncio => {
      const card = document.createElement('div');
      card.className = 'col-12 col-sm-6 col-lg-4';
      card.innerHTML = `
   <div class="card ds-card h-100 shadow-sm">
          <img src="${annuncio.immagine}" class="card-img-top" alt="${annuncio.titolo} ">
          <div class="card-body">
            <h5 class="card-title metal-textsangue">${annuncio.titolo}</h5>
            <p class="card-text text-muted">${annuncio.categoria}</p>
            <div class="d-flex justify-content-between align-items-center">
            <p class="card-text">${annuncio.descrizione}</p></div>
            <div class="d-flex justify-content-between align-items-center">
            <span class="fw-bold">${annuncio.prezzo}€</span>
            </div>
          </div>
        </div>`;
      cardContainer.appendChild(card);
    });
  }
  function popolaCategorie(data) {
    const selectCategoria = document.querySelector('#categoria');
    const categorieUniche = [...new Set(data.map(annuncio => annuncio.categoria))];
    
    categorieUniche.forEach(categoria => {
      const option = document.createElement('option');
      option.value = categoria;
      option.textContent = categoria;
      selectCategoria.appendChild(option);
    });
  }
  document.querySelector('#ordine').addEventListener('change', aggiornaAnnunci);
  document.querySelector('#prezzo').addEventListener('input', aggiornaAnnunci);
  renderAnnunci(annunciData);
  popolaCategorie(annunciData);
  document.querySelector('#reset-filtri').addEventListener('click', function () {
  document.querySelector('#search').value = '';
  document.querySelector('#categoria').value = '';
  document.querySelector('#ordine').value = '';
  document.querySelector('#prezzo').value = '';
  document.querySelector('#prezzo').style.display = 'none';

  aggiornaAnnunci(); // Ricarica tutti gli annunci
});
  
});
document.querySelector('#crea-annuncio').addEventListener('click', function () {
  window.location.href = 'crea-annuncio.html';
});