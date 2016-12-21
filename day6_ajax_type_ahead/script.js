/**
 * Created by Greg on 19/12/2016.
 */
    // json for USA Cities
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json'

// pushing json data to a variable called cities
const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // figuring out i the city matches what was searched
        // regex to set up searchable words
        const regex = new RegExp(wordToMatch, 'gi');
        // is the word match city or state 
        return place.city.match(regex) || place.state.match(regex);
    });
}
