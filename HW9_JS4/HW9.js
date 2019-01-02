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

debugger

random1sec ();
random2sec ();
oneSecond ();

async function random1sec() {
    setTimeout (function oneSecond () {
        let limit = Math.random() * 10;
        return limit;
    }, 1000);
    let limitNumber = await oneSecond ();
    limitNumber = Math.round(limitNumber);
    return limitNumber;
}

async function random2sec() {
    await timeout(2000);
    var pageNumber = Math.random() * 10;
    pageNumber = Math.round(pageNumber);
    return pageNumber;
}


const limitNumber = ms => new Promise(resolve => setTimeout(resolve, ms));

async function something() {
    console.log("this might take some time....");
    await limitNumber(5000);
    console.log("done!")
}

something();