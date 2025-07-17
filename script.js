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


document.addEventListener('DOMContentLoaded', () => {
  const botonesFiltro = document.querySelectorAll('.dropdown-item');
  const tarjetas = document.querySelectorAll('.cardFiltro');

  botonesFiltro.forEach(boton => {
    boton.addEventListener('click', () => {
      const filtro = boton.dataset.filtro.toLowerCase();

      tarjetas.forEach(tarjeta => {
        const filtrosTarjeta = tarjeta.dataset.filtros.toLowerCase().split(',').map(f => f.trim());

        if (filtrosTarjeta.includes(filtro)) {
          tarjeta.style.display = 'block';
        } else {
          tarjeta.style.display = 'none';
        }

        if (filtro === 'todos') {
  tarjeta.style.display = 'block';
} else {
  tarjeta.style.display = filtrosTarjeta.includes(filtro) ? 'block' : 'none';
}

      });
    });
  });
});


//INICIO SESION
const btnAbrirModal = document.querySelector("#btn-abrir-modal2");
const btnCerrarModal = document.querySelector("#btn-cerrar-modal2");
const btnEnviar = document.querySelector("#btnEnviar2");
const modal = document.querySelector("#modal2");
const respuesta = document.querySelector("#respuesta2");
const form = document.querySelector("#formulario2");


btnAbrirModal.addEventListener("click", ()=>{
  modal.showModal();
})

btnCerrarModal.addEventListener("click", ()=>{
  modal.close();
})


form.addEventListener("submit", function(e) {
  e.preventDefault(); // Previene el envío normal

  const nombre = document.getElementById("nombre").value;
  const email = document.getElementById("password").value;

  // Validación simple
  if (nombre && password) {
    // Redirige a otra página
    window.location.href = "iniciado.html";
  } else {
    alert("Por favor completá correctamente los campos.");
  }
});
