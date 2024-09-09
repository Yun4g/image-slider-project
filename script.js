let lineCont = document.querySelector(".line-cont");
let menuOpen = false;

lineCont.addEventListener('click', () => {
    if (!menuOpen) {
        lineCont.classList.add('open');
        menuOpen = true;
    } else {
        lineCont.classList.remove('open');
        menuOpen = false;
    }
});


let currentSlide = 0;
const slides = document.querySelectorAll('.image-carousel img');
const totalSlides = slides.length;
const imageCarousel = document.querySelector('.image-carousel');

function updateCarouselPosition() {
    imageCarousel.style.transform = `translateX(-${currentSlide * 100}%)`;
}

function left() {
    currentSlide = (currentSlide > 0) ? currentSlide - 1 :0;
    imageCarousel.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateCarouselPosition();
}

function right() {
    currentSlide =  (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0;
    imageCarousel.style.transform = `translateX(-${currentSlide * 100}%)`; 
    updateCarouselPosition();
    setTimeout(right , 3000);
}


updateCarouselPosition();
// Start the automatic movement
setTimeout(right , 3000);
