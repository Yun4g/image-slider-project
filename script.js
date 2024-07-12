// script.js
let currentIndex = 0;

function moveRight() {
    const carousel = document.getElementById('carousel');
    const images = carousel.getElementsByTagName('img');
    currentIndex = (currentIndex + 1) % images.length;
    carousel.style.transform = `translateX(-${currentIndex * 60}vw)`;
}

function moveLeft() {
    const carousel = document.getElementById('carousel');
    const images = carousel.getElementsByTagName('img');
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    carousel.style.transform = `translateX(-${currentIndex * 60}vw)`;
}
