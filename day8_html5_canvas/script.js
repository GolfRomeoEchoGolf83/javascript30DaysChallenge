/**
 * Created by Greg on 22/12/2016.
 */
const canvas = document.querySelector('#draw');
const context = canvas.getContext('2d'); // gets context of document

// adapting canvas to window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// creating style of the draw
context.strokeStyle = '#BADA55';
context.lineJoin = 'round';
context.lineCap = 'round';
context.lineWidth = 100;

/*
 variables
 */

// flag when click down drawning, click up not drawing
let isDrawing = false;

let lastX = 0;
let lastY = 0;

// adding changing color using HSL
let hue = 0;

// line width with color
let direction = true;

/*
 function
 */

// function which will draw
function draw(e) {
    if (!isDrawing) return; // stop function from running when mouse up
    console.log(e);
    // playing with HSL with 100% S and 50% L
    context.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    context.beginPath();
    // start from
    context.moveTo(lastX, lastY);
    // go to
    context.lineTo(e.offsetX, e.offsetY);
    context.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;

// resetting hue
    if (hue >= 360) {
        hue = 0;
    }

    // dealing with line width when it is linked with hue incrementation
    if (context.lineWidth >= 100 || context.lineWidth <= 1) {
        direction = !direction;
    }

    if (direction) {
        context.lineWidth++;
    } else {
        context.lineWidth--;
    }
}

/*
 actions
 */
// dealing with mouse action
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);
