window.onload = function () {

    let inp_name = document.querySelector('input[name=name]');
    
    
    document.querySelector('#js_getButton').onclick = function () {
        requestGet('http://localhost:5984/test/hw11', function (stringInHTML) {
            document.querySelector('#js_get4Log').innerHTML = stringInHTML;
        });
    }
    
    document.querySelector('#js_putButton').onclick = function () {
        requestPut ('http://localhost:5984/test/put');
    }

    document.querySelector('#postSend').onclick = function () {
        let postText = 'You name is:'+ inp_name.value;
        requestPost (postText);
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




function requestPost (postText) {
    var request = new XMLHttpRequest();

    request.onreadystatechange = function () {
            console.log('Ready State =', request.readyState);
            console.log('Server status =', request.status);
        if (request.readyState === 4 && request.status === 200) {
                document.querySelector('#js_postLog').innerHTML = 'FINALLY POST REQUEST IS WORKING. Thank you Serhii ' + request.responseText;  
//            if (request.responseText == '1') {
//                document.querySelector('form').style.display = 'none';    
//                document.querySelector('#js_postLog').innerHTML = 'FINALLY POST REQUEST IS WORKING.'  
//            } else {
//                document.querySelector('#js_postLog').innerHTML = 'We have a problem. '  
//            };
        };
    };
    request.open("POST", 'form.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(postText);
};