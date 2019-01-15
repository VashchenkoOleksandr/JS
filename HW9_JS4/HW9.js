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

const timeout1sec = ms => new Promise(promisRes => setTimeout(promisRes, ms));
const timeout2sec = ms => new Promise(promisRes => setTimeout(promisRes, ms));
let limitNumber, pageNumber;
let request = new XMLHttpRequest();

async function random1sec() {
    await timeout1sec (1000);
    limitNumber = Math.random () * 10;
    limitNumber = Math.round(limitNumber);
    return limitNumber;
}

async function random2sec() {
    await timeout2sec (2000);
    pageNumber = Math.random() * 10;
    pageNumber = Math.round(pageNumber);
    return pageNumber;
}


//create callback function
function myCallBack(callback) {
    request.onreadystatechange = function () {
        (this.readyState == 4 && this.status == 200) 
            ? callback(JSON.parse(this.responseText))
            : console.log ('Huoston we have a problem (calback 1)')
    };
    request.open("GET", `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`);
    request.send();
}

function calbackStart () {
    setTimeout(function () {
        myCallBack(function (callback) {
            console.log('callback result ', callback);
        });
    }, 4000);
}


//create async function    
setTimeout(
    async function () {
        try { 
            await getAsync(limitNumber, pageNumber);
        } catch (error) {
            console.log('Huoston we have a problem (asyncStart1)');
        }
}, 4000);


function asyncStart (limitNumber, pageNumber) {
    request.addEventListener('readystatechange', function() {
        (request.readyState === 4 && request.status === 200)
            ? console.log('async result ', JSON.parse(request.response))
            : console.log ('Huoston we have a problem (asyncStart2)')
    });
    request.open('GET', `http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}`);
    request.send();
}


//create promise function
setTimeout(
    function promisStart () {
    let myPromise = new Promise((promisRes, reject) => {
        request.onreadystatechange = function () {
            (this.readyState === 4 && this.status === 200)
                ? promisRes(this.responseText)
                : console.log ("Huoston we have a problem (promise1)")
            };
        request.open("GET", `http://apistaging.theatre.pp.ua/posts.json? limit=${limitNumber}&page=${pageNumber}`);
        request.send();
    });
    myPromise.then( (promisRes) => {
        console.log('Promise start result ',JSON.parse(promisRes));
    }).catch((reject) => {
        console.log('Huoston we have a problem (promise2)');
    })
}, 4000);



random1sec ();
random2sec ();
calbackStart ();
asyncStart ();


//let myPromisee (limitNumber, pageNumber) =>
//return new Promise((promisRes, reject) => {
//    setTimeout(() => {
//        if (limitNumber < 11 && pageNumber < 11) {
//            promisRes ();
//        } else {
//            reject ('Wrong page or limit number');
//        }
//    
//    }, 4000);
//});
//
//myPromisee.then((successMessage) => {
//  console.log("It is the " + successMessage);
//});

//promise
//https://learn.javascript.ru/promise
//
//function httpGet(random1sec, random2sec) {
//
//return new Promise(function(promisRes, reject) {
//  setTimeout(() = > {
//    let promRequest = new XMLHttpRequest();
//    promRequest.onreadystatechange = function () {
//      if (this.readyState == && this.status == 200) {
//         console.warn(JSON.parse(this.responseText));
//      }
//    };
//    promRequest.open('GET', url: 'http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}');
//    promRequest.send();
//
//    promiseRequest.open('GET', url, true);
//    promiseRequest.onload = function() {
//      if (this.status == 200) {
//        promisRes(this.response);
//      } else {
//        let error = new Error(this.statusText);
//        error.code = this.status;
//        reject(error);
//      }
//    };
//
//    promiseRequest.onerror = function() {
//      reject(new Error("Network Error"));
//    };
//
//    promiseRequest.send();
//  }, 4000);
//});
//
//}
