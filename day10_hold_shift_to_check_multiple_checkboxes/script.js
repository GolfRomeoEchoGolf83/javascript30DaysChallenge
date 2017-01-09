/**
 * Created by Greg on 05/01/2017.
 */
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');
let lastChecked;


function handleCheck(e) {
    let inBetween = false;

    // check if shift key down
    // and check if boxes are checked
    if (e.shiftKey && this.checked) {
        // loop through every checkbox
        checkboxes.forEach(checkbox => {
            if (checkbox === this || checkbox === lastChecked) {
                inBetween = !inBetween;
            }

            if (inBetween) {
                checkbox.checked = true;
            }
        });
    }
    lastChecked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));