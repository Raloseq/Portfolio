const burgerAnimation = document.querySelector('.app-nav--burger');
const openMobileNav = document.querySelector('.app-nav');
const navItems = document.querySelectorAll('.app-nav--item');
burgerAnimation.addEventListener('click', function () {
    burgerAnimation.classList.toggle('app-nav--burger__active');
    openMobileNav.classList.toggle('active');
    navItems.forEach(function (e) {
        e.classList.toggle('active-item');
    })
});