/**
 * Created by Greg on 14/12/2016.
 */
const panels = document.querySelectorAll('.panel');

/* for every panel clicked, find the function tooglePOpen */
function toggleOpen() {
    this.classList.toggle('open');
}

/* when a panel transition ends, toggle .open-active to it */
function toggleActive(e) {
    if (e.propertyName.includes('flex')) {
        this.classList.toggle('open-active');
    }
}


panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));

