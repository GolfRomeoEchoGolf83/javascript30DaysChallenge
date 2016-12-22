/**
 * Created by Greg on 21/12/2016.
 */
const people = [
    {name: "Wes", year: 1988},
    {name: "Kait", year: 1986},
    {name: "Irv", year: 1970},
    {name: "Lux", year: 2015},
];

const comments = [
    {text: "Love this !", id: 523423},
    {text: "Super good", id: 823423},
    {text: "You are the best", id: 2039842},
    {text: "Ramen is my favorite food ever", id: 123523},
    {text: "Nice Nice !", id: 5423238},
];

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
/* SOLUTION 1
const isAdult = people.some(function (person) {
    const currentYear = (new Date()).getFullYear();
    if (currentYear - person.year >= 19) {
        return true
    }
});
 */
// SOLUTION 2
const isAdult = people.some(person => (new Date()).getFullYear() - person.year >= 19);

console.log({isAdult});


// Array.prototype.every() // is everyone 19 or older?
const allAdults = people.every(person => (new Date()).getFullYear() - person.year >= 19);

console.log({allAdults});

// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
/* SOLUTION 1
const comment = comments.find(function (comment) {

    if (comment.id === 823423) {
        return true;
    }
});
 */

// SOLUTION 2
const comment = comments.find(comment => (comment.id === 823423));

console.log({comment});

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423