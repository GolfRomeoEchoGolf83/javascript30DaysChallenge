/**
 * Created by Greg on 13/12/2016.
 */
const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    const suffix = this.dataset.sizing || ''; // in index.html data set is data-sizing and 'nothing' for label base
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
