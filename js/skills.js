import {
    isInViewport
} from './isInViewport.js';
const skillsDiv = document.querySelectorAll('.app-skills--div');
const skillsDivH1 = document.querySelector('.app-skills--h1')
window.addEventListener('scroll', () => {
    if (isInViewport(skillsDivH1)) {
        skillsDivH1.classList.add('app-skills--h1__active');
    }
    if (isInViewport(...skillsDiv)) {
        skillsDiv.forEach((e) => {
            e.classList.add('skills-div__active');
        })
    }
});