const tableGraficaButton = document.getElementById("table-grafica-button")
const tableDiseñoWebButton = document.getElementById("table-diseñoWeb-button")
const tableDiseñoGraficoButton = document.getElementById("table-diseñoGrafico-button")

const verMasButton = (column) => {
    const tableExtraContent = document.getElementById("table-extraContent").children
    const tableArrow = document.querySelectorAll(".table-arrow")
    switch (column) {
        case 0:
            if (tableExtraContent[0].classList.contains("table-shownContent")) {
                tableExtraContent[0].classList.remove("table-shownContent")
                tableArrow[0].classList.add("table-arrow-down")
                tableArrow[0].classList.remove("table-arrow-up")
                tableGraficaButton.parentElement.style.borderBottom = "1px solid #ffffff1a"
            } else {
                tableGraficaButton.parentElement.style.borderBottom = "none"
                tableDiseñoWebButton.parentElement.style.borderBottom = "1px solid #ffffff1a"
                tableDiseñoGraficoButton.parentElement.style.borderBottom = "1px solid #ffffff1a"
                tableExtraContent[0].classList.add("table-shownContent")
                tableExtraContent[1].classList.remove("table-shownContent")
                tableExtraContent[2].classList.remove("table-shownContent")
                tableArrow[0].classList.add("table-arrow-up")
                tableArrow[0].classList.remove("table-arrow-down")
                tableArrow[1].classList.remove("table-arrow-up")
                tableArrow[2].classList.remove("table-arrow-up")
            }
            break
        case 1:
            if (tableExtraContent[1].classList.contains("table-shownContent")) {
                tableExtraContent[1].classList.remove("table-shownContent")
                tableArrow[1].classList.add("table-arrow-down")
                tableArrow[1].classList.remove("table-arrow-up")
                tableDiseñoWebButton.parentElement.style.borderBottom = "1px solid #ffffff1a"
            } else {
                tableGraficaButton.parentElement.style.borderBottom = "1px solid #ffffff1a"
                tableDiseñoWebButton.parentElement.style.borderBottom = "none"
                tableDiseñoGraficoButton.parentElement.style.borderBottom = "1px solid #ffffff1a"
                tableExtraContent[0].classList.remove("table-shownContent")
                tableExtraContent[1].classList.add("table-shownContent")
                tableExtraContent[2].classList.remove("table-shownContent")
                tableArrow[1].classList.add("table-arrow-up")
                tableArrow[0].classList.remove("table-arrow-up")
                tableArrow[1].classList.remove("table-arrow-down")
                tableArrow[2].classList.remove("table-arrow-up")
            }
            break
        case 2:
            if (tableExtraContent[2].classList.contains("table-shownContent")) {
                tableExtraContent[2].classList.remove("table-shownContent")
                tableArrow[2].classList.add("table-arrow-down")
                tableArrow[2].classList.remove("table-arrow-up")
                tableDiseñoGraficoButton.parentElement.style.borderBottom = "1px solid #ffffff1a"
            } else {
                tableGraficaButton.parentElement.style.borderBottom = "1px solid #ffffff1a"
                tableDiseñoWebButton.parentElement.style.borderBottom = "1px solid #ffffff1a"
                tableDiseñoGraficoButton.parentElement.style.borderBottom = "none"
                tableExtraContent[0].classList.remove("table-shownContent")
                tableExtraContent[1].classList.remove("table-shownContent")
                tableExtraContent[2].classList.add("table-shownContent")
                tableArrow[2].classList.add("table-arrow-up")
                tableArrow[0].classList.remove("table-arrow-up")
                tableArrow[1].classList.remove("table-arrow-up")
                tableArrow[2].classList.remove("table-arrow-down")
            }
            break
    }
}

tableGraficaButton.addEventListener("click", () => { verMasButton(0) })
tableDiseñoWebButton.addEventListener("click", () => { verMasButton(1) })
tableDiseñoGraficoButton.addEventListener("click", () => { verMasButton(2) })