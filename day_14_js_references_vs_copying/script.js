/**
 * Created by Greg on 16/01/2017.
 */

// start with strings, numbers and booleans
//     let age = 100;
//     let age2 = age;
//     console.log(age, age2);
//     age = 200;
//     console.log(age, age2);
//
//     let name = 'Greg';
//     let name2 = name;
//     console.log(name, name2);
//     name = 'gregdecroix';
//     console.log(name, name2);

// Let's say we have an array
// const players = ['Greg', 'Sarah', 'Ryan', 'Pop'];
//
// and we want to make a copy of it.
// const team = players;
//
// console.log(players, team);
//
// You might think we can just do something like this:
// team[3] = 'Lux';
// console.log(team);
// console.log(players);
//
// however what happens when we update that array?
//
// now here is the problem!
//
// oh no - we have edited the original array too!
//
// Why? It's because that is an array reference, not an array copy. They both point to the same array!
//
// So, how do we fix this? We take a copy instead!
// const team2 = players.slice();
//
// one day
//
// or create a new array and concat the old one in
// const team3 = [].concat(players);
//
// or use the new ES6 Spread
// const team4 = [...players];
// team4[3] = 'heeeeey hoooo';
// console.log(team4);
//
// const team5 = Array.from(players);

// now when we update it, the original one isn't changed

// The same thing goes for objects, let's say we have a person object

// with Objects
const person = {
    name : "Greg Dcrx",
    age: 32
};

// and think we make a copy:
// const captain = person;
// captain.number = 99;

// how do we take a copy instead?
const captain2 = Object.assign({}, person, {number: 99});
console.log(captain2);
console.log(person);

// We will hopefully soon see the object ...spread
// const captain3 = {...person};

// Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
const greg = {
    name: 'Greg',
    age: 100,
    social: {
        twitter: '@GregDcrx',
        facebook: 'greg.dev'
    }
}
console.clear();
console.log(greg);

const dev = Object.assign({}, greg);

const dev2 = JSON.parse(JSON.stringify(greg)); // stringigy the object