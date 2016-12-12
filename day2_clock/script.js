/**
 * Created by Greg on 12/12/2016.
 */

const secondHand = document.querySelector('.second-hand'); // grabbing the second's hand class
const minsHand = document.querySelector('.min-hand'); // grabbing the minute's hand'

function setDate() {
    const now = new Date();

    const seconds = now.getSeconds(); //  getting seconds of now
    const secondsDegrees = ((seconds / 60) * 360) + 90; // transforming seconds into angles !! Adding +90 to offsetting css .hand transform: rotate(90deg)//
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60 ) * 360) + 90;
    minsHand.style.transform = `rotate(${minsDegree}deg)`;



}

setInterval(setDate, 1000);

setDate();