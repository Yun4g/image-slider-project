let imageContainer = document.querySelector('.image-carousel');
let  leftButton = document.querySelector('#left');
let rightButton = document.querySelector('#right');
let images = document.querySelectorAll('.image-carousel img');
let currentIndex = 0;


leftButton.addEventListener('click', left);
rightButton.addEventListener('click', right);


function showImage(index){
    images.forEach((img, i ) =>{
        img.style.display  = 'none';
    });

    if(images[index]){
        images[index].style.display = 'block';
    }
}

showImage(0);