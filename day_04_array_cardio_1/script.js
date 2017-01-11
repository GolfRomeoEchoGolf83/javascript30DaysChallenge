/**
 * Created by Greg on 14/12/2016.
 */
const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isaac', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},
    {first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979},
    {first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852},
    {first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905},
    {first: 'Lise', last: 'Meitner', year: 1878, passed: 1968},
    {first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909}
];

const flavours = [
    'Chocolate Chip',
    'Kulfi',
    'Caramel Praline',
    'Chocolate',
    'Burnt Caramel',
    'Pistachio',
    'Rose',
    'Sweet Coconut',
    'Lemon Cookie',
    'Toffeeness',
    'Toasted Almond',
    'Black Raspberry Crunch',
    'Chocolate Brownies',
    'Pistachio Almond',
    'Strawberry',
    'Lavender Honey',
    'Lychee', 'Peach',
    'Black Walnut',
    'Birthday Cake',
    'Mexican Chocolate',
    'Mocha Almond Fudge',
    'Raspberry'
];

const people = [
    'Beck, Glenn',
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Milton',
    'Berlin, Irving',
    'Berne, Eric',
    'Bernhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black Elk',
    'Blair, Robert',
    'Blair, Tony',
    'Blake, William'
];

const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck'
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year <= 1599 ));
console.table(fifteen); // print the answer


// Array.prototype.map()
// 2. Give us an array of the inventor first and last names
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`); // or (inventor.first + '' + inventor.last)
console.log(fullNames); // print full name

/*
// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
 const ordering1 = inventors.sort(function (firstPerson, secondPerson) {
 if(firstPerson.year > secondPerson.year) {
 return 1;
 } else {
 return -1;
 }
 })
 console.table(ordering1);

 /*
 shorter solution

 const ordering2 = inventors.sort((firstPerson, secondPerson) => firstPerson.year > secondPerson.year ? 1 : -1);
 console.table(ordering2);

 */


// Array.prototype.reduce()
// 4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0); // 0 because of no total in first loop.
console.log(totalYears);


// 5. Sort the inventors by years lived
const oldest1 = inventors.sort(function (a, b) {
    const firstPerson = a.passed - a.year;
    const secondPerson = b.passed - b.year;
    if (secondPerson > firstPerson) {
        return -1;
    } else {
        return 1;
    }
});
console.table(oldest1)

/*
 shorter solution

 const oldest2 = inventors.sort(function(a, b){
 const firstPerson = a.passed - a.year;
 const secondPerson = b.passed - b.year;
 return secondPerson > firstPerson ? 1 : -1;
 console.table(oldest2);

 */


/*
// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
 //  from https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
 const category = document.querySelector('.mw-category');
 const links = Array.from(category.querySelectorAll('a'));
 const de = links
 .map(link => link.textContent) // mapping all links
 .filter(streetName => streetName.includes('de')); // filter list with Blvd containing 'de' in the name
 console.table(de);
 */

// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', '); // using split in order to convert it into an array
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});
console.log(alpha);


// 8. Reduce Exercise
// Sum up the instances of each of data variable
const transportation = data.reduce(function (object, item) {
    if (!object[item]) {
        object[item] = 0;
    }
    object[item]++;
    return object;
}, {}); // {} is the starting point of reduce() it's an empty object

console.log(transportation);