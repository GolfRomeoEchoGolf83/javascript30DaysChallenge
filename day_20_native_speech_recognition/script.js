/**
 * Created by Greg on 13/02/2017.
 */
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
const wordds = document.querySelector('.words');

words.appendChild(p);