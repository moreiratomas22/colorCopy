const carousel = document.getElementById('carousel');
const images = document.querySelectorAll('.imageContainer');
const intervalTime = 3000;

let imageIndex = 0;
const imagesLength = images.length

function nextImage() {
    images[imageIndex].style.display = 'none';
    imageIndex += 1;
    if (imageIndex === imagesLength) {
        imageIndex = 0
    }
    images[imageIndex].style.display = 'flex';
}

setInterval(nextImage, intervalTime);