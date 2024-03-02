const toTheTopButton = document.getElementById("toTheTop")
const hamburgerMenu = document.querySelector(".hamburgerMenu")

const hamburgerMenuOpenClose = () => {
    const navLinks = document.querySelector(".navLinks")
    if (navLinks.classList.contains("navLinksShown")) {
        navLinks.classList.remove("navLinksShown")
        hamburgerMenu.classList.remove("close-icon")
    } else {
        navLinks.classList.add("navLinksShown")
        hamburgerMenu.classList.add("close-icon")
    }
}

hamburgerMenu.addEventListener("click", hamburgerMenuOpenClose)

const toTheTop = () => {
    window.scrollTo(0, 0)
}
const fadeIn = () => {
    toTheTopButton.classList.add("fadeIn")
    toTheTopButton.classList.remove("fadeOut")
}
const fadeOut = () => {
    toTheTopButton.classList.remove("fadeIn")
    toTheTopButton.classList.add("fadeOut")
}
toTheTopButton.addEventListener("click", toTheTop)
window.addEventListener("scroll", () => {
    (window.scrollY >= 200) ? fadeIn() : fadeOut()
})