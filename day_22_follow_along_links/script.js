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

    // changing coords to deal with Y issue when scrolling the window
    const coords = {
        width: linkCoords.width,
        height: linkCoords.height,
        top: linkCoords.top + window.scrollY,
        left: linkCoords.left + window.scrollX
    };

    highlight.style.width = `${coords.width}px`;
    highlight.style.height = `${coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLinks));

