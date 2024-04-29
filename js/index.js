const tableGraficaButton = document.getElementById("table-grafica-button")
const tableDiseñoWebButton = document.getElementById("table-diseñoWeb-button")
const tableDiseñoGraficoButton = document.getElementById("table-diseñoGrafico-button")
const tableDisenoUXUIButton = document.getElementById("table-disenoUXUI-button")
const toTheTopButton = document.getElementById("toTheTop")

const hamburgerMenu = document.querySelector(".hamburgerMenu")

const verMasButton = (column) => {
    const tableArrow = document.querySelectorAll(".table-arrow")
    const tableGraficaExtraContent = document.getElementById("table-grafica-extraContent")
    const tableDisenoWebYSeoExtraContent = document.getElementById("table-disenoWebYSeo-extraContent")
    const tableDisenoGraficoExtraContent = document.getElementById("table-disenoGrafico-extraContent")
    const tableDisenoGraficoUXUIExtraContent = document.getElementById("table-disenoUXUI-extraContent")
    switch (column) {
        case 0:
            if (tableGraficaExtraContent.classList.contains("table-shownContent")) {
                tableGraficaExtraContent.classList.remove("table-shownContent")
                tableArrow[0].classList.add("table-arrow-down")
                tableArrow[0].classList.remove("table-arrow-up")
            } else {
                tableGraficaExtraContent.classList.add("table-shownContent")
                tableDisenoWebYSeoExtraContent.classList.remove("table-shownContent")
                tableDisenoGraficoExtraContent.classList.remove("table-shownContent")
                tableDisenoGraficoUXUIExtraContent.classList.remove("table-shownContent")
                tableArrow[0].classList.add("table-arrow-up")
                tableArrow[0].classList.remove("table-arrow-down")
                tableArrow[1].classList.remove("table-arrow-up")
                tableArrow[2].classList.remove("table-arrow-up")
            }
            break
        case 1:
            if (tableDisenoWebYSeoExtraContent.classList.contains("table-shownContent")) {
                tableDisenoWebYSeoExtraContent.classList.remove("table-shownContent")
                tableArrow[1].classList.add("table-arrow-down")
                tableArrow[1].classList.remove("table-arrow-up")
            } else {
                tableGraficaExtraContent.classList.remove("table-shownContent")
                tableDisenoWebYSeoExtraContent.classList.add("table-shownContent")
                tableDisenoGraficoExtraContent.classList.remove("table-shownContent")
                tableDisenoGraficoUXUIExtraContent.classList.remove("table-shownContent")
                tableArrow[1].classList.add("table-arrow-up")
                tableArrow[0].classList.remove("table-arrow-up")
                tableArrow[1].classList.remove("table-arrow-down")
                tableArrow[2].classList.remove("table-arrow-up")
            }
            break
        case 2:
            if (tableDisenoGraficoExtraContent.classList.contains("table-shownContent")) {
                tableDisenoGraficoExtraContent.classList.remove("table-shownContent")
                tableArrow[2].classList.add("table-arrow-down")
                tableArrow[2].classList.remove("table-arrow-up")
            } else {
                tableGraficaExtraContent.classList.remove("table-shownContent")
                tableDisenoWebYSeoExtraContent.classList.remove("table-shownContent")
                tableDisenoGraficoExtraContent.classList.add("table-shownContent")
                tableDisenoGraficoUXUIExtraContent.classList.remove("table-shownContent")
                tableArrow[2].classList.add("table-arrow-up")
                tableArrow[0].classList.remove("table-arrow-up")
                tableArrow[1].classList.remove("table-arrow-up")
                tableArrow[2].classList.remove("table-arrow-down")
            }
            break
        case 3:
            if (tableDisenoGraficoUXUIExtraContent.classList.contains("table-shownContent")) {
                tableDisenoGraficoUXUIExtraContent.classList.remove("table-shownContent")
                tableArrow[3].classList.add("table-arrow-down")
                tableArrow[3].classList.remove("table-arrow-up")
            } else {
                tableGraficaExtraContent.classList.remove("table-shownContent")
                tableDisenoGraficoUXUIExtraContent.classList.add("table-shownContent")
                tableDisenoWebYSeoExtraContent.classList.remove("table-shownContent")
                tableDisenoGraficoExtraContent.classList.remove("table-shownContent")
                tableArrow[3].classList.add("table-arrow-up")
                tableArrow[0].classList.remove("table-arrow-down")
                tableArrow[1].classList.remove("table-arrow-up")
                tableArrow[2].classList.remove("table-arrow-up")
            }
    }
}

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

tableGraficaButton.addEventListener("click", () => { verMasButton(0) })
tableDiseñoWebButton.addEventListener("click", () => { verMasButton(1) })
tableDiseñoGraficoButton.addEventListener("click", () => { verMasButton(2) })
tableDisenoUXUIButton.addEventListener("click", () => { verMasButton(3) })

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