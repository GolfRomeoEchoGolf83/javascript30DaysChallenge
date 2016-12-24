/**
 * Created by Greg on 22/12/2016.
 */
const canvas = document.querySelector('#draw');
const context = canvas.getContext('2D'); // gets context of document

// adapting canvas to window size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

