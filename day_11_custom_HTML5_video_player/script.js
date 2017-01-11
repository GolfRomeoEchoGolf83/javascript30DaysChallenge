/**
 * Created by Greg on 10/01/2017.
 */

/* Get elements on the page */
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggle = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Build functions */
function togglePlay() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function updateButton() {
    console.log('update button');
}

/* Hook up event listeners */
video.addEventListener('click', togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
toggle.addEventListener('click', togglePlay);