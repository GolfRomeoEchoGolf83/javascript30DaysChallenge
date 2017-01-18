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

    // setting x and y cursor position regarding target
    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y = y + e.target.offsetTop;
    }

    // setting x and y
    const xWalk = Math.round((x / width * walk) - (walk / 2));
    const yWalk = Math.round((y / height * walk) - (walk / 2));
    // console.log(xWalk, yWalk);

    // setting text shadow
    text.style.textShadow = `
${xWalk}px ${yWalk}px 0 red,
${xWalk * -1}px ${yWalk}px 0 rgba(0,255,0,0.7),
${xWalk}px ${yWalk * -1}px 0 rgba(0,255,255,0.7),
${xWalk * -1}px ${yWalk}px 0 rgba(0,0,255,0.7)
`;
}

hero.addEventListener('mousemove', shadow);