const aboutH1 = document.querySelector('.app-about--h1');
const aboutP = document.querySelector('.app-about--p');

window.addEventListener('scroll', function () {
    const lastPosition = window.scrollY;
    console.log(lastPosition);
    if (lastPosition > 150) {
        aboutH1.classList.add('app-about--h1__active');
        aboutP.classList.add('app-about--p__active');
    } else {
        aboutH1.classList.remove('app-about--h1__active');
        aboutP.classList.remove('app-about--p__active');
    }
});