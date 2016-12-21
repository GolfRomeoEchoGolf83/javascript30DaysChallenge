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

// function which find matches between a word and a city or a state
function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        // figuring out i the city matches what was searched
        // regex to set up searchable words
        const regex = new RegExp(wordToMatch, 'gi');
        // is the word match city or state 
        return place.city.match(regex) || place.state.match(regex);
    });
}

// function which replace a string to a regex
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

// function which shows up cities or states which refers to the word searched
function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`);
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`);
        // returning a massive array
        return `
<li>
<span class="name">${cityName}, ${stateName}</span>
<span class="population">${numberWithCommas(place.population)}</span>
</li>
`;
    }).join('');
    suggestions.innerHTML = html;
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);