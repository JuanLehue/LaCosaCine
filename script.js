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