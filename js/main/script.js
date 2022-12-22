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
        300: {
            slidesPerView: 1,
            slidesPerGroup: 1,
        },
        450: {
            slidesPerView: 1.7,
            slidesPerGroup: 1,
        },
        700: {
            slidesPerView: 2.5,
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





