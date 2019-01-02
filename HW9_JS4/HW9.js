//random numbers SetTimeout
debugger

let first = Math.floor (Math.random () * 10);
console.log (Math.round (first));

setTimeout (function () {
    let second = Math.random () * 10;
    console.log (Math.round(second));
}, 1000);
setTimeout (function () {
    let third = Math.random () * 10;
    console.log (Math.round(third));
}, 2000);


//random numbers async await

debugger;

const timeout1sec = ms => new Promise(resolve => setTimeout(resolve, ms));
const timeout2sec = ms => new Promise(resolve => setTimeout(resolve, ms));
random1sec ();
random2sec ();

async function random1sec() {
    await timeout1sec (1000);
    var limitNumber = Math.random () * 10;
    limitNumber = Math.round(limitNumber);
    return limitNumber;
}

async function random2sec() {
    await timeout2sec (2000);
    var pageNumber = Math.random() * 10;
    pageNumber = Math.round(pageNumber);
    return pageNumber;
}