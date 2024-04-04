const scrollX = document.getElementsByTagName("main")
const title = document.querySelector(".synoptic-title")

window.addEventListener("load", () => {
    const {left: title_left, width: title_width} = title.getBoundingClientRect()
    const window_width = window.innerWidth
    scrollX[0].scrollLeft =  title_left - (window_width - title_width) / 2
})