/**
 * Created by Greg on 05/01/2017.
 */
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;

function handlecheck(e) {
    // check if shift key down
    // and check if they are checked
    let inbetween = false;

    if (e.shiftKey && this.checked) {
// loop through every checkbox
    }
    checkboxes.forEach(checkbox => {
        if (checkbox === this || checkbox === lastChecked) {
            inbetween = !inbetween;
        }

    })
    lastChecked = this
}


checkboxes.forEach(checkbox => checkbox.addEventListener('click', handlecheck));