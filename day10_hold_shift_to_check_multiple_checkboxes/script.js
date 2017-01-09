/**
 * Created by Greg on 05/01/2017.
 */
const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

function handlecheck(e) {
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handlecheck));