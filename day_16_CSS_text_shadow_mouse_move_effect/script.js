/**
 * Created by Greg on 18/01/2017.
 */

const hero = document.querySelector('.hero');
const text = hero.querySelector('h1');
const walk = 100; // 100 px

function shadow(e) {
    // console.log(e);

    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    const {offsetWidth: width, offsetHeight: height} = hero;
    let {offsetX: x, offsetY: y} = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }


    const xWalk = (x / width * walk) - (walk / 2);
    const yWalk = (x / height * walk) - (walk / 2);
    console.log(xWalk, yWalk);

}

hero.addEventListener('mousemove', shadow);