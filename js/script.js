new Swiper('.image-slider', {

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    simulateTouch: false,

    keyboard:{
        enabled: true,
        onlyInViewport: true,
    },

    mousewheel:{
        sensitivity: 1,
    },
    autoheight: true,

    slidesPerView: 3.5,



    speed: 600,
});