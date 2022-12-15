new Swiper('.image-slider', {

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

});

function displayTrailer() {
    //console.log(this);
    console.log(this.dataset.name);
    let videos = document.querySelectorAll(".trailer");
    
    videos.forEach(video => {
        console.log(video);
        if (this.dataset.name == video.dataset.name){
            video.classList.remove("none");
           
        }        
    })
}

let btn = document.querySelectorAll(".play-trailer");

btn.forEach(b =>{
    b.addEventListener("click", displayTrailer);
})
