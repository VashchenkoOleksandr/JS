//random numbers SetTimeout
debugger

let first = Math.floor (Math.random () * 10);
console.log (Math.round (first));

setTimeout (function limitNumber () {
    let second = Math.random () * 10;
    console.log (Math.round(second));
    return second;
}, 1000);
setTimeout (function () {
    let third = Math.random () * 10;
    console.log (Math.round(third));
}, 2000);


//random numbers async await

debugger

random1sec ();
random2sec ();

async function random1sec() {
    
    var limitNumber = Math.random() * (10)
    limitNumber = Math.round(limitNumber);
    return limitNumber;
}

async function random2sec() {
    
    var pageNumber = Math.random() * (10);
    pageNumber = Math.round(pageNumber);
    return pageNumber;
}
