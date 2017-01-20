/**
 * Created by Greg on 20/01/2017.
 */
const timeNodes = Array.from(document.querySelectorAll('[date-time]'));

const seconds = timeNodes
    .map(node => node.dataset.time)

