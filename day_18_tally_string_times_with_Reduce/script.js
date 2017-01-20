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
    .reduce((total, vidSeconds) => total + vidSeconds);

let secondsLeft = seconds;
// how many hours
const hours = Math.floor(secondsLeft / 3600);
// how many seconds left
secondsLeft = secondsLeft % 3600;

// idem with mins
const mins = Math.floor(secondsLeft / 60);
console.log(secondsLeft);

console.log(hours, mins, secondsLeft);
