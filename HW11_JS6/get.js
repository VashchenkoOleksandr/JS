window.onload = function () {

    document.querySelector('#js_getButton').onclick = function () {
        requestGet('http://localhost:5984/test/hw11', function (stringInHTML) {
            document.querySelector('#js_get4Log').innerHTML = stringInHTML;
        });
    }
    
    document.querySelector('#js_putButton').onclick = function () {
        requestPut ('http://localhost:5984/test/put');
    }

    document.querySelector('#js_postButton').onclick = function () {
        requestPost ('http://localhost:5984/test/hw11');
    }
     
}
 
//Розбирався з запитами на сервер і чому readyState === 4 
function requestGet(url, callback) {
    let callbackFunction = callback || function (stringInHTML) {};
    let request = new XMLHttpRequest();
    let stringInHTML;
    request.onreadystatechange = function () {
        if (request.readyState === 1 && request.status === 0) {
            console.log('Server sleep request not initialized')
            console.log('Ready State =', request.readyState);
            console.log('Server status =',request.status);
            stringInHTML = "Server status = " + request.status + ". Ready state = " + request.readyState + ". request.response Text = "+request.responseText;
            document.querySelector('#js_get1Log').innerHTML = stringInHTML;
        };
        if (request.readyState === 2 && request.status === 200) {
            console.log('Server recived request')
            console.log('Ready State =', request.readyState);
            console.log('Server status =',request.status);
            stringInHTML = "Server status = " + request.status + ". Ready state = " + request.readyState + ". request.response Text = "+request.responseText;
            document.querySelector('#js_get2Log').innerHTML = stringInHTML;
        };
        if (request.readyState === 3 && request.status === 200) {
            console.log('Server start processing request')
            console.log('Ready State =', request.readyState);
            console.log('Server status =',request.status);
            stringInHTML = "Server status = " + request.status + ". Ready state = " + request.readyState + ". request.response Text = "+request.responseText;
            document.querySelector('#js_get3Log').innerHTML = stringInHTML;
        };
        if (request.readyState === 4 && request.status === 200) {
            console.log('Server ready and have "Ok" status')
            console.log('Ready State =', request.readyState);
            console.log('Server status =',request.status);
            
            stringInHTML = "Server status = " + request.status + ". Ready state = " + request.readyState + ". request.response Text = "+request.responseText;
            callbackFunction (stringInHTML);
        };
    };
    
    request.open('GET', url);
    request.send();
};


// PUT запит
function requestPut (putURL) {

    let putData = {};
        putData.firstname = 'Sasha';
        putData.lastname  = 'Vashchenko';
    let putReq = JSON.stringify(putData);

    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 201) {
            console.log('Server finish PUT processing')
            console.log('Ready State =', request.readyState);
            console.log('Server status =',request.status);
            let stringInHTML = 'Server status = ' + request.status + '. Ready state = ' + request.readyState + '. request.response Text = '+request.responseText+'. Input text '+putReq+'. File URL = '+ putURL;
            document.querySelector('#js_putLog').innerHTML = stringInHTML;
        } else if (request.status === 409) {
            console.log('Ready State =', request.readyState);
            console.log('Server status =',request.status);
            document.querySelector('#js_putLog').innerHTML = 'We have a some problem. ERROR 409 (Document update conflict). Delete the put document or change the put request name';
        }; 
    };
    
    request.open("PUT", putURL, true);
    request.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    request.send(putReq);
};


    // POST запит ERROR 400 (Bad Request). 
    //{error: "bad_request", reason: "Referer header required."} 
    //error: "bad_request" 
    //reason: "Referer header required."


function requestPost (postURL) {
    var request = new XMLHttpRequest();
     let postData = {};
        postData.firstname2 = 'Sasha';
        postData.lastname2  = 'Vashchenko';
    let postReq = JSON.stringify(postData);
//    let firstname = 'Sasha';
//    let lastname = 'Vashchenko';
//    let postReq = 'name=' + encodeURIComponent(firstname) + '&surname=' + encodeURIComponent(lastname);
    request.onreadystatechange = function () {
            console.log('Ready State =', request.readyState);
            console.log('Server status =',request.status);
    if (request.readyState === 4 && request.status === 200) {
        console.log('Server finish POST processing')
        console.log('Ready State =', request.readyState);
        console.log('Server status =',request.status);
        let stringInHTML = 'Server status = ' + request.status + '. Ready state = ' + request.readyState + '. request.response Text = '+request.responseText+'. Input text '+postReq+'. File URL = '+ postURL;
        document.querySelector('#js_postLog').innerHTML = stringInHTML;
        } else if (request.status === 400) {
            console.log('Ready State =', request.readyState);
            console.log('Server status =',request.status);
            document.querySelector('#js_postLog').innerHTML = 'We have a some problem. ERROR 400 (Bad Request. Referer header required). I do not know what to do';
        }; 
    };
    request.open("POST", postURL, true);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(postReq);
};

//
//function requestPost (postURL) {
//   let postRequest = new XMLHttpRequest();
//   let json  = JSON.stringify({
//       "name":"Sasha"
//   });
//
//   postRequest.onreadystatechange = function () {
//       if (postRequest.readyState === 4 && postRequest.status === 200) {
//           console.log('Server ready and have "Ok" status');
//           console.log('RESULT ='+ result);
//           document.querySelector('#js_postLog').innerHTML = 'It is finaly works';
//       }
//   }
//
//   postRequest.open('POST', postURL, true);
//   postRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
////Тут виникає помилка 400 (Bad Request). Вже все прочитав, що вона означає і чому виникає.
//   postRequest.send(json);
//}
