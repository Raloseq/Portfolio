import {
    isInViewport
} from './isInViewport.js';
const projectsH1 = document.querySelector('.app-projects--h1');
const projectsDiv = document.querySelectorAll('.app-projects--div');
window.addEventListener('scroll', () => {
    if (isInViewport(projectsH1)) {
        projectsH1.classList.add('app-projects--h1__active');
    }
    if (isInViewport(...projectsDiv)) {
        projectsDiv.forEach((e) => {
            e.classList.add('app-projects--div__active');
        })
    }
})