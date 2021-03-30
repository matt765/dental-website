const navSlide = () => {
    document.getElementById('js-navbar-toggle').addEventListener('click', () => toggleNavigation());
    const navLinks = document.querySelectorAll('.nav-links a');

    function toggleNavigation() {
        document.getElementById("navigation").classList.toggle("draggedUp");
        document.getElementById('navbar-collapse').classList.toggle("navigation-visible");
        navLinks.forEach((link, index) => {

            link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.25}s`
        });
    };
}
navSlide();

const elem = document.querySelector('.main-carousel');
const flkty = new Flickity(elem, {
    cellAlign: 'center',
    draggable: true,
    wrapAround: true,
    pageDots: true,
    autoPlay: 3000,
    lazyLoad: true
});

const carouselCells = document.querySelectorAll(".carousel-cell");

for (var i = 0; i < carouselCells.length; i++) {
    carouselCells[i].classList.add("pageloadedVisible");
}
const elem2 = document.querySelector('.main-carousel2');
const flkty2 = new Flickity(elem2, {
    cellAlign: 'center',
    draggable: true,
    wrapAround: true,
    pageDots: true,
    contain: true,
    cellAlign: 'left'

});

window.onload = function() {
    window.dispatchEvent(new Event('resize'));
}


const accordionBtn = document.querySelectorAll('.accordionTitle');
const allTexts = document.querySelectorAll('.text');
const accIcon = document.querySelectorAll('.accIcon');

accordionBtn.forEach(function(el) {
    el.addEventListener('click', toggleAccordion)
});

function toggleAccordion(el) {
    const targetText = el.currentTarget.nextElementSibling.classList;
    const targetAccIcon = el.currentTarget.children[0];
    const target = el.currentTarget;

    if (targetText.contains('show')) {
        targetText.remove('show');
        targetAccIcon.classList.remove('anime');
        target.classList.remove('accordionTitleActive');
    } else {
        accordionBtn.forEach(function(el) {
            el.classList.remove('accordionTitleActive');

            allTexts.forEach(function(el) {
                el.classList.remove('show');
            })

            accIcon.forEach(function(el) {
                el.classList.remove('anime');
            })

        })

        targetText.add('show');
        target.classList.add('accordionTitleActive');
        targetAccIcon.classList.add('anime');
    }
}

const toggleNav = () => {
    document.getElementById("js-navbar-toggle").classList.toggle("open");
}
document.getElementById("js-navbar-toggle").addEventListener("click", toggleNav)