/**
 * Created by Greg on 13/02/2017.
 */
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// setting voice recognition
const recognition = new SpeechRecognition();
recognition.interimResults = true;
recognition.lang = 'fr-FR';

// setting constantes and variables to deal with DOM i.e add 'p' after class .words
let p = document.createElement('p');
const words = document.querySelector('.words');

words.appendChild(p);

// getting speech into large array
recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
});

// make a pause when stop talking
recognition.addEventListener('end', recognition.start);
recognition.start();