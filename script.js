const btnLeft = document.querySelector(".btn-left");
const btnRight = document.querySelector(".btn-right");

const carrusel = document.querySelector(".carrusel");
const carruselItems = document.querySelectorAll(".carruselItem");
const carruselItemContainer = document.querySelector(".carruselItemContainer");


btnLeft.addEventListener("click", moveToLeft);
btnRight.addEventListener("click", moveToRight);

let operation = 0;  
let counter = 0;
let withImg = 100 / carruselItems.length;

function moveToRight() {
    if (counter >= carruselItems.length - 1) {
        operation = 0;
        counter = 0;
        carruselItemContainer.style.transform = `translateX(-${operation}%)`;
    } else {
        counter++;
        operation = operation + withImg;
        carruselItemContainer.style.transform = `translateX(-${operation}%)`;
        carruselItemContainer.style.transition = "all ease 0.6s";
    }
}

function moveToLeft() {
    counter--;
    if (counter < 0) {
        counter = carruselItems.length - 1;
        operation = withImg * (carruselItems.length - 1);
        carruselItemContainer.style.transform = `translateX(-${operation}%)`;
    } else {
        operation = operation - withImg;
        carruselItemContainer.style.transform = `translateX(-${operation}%)`;
        carruselItemContainer.style.transition = "all ease 0.6s";
    }
}

//CARUSEL
const slides = document.querySelectorAll('.slide2');
let current = 0;

function updateCarousel() {
  slides.forEach((slide, index) => {
    slide.classList.remove('left', 'center', 'right');

    const leftIndex = (current - 1 + slides.length) % slides.length;
    const rightIndex = (current + 1) % slides.length;

    if (index === current) {
      slide.classList.add('center');
    } else if (index === leftIndex) {
      slide.classList.add('left');
    } else if (index === rightIndex) {
      slide.classList.add('right');
    }
  });
}

function move(direction) {
  current = (current + direction + slides.length) % slides.length;
  updateCarousel();
}


updateCarousel();

document.getElementById("toggleFiltros").addEventListener("click", () => {
  document.getElementById("contenedorFiltros").classList.toggle("oculto");
});

document.querySelectorAll('.grupo-filtros').forEach(grupo => {
  const principal = grupo.querySelector('.principal');
  const hijos = grupo.querySelectorAll('.hijo');

  
  principal.addEventListener('change', () => {
    hijos.forEach(hijo => {
      hijo.checked = principal.checked;
    });
  });

  
  hijos.forEach(hijo => {
    hijo.addEventListener('change', () => {
      const todosMarcados = Array.from(hijos).every(h => h.checked);
      principal.checked = todosMarcados;
    });
  });
});

document.addEventListener('DOMContentLoaded', () => {
  const checkboxes = document.querySelectorAll('input[type="checkbox"].hijo');
  const tarjetas = document.querySelectorAll('.cardFiltro');

  function aplicarFiltros() {
    const filtrosSeleccionados = Array.from(checkboxes)
      .filter(cb => cb.checked)
      .map(cb => cb.value.toLowerCase());

    tarjetas.forEach(tarjeta => {
      const filtrosTarjeta = tarjeta.dataset.filtros
        .toLowerCase()
        .split(',')
        .map(f => f.trim());

      const coincide = filtrosSeleccionados.some(filtro => filtrosTarjeta.includes(filtro));

      tarjeta.style.display = coincide ? 'block' : 'none';
    });
  }

  checkboxes.forEach(cb => {
    cb.addEventListener('change', aplicarFiltros);
  });

  
  document.querySelectorAll('.grupo-filtros').forEach(grupo => {
    const principal = grupo.querySelector('.principal');
    const hijos = grupo.querySelectorAll('.hijo');

    principal.addEventListener('change', () => {
      hijos.forEach(hijo => hijo.checked = principal.checked);
      aplicarFiltros(); 
    });

    hijos.forEach(hijo => {
      hijo.addEventListener('change', () => {
        const todosMarcados = Array.from(hijos).every(h => h.checked);
        principal.checked = todosMarcados;
        aplicarFiltros(); 
      });
    });
  });

  aplicarFiltros();
});
