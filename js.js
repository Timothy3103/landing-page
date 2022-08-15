//Navigation
function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active")
    navigation.classList.toggle("active")
}
//Swiper slider
var swiper = new Swiper(".hero-slider", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 1,
    loop: true,
    navigation: {
        nextEl: ".hero-slider .swiper-button-next",
        prevEl: ".hero-slider .swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
        1240: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },

});

//Swioerlider 2
var swiper = new Swiper(".promo-slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".promo-slider-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".promo-slider .swiper-button-next",
        prevEl: ".promo-slider .swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});
//Swioerlider 2
var swiper = new Swiper(".trend-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    loopFillGroupWithBlank: true,
    pagination: {
        el: ".trend-slider-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".trend-slider .swiper-button-next",
        prevEl: ".trend-slider .swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 40,
        },

    },
});