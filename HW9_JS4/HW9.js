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
let limitNumber, pageNumber;

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


//promise
//https://learn.javascript.ru/promise

function httpGet(random1sec, random2sec) {

return new Promise(function(resolve, reject) {
  setTimeout(() = > {
    let promRequest = new XMLHttpRequest();
    promRequest.onreadystatechange = function () {
      if (this.readyState == && this.status == 200) {
         console.warn(JSON.parse(this.responseText));
      }
    };
    promRequest.open('GET', url: 'http://apistaging.theatre.pp.ua/posts.json?limit=${limitNumber}&page=${pageNumber}');
    promRequest.send();

    promiseRequest.open('GET', url, true);
    promiseRequest.onload = function() {
      if (this.status == 200) {
        resolve(this.response);
      } else {
        let error = new Error(this.statusText);
        error.code = this.status;
        reject(error);
      }
    };

    promiseRequest.onerror = function() {
      reject(new Error("Network Error"));
    };

    promiseRequest.send();
  }, 4000);
});

}



random1sec ();
random2sec ();
httpGet ();



let myPromise (limitNumber, pageNumber) =>
return new Promise((resolve, reject) => {
    setTimeout(() => {
        if (limitNumber < 11 && pageNumber < 11) {
            resolve ();
        } else {
            reject ('Wrong page or limit number');
        }
    
    }, 4000);
});

myPromise.then((successMessage) => {
  console.log("It is the " + successMessage);
});