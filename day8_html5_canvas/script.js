/**
 * Created by Greg on 22/12/2016.
 */
const canvas = document.querySelector('#draw');
const context = canvas.getContext('2D'); // gets context of document

// adapting canvas to window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// creating style of the draw
context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 100;


// flag when click down drawning, click up not drawing
let isDrawing = false;

let lastX = 0;
let lastY = 0;

// function which will draw
function draw(e) {
    if (!isDrawing) return; // stop function from running when mouse up
    context.beginPath();
    // start from
    context.moveTo(lastX, lastY);
    // go to
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
}

// dealing with mouse action
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);