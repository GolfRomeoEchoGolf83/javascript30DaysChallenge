/**
 * Created by Greg on 22/02/2017.
 */
// getting arrow and speed value
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

// get speed data from device simulator using XCode
navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
});