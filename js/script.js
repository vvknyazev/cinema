const swiper = new Swiper('.image-slider', {

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    simulateTouch: false,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },

    mousewheel: {
        sensitivity: 1,
    },
    autoheight: true,

    slidesPerView: 3.5,
    slidesPerGroup: 2,

    speed: 600,
    breakpoints: {
        350: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        700: {
            slidesPerView: 2,
        },
        1000: {
            slidesPerView: 3,
        },
        1300: {
            slidesPerView: 3.5,
        },
    },


});

function displayTrailer() {
    //console.log(this);
    //console.log(this.dataset.name);
    let videos = document.querySelectorAll(".trailer");

    videos.forEach(video => {
        //console.log(video);
        if (this.dataset.name == video.dataset.name) {
            video.classList.remove("none");

            let iFrame = video.getElementsByTagName('iframe');
            let url = iFrame[0].getAttribute('src');
            iFrame[0].setAttribute('src', url + "&amp;autoplay=1");
            console.log(stop);


            //close trailer vide with button
            let closeItem = video.querySelector(".close");

            closeItem.addEventListener("click", function () {
                video.classList.add("none");
                iFrame[0].setAttribute('src', '');
                iFrame[0].setAttribute('src', url);
            });

            //close trailer vide with key (escape)
            window.addEventListener("keydown", function (e) {
                if (e.key === "Escape") {
                    video.classList.add("none");
                    iFrame[0].setAttribute('src', '');
                    iFrame[0].setAttribute('src', url);
                }
            });
        }
    })
}

let btn = document.querySelectorAll(".play-trailer");

btn.forEach(b => {
    b.addEventListener("click", displayTrailer);
});

const btnMenu = document.querySelector(".btn-menu");
const menuBack = document.querySelector(".menu__back-btn");
let content = document.querySelector(".content");
const header = document.querySelector(".header");
const menuBody = document.querySelector(".menu__body");
const veil = document.querySelector(".veil");

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

window.addEventListener("keyup", function (e) {
    if (e.key == 'Escape') {
        closeMenu();
    }
})



