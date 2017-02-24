/**
 * Created by Greg on 24/02/2017.
 */

const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');

// creating highlight
highlight.classList.add('highlight');
document.body.appendChild(highlight);

// highlighting links
function highlightLinks() {
    console.log(this);
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLinks));