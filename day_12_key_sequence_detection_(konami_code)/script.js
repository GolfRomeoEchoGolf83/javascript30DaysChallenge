/**
 * Created by Greg on 11/01/2017.
 */

/* store the key pressed in an array */
const pressed = [];

/* konami code to find */
const secretCode = 'greg';


window.addEventListener('keydown', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    /* keep length array equal to secretCode length storing key pushed */
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)
    console.log(pressed);
});