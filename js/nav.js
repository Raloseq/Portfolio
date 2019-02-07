const burgerAnimation = document.querySelector('.app-nav--burger');
const openMobileNav = document.querySelector('.app-nav');
const navItems = document.querySelectorAll('.app-nav--item');
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
    if (windowPosistion > 500) {
        burgerAnimation.classList.add('xd1');
    }
})