import {
    isInViewport
} from './isInViewport.js';
const aboutH1 = document.querySelector('.app-about--h1');
const aboutP = document.querySelector('.app-about--p');

window.addEventListener('scroll', () => {
    if (isInViewport(aboutH1) && isInViewport(aboutP)) {
        aboutH1.classList.add('app-about--h1__active');
        aboutP.classList.add('app-about--p__active');
    }
});