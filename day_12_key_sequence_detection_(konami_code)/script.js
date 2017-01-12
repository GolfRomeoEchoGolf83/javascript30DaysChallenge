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
    console.log(pressed);
});