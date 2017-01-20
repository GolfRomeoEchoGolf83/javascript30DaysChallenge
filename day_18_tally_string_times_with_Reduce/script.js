/**
 * Created by Greg on 20/01/2017.
 */
const timeNodes = Array.from(document.querySelectorAll('[date-time]'));

// converting array's data into time format
const seconds = timeNodes
    .map(node => node.dataset.time)
    .map(timeCode => {
        const [mins, secs] = timeCode.split(':').map(parseFloat);
        return (mins * 60) + secs;
        console.log(mins, secs);
    })

