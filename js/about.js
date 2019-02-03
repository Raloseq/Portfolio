const aboutH1 = document.querySelector('.app-about--h1');
const aboutP = document.querySelector('.app-about--p');

window.addEventListener('scroll', function () {
    let isInViewport = function (elem) {
        let bounding = elem.getBoundingClientRect();
        return (
            bounding.top >= 0 &&
            bounding.left >= 0 &&
            bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
    if (isInViewport(aboutH1) && isInViewport(aboutP)) {
        aboutH1.classList.add('app-about--h1__active');
        aboutP.classList.add('app-about--p__active');
    } else {
        aboutH1.classList.remove('app-about--h1__active');
        aboutP.classList.remove('app-about--p__active');
    }
});