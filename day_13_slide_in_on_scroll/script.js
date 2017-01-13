/**
 * Created by Greg on 13/01/2017.
 */
const sliderImages = document.querySelectorAll('.slide-in');

function checkSlide(e) {
    console.log(e);
}

window.addEventListener('scroll', checkSlide);