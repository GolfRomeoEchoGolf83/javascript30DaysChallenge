/**
 * Created by Greg on 13/01/2017.
 */
const sliderImages = document.querySelectorAll('.slide-in');

function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function () {
        var context = this, args = arguments;
        var later = function () {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

function checkSlide(e) {
    // half way of the image
    sliderImages.forEach(sliderImages => {
        const slideInAt = (window.scrollY + window.innerHeight) - sliderImages.height / 2;
        // bottom of the image
        const imageBottom = sliderImages.offsetTop + sliderImages.height;
        const isHalfShown = slideInAt > sliderImages.offsetTop;
        const isNotScrolledPast = window.scrollY < imageBottom;

        // adding or removing class active to make them appear of desappear
        if (isHalfShown && isNotScrolledPast) {
            sliderImage.classList.add('active');
        } else {
            sliderImage.classList.remove('active');
        }
    });
}

window.addEventListener('scroll', debounce(checkSlide));