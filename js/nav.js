const burgerAnimation = document.querySelector('.app-nav--burger');
const openMobileNav = document.querySelector('.app-nav');
const navItems = document.querySelectorAll('.app-nav--item');
const burgerSpan = document.querySelectorAll('span');
burgerAnimation.addEventListener('click', () => {
    burgerAnimation.classList.toggle('app-nav--burger__active');
    openMobileNav.classList.toggle('active');
    navItems.forEach((e) => {
        e.classList.toggle('active-item');
    })
});
window.addEventListener('scroll', () => {
    let windowPosistion = window.scrollY;
    if (windowPosistion > 50) {
        openMobileNav.classList.add('menuColorScroll');
    } else {
        openMobileNav.classList.remove('menuColorScroll');
    };
    if (windowPosistion > 550) {
        burgerSpan.forEach((e) => {
            e.classList.add('black');
        });
    } else {
        burgerSpan.forEach((e) => {
            e.classList.remove('black');
        })
    };
    if (openMobileNav.classList.contains('active')) {
        burgerSpan.forEach((e) => {
            e.classList.remove('black');
        })
    }
})