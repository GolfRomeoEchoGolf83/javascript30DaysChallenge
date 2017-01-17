/**
 * Created by Greg on 17/01/2017.
 */
const addItems = document.querySelector('.add-items');
const itemList = document.querySelector('.plates');
const items = [];

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text: text,
        done: false
    };
    this.reset();
    items.push(item);
    console.log(items);
}
addItems.addEventListener('submit', addItem);