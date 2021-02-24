let header = document.getElementById('header');
const serlimutDiv = document.getElementById('info-serlimut-div');
const serviciosDiv = document.getElementById('servicios-div');
const clientesDiv = document.getElementById('clientes-div');
const contactDiv = document.getElementById('contact-div');


eventFunction();

function eventFunction() {
    window.addEventListener('scroll', scrollHeader);
}

function scrollHeader() {
    if (scrollY() > 90) {
        header.classList.add("headercolor");
    } else {
        header.classList.remove("headercolor")
    }
}



function nosotrosScroll() {
    setScrollY(serlimutDiv.offsetTop);
}

function serviciosScroll() {
    setScrollY(serviciosDiv.offsetTop);
}

function clientesScroll() {
    setScrollY(clientesDiv.offsetTop);
}

function contactScroll() {
    setScrollY(contactDiv.offsetTop);
}


function scrollY() {
    return document.documentElement.scrollTop;
}

function setScrollY(distancia) {
    document.documentElement.scrollTop = distancia - 80;
}



/* SWIPER */
var mySwiper = new Swiper('#mask-swiper-container', {
    speed: 400,
    spaceBetween: 0,
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: 'auto',
    autoplay: {
        delay: 2200,
        disableOnInteraction: false,
    },
    loopedSlides: 3,


    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
        el: '.mask-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '#mask-button-next',
        prevEl: '#mask-button-prev',
    },
})