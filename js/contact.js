import {
    isInViewport
} from './isInViewport.js';
const footerH1 = document.querySelector('.app-footer--h1');
const footerLink = document.querySelectorAll('.app-footer--link');
window.addEventListener('scroll', () => {
    if (isInViewport(footerH1)) {
        footerH1.classList.add('app-footer--h1__active');
    }
    if (isInViewport(...footerLink)) {
        footerLink.forEach((e) => {
            e.classList.add('app-footer--link__active');
        })
    }
})