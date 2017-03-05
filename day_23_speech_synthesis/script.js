// variables 
const msg = new SpeechSynthesisUtterance();
let voices = [];
const voicesDropdown = document.querySelector('[name="voice"]');
const options = document.querySelectorAll('[type="range"], [name="text"]');
const speakButton = document.querySelector('#speak');
const stopButton = document.querySelector('#stop');

msg.text = document.querySelector('[name="text"]').value;

// populate voices 
function populatevoices() {
    voices = this.getVoices();
    voicesDropdown.innerHTML = voices
        .map(voice => `<option value="${voice.name}">${voice.name} (${voice.lang})</option>`)
        .join('');

}

// set the voice 
function setVoice() {
    msg.voice = voices.find(voice => voice.name === this.value);
    toggle();
}

// restart the page when new voice is selected
function toggle() {
    speechSynthesis.cancel();
    speechSynthesis.speak(msg);
}

speechSynthesis.addEventListener('voiceschanged', populatevoices);
voicesDropdown.addEventListener('change', setVoice);