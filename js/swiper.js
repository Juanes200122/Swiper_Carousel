var swiper = new Swiper(".swiper-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true, //Indica si la ultima tarjeta se puede visualizar del todo 
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5, //Profundidad de las cartas respecto a su contenedor
        slideShadows: false //Evitamos la sombra que se le asigna por defecto
    },
    keyboard: {
        enabled: true
    },
    mousewheel: {
        thresholdDelta: 70
    },
    spaceBetween: -60,
    loop: false,
    nested: true,
    breakpoints: {
        640: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        }
    }
});
