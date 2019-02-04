const aboutH1 = document.querySelector('.app-about--h1');
const aboutP = document.querySelector('.app-about--p');
const skillsDiv = document.querySelectorAll('.app-skills--div');

window.addEventListener('scroll', function () {
    var isInViewport = function (elem) {
        var bounding = elem.getBoundingClientRect();
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
    };
    skillsDiv.forEach(function (e) {
        if (isInViewport(e)) {
            console.log('siema');
        }
    });
});