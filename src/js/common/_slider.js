import Swiper from 'swiper';

export default () => {

    const BREAKPOINT = 640;

    // ----------------------------------------------------------
    // Slider
    // ----------------------------------------------------------

    // メインビジュアルなど
    // ----------------------------------------------------------

    const SliderNew = new Swiper ('.p-home__new .swiper-container', {

        // Optional parameters
        loop: true,
        centeredSlides: true,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false
        },
        speed: 1500,
        slidesPerView: 1.4,
        spaceBetween: 20,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        breakpoints: {
            641: {
                spaceBetween: 50,
                slidesPerView: 'auto',
            },
        }
    })

}
