/**
 * Created by Greg on 18/01/2017.
 */

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');

function shadow(e) {
    // console.log(e);
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;

    console.log(x, y);

}

hero.addEventListener('mousemove', shadow);