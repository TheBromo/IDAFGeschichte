var title = document.getElementById('source-title');
var content = document.getElementById('source-content');
title.onclick = function (ev) {
    content.classList.toggle('visible');
    title.classList.toggle('visible');
};

var slideshows = document.getElementsByClassName('slideshow');
for (var i = 0; i < slideshows.length; i++) {
    var slideshow = slideshows[i];
    slideshow.current = 0; // starting point

    var slides = slideshow.getElementsByClassName('slide');
    slides[slideshow.current].classList.toggle('current');

    slideshow.setCurrent = function (index) {
        if (index >= 0 && index < slides.length) {
            slides[slideshow.current].classList.toggle('current');
            slides[index].classList.toggle('current');
            slideshow.current = index;
        }
    };

    var left = document.createElement('button');
    left.className = 'slideshow-button left';
    left.onclick = function (ev) {
        slideshow.setCurrent(slideshow.current-1);
    };
    slideshow.appendChild(left);
    var right = document.createElement('button');
    right.className = 'slideshow-button right';
    right.onclick = function (ev) {
        slideshow.setCurrent(slideshow.current+1);
    };
    slideshow.appendChild(right);
}
