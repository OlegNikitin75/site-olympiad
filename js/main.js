$(function () {
    $('.slider__items').slick({
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        nextArrow: '<button type="button" class="slick-arrow slick-next"><img src="img/next.svg" alt="next"></button>',
        prevArrow: '<button type="button" class="slick-arrow slick-prev"><img src="img/prev.svg" alt="prev"></button>',
        responsive: [{
                breakpoint: 640,
                settings: {
                    arrows: false,
                }
            },
            {
                breakpoint: 320,
                settings: {
                    arrows: true,
                }
            }
        ]
    });
});
$(function () {
    $('.gallery__item').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });

});
$(function () {
    $('.project__item').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        }
    });

});

// Функционирование меню
const btnIn = document.querySelector('.header__menu-btn'),
    menuListIn = document.querySelector('.menu');
btnIn.addEventListener('click', btnClick);

function btnClick() {
    menuListIn.classList.toggle('menu__hidden');
    btnIn.style.transform = "rotate(90deg)";
    if (menuListIn.classList.contains('menu__hidden')) {
        btnIn.style.transform = "rotate(0deg)";
    }
}

// Функционирование модального окна
function workingModal(trigger, modal, close, closeOverlay) {
    trigger.addEventListener('click', (event) => {
        if (event.target) {
            event.preventDefault();
        }
        modal.style.display = "block";
        overlayIn.style.display = "block";
        // document.body.style.overflow = "hidden";

    });
    close.addEventListener('click', () => {
        modal.style.display = "none";
        overlayIn.style.display = "none";
        // document.body.style.overflow = "";
    });
    overlayIn.addEventListener('click', (event) => {
        if (event.target === overlayIn) {
            modal.style.display = "none";
            overlayIn.style.display = "none";
            // document.body.style.overflow = "";
        }
    });
}
const regIn = document.querySelector('.invitation__btn'),
    modalRegIn = document.querySelector('.form'),
    modalRegInClose = document.querySelector('.input__btn-close'),
    overlayIn = document.querySelector('.overlay');

workingModal(regIn, modalRegIn, modalRegInClose, overlayIn);