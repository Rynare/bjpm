document.addEventListener("DOMContentLoaded", () => {
    setActiveNav()
    const hamburger = document.querySelector(".hamburger")
    const navOffcanvas = document.querySelector(".nav-offcanvas")
    const offcanvasCloseBtn = navOffcanvas.querySelector(".close-btn")
    hamburger.addEventListener("click", () => {
        navOffcanvas.classList.add("active")
    })
    offcanvasCloseBtn.addEventListener("click", () => {
        navOffcanvas.classList.remove("active")
    })

    window.addEventListener("hashchange", () => {
        navOffcanvas.classList.remove("active")
        setActiveNav()
    })

    const thumbnail = document.querySelector(".thumbnail")
    thumbnail.addEventListener("click", () => {
        const target = document.querySelector(thumbnail.getAttribute("target"))
        thumbnail.classList.add("hidden")
        target.classList.remove("opacity-0")
        target.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
    })
})
function setActiveNav() {
    const activeNavs = document.querySelectorAll(".nav-offcanvas .active, nav .active")
    const hash = window.location.hash || "#home"
    const targetNavs = document.querySelectorAll(`.nav-offcanvas a[href*="${hash}"], nav a[href*="${hash}"]`)

    for (const activeNav of activeNavs) {
        activeNav.classList.remove("active")
    }

    for (const targetNav of targetNavs) {
        targetNav.classList.add("active")
    }
}
