window.onload = function () {
    document.querySelector('#js_getButton').onclick = function () {
        requestGet('http://localhost:5984/test/hw11', function (stringInHTML) {
            document.querySelector('#js_get4Log').innerHTML = stringInHTML;
        });
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
        }
        if (request.readyState === 2 && request.status === 200) {
            console.log('Server recived request')
            console.log('Ready State =', request.readyState);
            console.log('Server status =',request.status);
            stringInHTML = "Server status = " + request.status + ". Ready state = " + request.readyState + ". request.response Text = "+request.responseText;
            document.querySelector('#js_get2Log').innerHTML = stringInHTML;
        }
        if (request.readyState === 3 && request.status === 200) {
            console.log('Server start processing request')
            console.log('Ready State =', request.readyState);
            console.log('Server status =',request.status);
            stringInHTML = "Server status = " + request.status + ". Ready state = " + request.readyState + ". request.response Text = "+request.responseText;
            document.querySelector('#js_get3Log').innerHTML = stringInHTML;
        }
        if (request.readyState === 4 && request.status === 200) {
            console.log('Server ready and have "Ok" status')
            console.log('Ready State =', request.readyState);
            console.log('Server status =',request.status);
            
            stringInHTML = "Server status = " + request.status + ". Ready state = " + request.readyState + ". request.response Text = "+request.responseText;
            callbackFunction (stringInHTML);
        }
    }
    
    request.open('GET', url);
    request.send();
}


//Супер простий спосіб створити POST 
window.onload = function () {
    let requestText = document.querySelector('#js_postText');
        
    document.querySelector('#js_postButton').onclick = function () {
        let result = '&age2'+ requestText.value;
        requestPost (result, 'http://localhost:5984/test/hw11');
    }
}

function requestPost (result, postURL) {
    let postRequest = new XMLHttpRequest();
    
    postRequest.onreadystatechange = function () {
        if (postRequest.readyState === 4 && postRequest.status === 200) {
            console.log('Server ready and have "Ok" status');
            document.querySelector('#js_postLog').innerHTML = 'It is finaly works';
        }
    }
    
    postRequest.open('POST', postURL, true);
    postRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    postRequest.send(result);
}

