/**
 * Created by Greg on 22/02/2017.
 */
// getting arrow and speed value
const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

// get speed data from device simulator using XCode
navigator.geolocation.watchPosition((data) => {
    console.log(data);

    // getting speed according to speed datas
    speed.textContent = data.coords.speed;

    /* getting integer value instead of float
    speed.textContent = Math.round(data.coords.speed);
     */

    // rotate compass according to heading datas
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
});

