/**
 * Created by Greg on 14/12/2016.
 */
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
    this.classList.toggle('open');
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen))
/* for every panel clicked, find the function tooglePOpen */