'use strict';

const images = document.querySelectorAll('.image');
const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let currentIndex = 0;
updateImageVisibility();

function updateImageVisibility() {
    images.forEach((image, index) => {
        image.style.display = index === currentIndex ? 'block' : 'none';
    });
    prevBtn.style.visibility = currentIndex === 0 ? 'hidden' : 'visible';
    nextBtn.style.visibility = currentIndex === images.length - 1 ? 'hidden' : 'visible';
}

prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateImageVisibility();
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updateImageVisibility();
    }
});

