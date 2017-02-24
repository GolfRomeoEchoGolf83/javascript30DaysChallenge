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
    // where on the page trigger is happening
    const linkCoords = this.getBoundingClientRect();
    console.log(linkCoords);
    highlight.style.width = `${linkCoords.width}px`;
    highlight.style.height = `${linkCoords.height}px`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLinks));

