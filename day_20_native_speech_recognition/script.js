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

recognition.addEventListener('result', e => {
    console.log(e);
});

recognition.start();