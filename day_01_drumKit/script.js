/**
 * Created by Greg on 09/12/2016.
 */
// creating/removing transition when clicking on keyboard
function removeTransition(e) {
    if (e.propertyName !== 'transform') return; // skip it if this is not a transition
    e.target.classList.remove('playing'); // stop playing transition
}

// playing sound according to the key pushed by user
function playingSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`);
    if (!audio) return; // if there is no sound played (i.e key not supported) stop function
    key.classList.add('playing');
    audio.currentTime = 0; // back to start
    audio.play(); // playing sound
}


// implementing in the DOM
const keys = Array.from(document.querySelectorAll('.key')); // selecting all class="key"
keys.forEach(key => key.addEventListener('transitionend', removeTransition)); // stop transition
window.addEventListener('keydown', playingSound); // when a key is pushed by user, a sound is played


