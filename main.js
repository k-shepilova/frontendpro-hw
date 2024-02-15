const image = document.querySelector('#image');
const btn = document.querySelector('#btn');
console.log(btn)

function showRandomImage() {
    let imageNumber = Math.floor((Math.random() * 9) + 1);
    image.src = `/images/${imageNumber}.jpg`;
    btn.addEventListener('click', () => {
        let imageNumber = Math.floor((Math.random() * 9) + 1);
        image.src = `/images/${imageNumber}.jpg`;
    });
}

function changeImageOnClick() {
    btn.addEventListener('click', () => {
        showRandomImage();
    });
}

showRandomImage();
changeImageOnClick();