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
// Herosection

const artorias = document.querySelector('#artorias');
const chest = document.querySelector('#chest');
const knight = document.querySelector('#knight');

let attivoArtorias = false;
let attivoChest = false;
let attivoKnight = false;

let vignettaArtorias = null;
let vignettaChest = null;
let vignettaKnight = null;
function setInitialPositions() {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (isMobile) {
        artorias.style.left = '-7%';
        artorias.style.bottom = '-1%';
        artorias.style.width = '296px';
        artorias.style.height = '257px';
        
        chest.style.left = '59%';
        chest.style.bottom = '28%';
        chest.style.width = '175px';
        chest.style.height = '103px';
        
        knight.style.left = '23%';
        knight.style.bottom = '23%';
        knight.style.width = '200px';
        knight.style.height = '252px';
    } else {
        artorias.style.left = '17%';
        artorias.style.bottom = '4%';
        artorias.style.width = '315px';
        artorias.style.height = '280px';
        
        chest.style.left = '70%';
        chest.style.bottom = '18%';
        chest.style.width = '268px';
        chest.style.height = '127px';
        
        knight.style.left = '61%';
        knight.style.bottom = '20%';
        knight.style.width = '220px';
        knight.style.height = '295px';
    }
}
function creaVignettePersonaggi() {
    // Artorias
    const wrapperArtorias = document.getElementById('wrapper-artorias');
    const vignettaArtorias = document.createElement('div');
    vignettaArtorias.classList.add('vignetta');
    vignettaArtorias.textContent = 'Console: PlayStation 5';
    vignettaArtorias.style.left = '105%';
    vignettaArtorias.style.top = '10%';
    wrapperArtorias.appendChild(vignettaArtorias);
    
    // Knight
    const wrapperKnight = document.getElementById('wrapper-knight');
    const vignettaKnight = document.createElement('div');
    vignettaKnight.classList.add('vignetta');
    vignettaKnight.textContent = 'Console: Nintendo Switch 2';
    vignettaKnight.style.left = '105%';
    vignettaKnight.style.top = '10%';
    wrapperKnight.appendChild(vignettaKnight);
    
    // Chest
    const wrapperChest = document.getElementById('wrapper-chest');
    const vignettaChest = document.createElement('div');
    vignettaChest.classList.add('vignetta');
    vignettaChest.textContent = 'Console: Xbox Series X';
    vignettaChest.style.right = '105%';
    vignettaChest.style.top = '10%';
    wrapperChest.appendChild(vignettaChest);
}
setInitialPositions();
creaVignettePersonaggi();
artorias.addEventListener('click', function () {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (!attivoArtorias) {
        artorias.style.backgroundImage = `url(/img/astorias-inpiedi.png)`;
        artorias.classList.add('artorias-glow');
        artorias.style.filter = 'brightness(0.7) drop-shadow(0 0 10px rgba(47, 75, 113, 0.6))';
        
        artorias.style.left = isMobile ? '-7%' : '22%';
        artorias.style.bottom = isMobile ? '5%' : '2%';
        artorias.style.width = isMobile ? '296px' : '320px';
        artorias.style.height = isMobile ? '440px' : '467px';
        
        vignettaArtorias = document.createElement('div');
        vignettaArtorias.classList.add('vignetta');
        vignettaArtorias = document.createElement('div');
        vignettaArtorias.classList.add('vignetta');
        vignettaArtorias.innerHTML = `<b>PlayStation 5</b><br>
         ✔️ Grafica 4K e ray tracing<br>
         ✔️ Esclusive: God of War, Spider-Man<br>
         ✔️ SSD ultra veloce<br>
         ❌ Ingombrante e costosa<br>
         ❌ Limited compatibility with PS4 games`;
        vignettaArtorias.style.position = 'absolute';
        vignettaArtorias.style.left = `17%`;
        vignettaArtorias.style.top = `91%`;
        
        document.body.appendChild(vignettaArtorias);
        attivoArtorias = true;
    } else {
        artorias.style.backgroundImage = `url(/img/asstorias-seduto.png)`;
        artorias.classList.remove('artorias-glow');
        artorias.style.filter = '';
        
        artorias.style.left = isMobile ? '-7%' : '17%';
        artorias.style.bottom = isMobile ? '-1%' : '4%';
        artorias.style.width = isMobile ? '296px' : '315px';
        artorias.style.height = isMobile ? '257px' : '280px';
        
        if (vignettaArtorias) {
            vignettaArtorias.remove();
            vignettaArtorias = null;
        }
        
        attivoArtorias = false;
    }
});
chest.addEventListener('click', function () {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (!attivoChest) {
        chest.style.backgroundImage = `url(/img/mimic.png)`;
        chest.classList.add('chest-glow');
        chest.style.filter = 'brightness(1.1) drop-shadow(0 0 5px rgba(20, 31, 37, 0.6))';
        
        chest.style.left = isMobile ? '59%' : '68%';
        chest.style.bottom = isMobile ? '30%' : '9%';
        chest.style.width = isMobile ? '175px' : '268px';
        chest.style.height = isMobile ? '246px' : '384px';
        
        vignettaChest = document.createElement('div');
        vignettaChest.classList.add('vignetta');
        vignettaChest = document.createElement('div');
        vignettaChest.classList.add('vignetta');
        vignettaChest.innerHTML = `
         <b>Xbox Series X</b><br>
         ✔️ Potenza massima<br>
         ✔️ Game Pass incluso<br>
         ✔️ Supports Xbox, 360, and One titles<br>
          ❌ Poche esclusive<br>
          ❌ Design sobrio`;
        vignettaChest.style.position = 'absolute';
        vignettaChest.style.left = `84%`;
        vignettaChest.style.top = `91%`;
        
        document.body.appendChild(vignettaChest);
        attivoChest = true;
    } else {
        chest.style.backgroundImage = `url(/img/chestclosed.png)`;
        chest.classList.remove('chest-glow');
        chest.style.filter = '';
        
        chest.style.left = isMobile ? '59%' : '70%';
        chest.style.bottom = isMobile ? '28%' : '18%';
        chest.style.width = isMobile ? '175px' : '268px';
        chest.style.height = isMobile ? '103px' : '127px';
        
        if (vignettaChest) {
            vignettaChest.remove();
            vignettaChest = null;
        }
        
        attivoChest = false;
    }
});
knight.addEventListener('click', function () {
    const isMobile = window.matchMedia('(max-width: 768px)').matches;
    
    if (!attivoKnight) {
        knight.style.backgroundImage = `url(/img/knightfront.png)`;
        knight.classList.add('knight-glow');
        knight.style.filter = 'brightness(0.9) drop-shadow(0 0 10px rgba(47, 75, 113, 0.6))';
        
        knight.style.left = isMobile ? '2%' : '52%';
        knight.style.bottom = isMobile ? '15%' : '11%';
        knight.style.width = isMobile ? '162px' : '220px';
        knight.style.height = isMobile ? '313px' : '389px';
        
        vignettaKnight = document.createElement('div');
        vignettaKnight.classList.add('vignetta');
        vignettaKnight = document.createElement('div');
        vignettaKnight.classList.add('vignetta');
        vignettaKnight.innerHTML = `
          <b>Nintendo Switch 2</b><br>
         ✔️ Gioco da casa e in mobilità<br>
         ✔️ Zelda, Mario, Metroid<br>
         ✔️ Divertimento immediato<br>
         ❌ Meno potente<br>
         ❌ Poco spazio interno`;
        vignettaKnight.style.position = 'absolute';
        vignettaKnight.style.left = `44%`;
        vignettaKnight.style.top = `91%`;
        
        document.body.appendChild(vignettaKnight);
        attivoKnight = true;
    } else {
        knight.style.backgroundImage = `url(/img/knightback.png)`;
        knight.classList.remove('knight-glow');
        knight.style.filter = '';
        
        knight.style.left = isMobile ? '23%' : '61%';
        knight.style.bottom = isMobile ? '23%' : '20%';
        knight.style.width = isMobile ? '200px' : '220px';
        knight.style.height = isMobile ? '252px' : '295px';
        
        if (vignettaKnight) {
            vignettaKnight.remove();
            vignettaKnight = null;
        }
        
        attivoKnight = false;
    }
});