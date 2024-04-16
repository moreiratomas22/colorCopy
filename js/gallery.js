document.getElementById("prevImgButton").addEventListener("click", () => prevImage(currentImageIndex))
document.getElementById("nextImgButton").addEventListener("click", () => nextImage(currentImageIndex))
document.getElementById("closeImgButton").addEventListener("click", () => closeGallery())
const gallery = document.querySelector('#gallery');
const imageContainers = gallery.querySelectorAll('.imageContainer');

let imageArray = []
let currentImageIndex = 0
const totalImages = imageContainers.length

const arrayMinElementPosition = (array) => {
    let min = array[0]
    let index = 0
    array.forEach((el, i) => {
        if (el < min) {
            min = el
            index = i
        }
    })
    return index
}

const arrayMaxElementPosition = (array) => {
    let max = array[0]
    let index = 0
    array.forEach((el, i) => {
        if (el > max) {
            max = el
            index = i
        }
    })
    return index
}

async function adjustImagePositions() {
    const gap = 5
    const windowWidth = gallery.offsetWidth
    const width = 280 //Todas las columnas son iguales y las imagenes tienen el ancho de la columna
    const columns = Math.floor(windowWidth / width) || 1
    const whiteSpace = windowWidth - columns * width  //espacio desperdiciado

    const topColumn = Array.from({ length: columns }, () => 30) //Inicializo las columnas en 30px, para luego ir sumando por columna
    const leftColumn = Array.from({ length: columns }, (_, column) => ((column * width) + (whiteSpace / 2) + column * gap)) //Calculo el inicio de cada columna

    let column = 0 //desde 0 hasta columns - 1

    for (let i = 0; i < totalImages; i++) {
        imageContainers[i].firstElementChild.style.left = "0"
        imageContainers[i].firstElementChild.style.position = "relative"
        imageContainers[i].style.width = `${width}px`

        const imageHeight = await loadImage(imageContainers[i].firstElementChild)
        imageContainers[i].style.height = `${imageHeight}px`

        const left = leftColumn[column]
        const top = topColumn[column]
        topColumn[column] += imageContainers[i].children[0].height + gap

        //Ahora tengo que elegir cúal va a ser la siguiente columna donde se ponga la imageContainers[i]
        column = arrayMinElementPosition(topColumn)

        imageContainers[i].style.left = `${left}px`;
        imageContainers[i].style.top = `${top}px`;
        imageContainers[i].addEventListener("click", () => openCarrousel(i))
        imageArray.push(imageContainers[i].children[0])
        const classesToAdd = ["wow", "animate__animated", "animate__fadeInUp"]
        imageContainers[i].classList.add(...classesToAdd)
    }
    const maxCol = arrayMaxElementPosition(topColumn)
    gallery.style.height = `${topColumn[maxCol]}px`
    window.onclick = function (event) {
        const modal = document.getElementById('galleryModal');
        if (event.target === modal) {
            closeGallery();
        }
    };
}

const openCarrousel = (index) => {
    const carrousel = document.getElementById("galleryModal")
    currentImageIndex = index
    carrousel.style.display = "block"
    const clonedImage = imageArray[index].cloneNode(true)
    clonedImage.style.left = ""
    clonedImage.style.display = ""
    carrousel.appendChild(clonedImage).classList.add("modal-content")
    document.body.style.overflow = "hidden" //Bloqueo el scroll
}
const closeGallery = () => {
    const carrousel = document.getElementById("galleryModal")
    document.getElementById('galleryModal').style.display = 'none';
    document.body.style.overflow = "visible" //desbloqueo el scroll
    carrousel.removeChild(carrousel.children[3])
}

const prevImage = (index) => {
    const carrousel = document.getElementById("galleryModal")
    currentImageIndex = index - 1
    if (currentImageIndex === 0) currentImageIndex = imageArray.length - 1
    carrousel.removeChild(carrousel.children[3])
    const clonedImage = imageArray[currentImageIndex].cloneNode(true)
    clonedImage.style.left = ""
    clonedImage.style.display = ""
    carrousel.appendChild(clonedImage).classList.add("modal-content")
}

const nextImage = (index) => {
    const carrousel = document.getElementById("galleryModal")
    currentImageIndex = index + 1
    if (currentImageIndex === imageArray.length) currentImageIndex = 0
    carrousel.removeChild(carrousel.children[3])
    const clonedImage = imageArray[currentImageIndex].cloneNode(true)
    clonedImage.style.left = ""
    clonedImage.style.display = ""
    carrousel.appendChild(clonedImage).classList.add("modal-content")
}

window.addEventListener("load", () => {
    adjustImagePositions();
    const spinner = document.getElementById("loader")
    spinner.style.display = "none"
    window.addEventListener('resize', () => {
        adjustImagePositions();
    });
})

const loadImage = (image) => {
    return new Promise((res, rej) => {
        if (image.complete) {
            res(image.height)
        } else {
            image.onload = () => {
                res(image.height)
            }
        }
    })
}