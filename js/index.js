//navigation bar
const nav = document.querySelector(".navAb")
const second = document.getElementById("about-area")
window.addEventListener('scroll', fixNav)
function fixNav() {
    if (window.scrollY > second.offsetTop -100) {
        nav.classList.add("active")
    } else {
        nav.classList.remove("active")

    }

}

//button
const button = document.querySelector(".btUp")
window.onscroll = function () {
    if (this.scrollY >= second.offsetTop) {
        button.classList.add("show")
    }
    else {
        button.classList.remove("show")
    }
}

button.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    })
}
