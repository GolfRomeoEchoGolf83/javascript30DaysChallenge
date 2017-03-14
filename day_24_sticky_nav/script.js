// setting const
const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

// fixing navbar top of the window
function fixNav() {
    console.log(topOfNav);
}

window.addEventListener('scroll', fixNav);