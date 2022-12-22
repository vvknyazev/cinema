const btnMenu = document.querySelector(".btn-menu");
const menuBack = document.querySelector(".menu__back-btn");
let content = document.querySelector(".content");
const header = document.querySelector(".header");
const menuBody = document.querySelector(".menu__body");
const veil = document.querySelector(".veil");
const logo = document.querySelector(".logo");

function closeMenu() {
    content.classList.remove("blur");
    header.classList.remove("blur");
    menuBody.classList.remove("_active");
    veil.classList.add("none");
    //document.body.classList.remove("ovflow");
}
function openMenu() {
    content.classList.add("blur");
    header.classList.add("blur");
    menuBody.classList.add("_active");
    veil.classList.remove("none");
    // document.body.classList.add("ovflow");
}

btnMenu.addEventListener("click", openMenu);
menuBack.addEventListener("click", closeMenu);
veil.addEventListener("click", closeMenu);
logo.addEventListener("click", closeMenu);

window.addEventListener("keyup", function (e) {
    if (e.key == 'Escape') {
        closeMenu();
    }
})