const showPass = document.querySelector(".show-password");
const inputPass = document.querySelector(".input-password");
console.log(showPass);
console.log(inputPass);

let isShowed = false;

showPass.addEventListener("click", function (e) {
    if (isShowed) {
        inputPass.setAttribute("type", "password");
        showPass.style.opacity = 0.5;        
    } else {
        inputPass.setAttribute("type", "text");
        showPass.style.opacity = 1;
    }
    isShowed = !isShowed;
});