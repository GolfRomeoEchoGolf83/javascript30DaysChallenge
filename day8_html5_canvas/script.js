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

// flag when click down drawning, click up not drawing
let isDrawing = false;

let lastX = 0;
let lastY = 0;

// function which will draw
function draw(e) {
    if (!isDrawing) return; // stop function from running when mouse up
    ctx.beginPath();
    // start from
    ctx.moveTo(lastX, lastY);
    // go to
    ctx.lineTo(e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
}

// dealing with mouse action
canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);