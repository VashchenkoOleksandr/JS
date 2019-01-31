window.onload = function () {
    const inpName = document.querySelector('input[name=name]');
    document.querySelector('#js_getButton').onclick = function () {
        requestGet('http://localhost:5984/test/hw11', (stringInHTML) => {
            document.querySelector('#js_get4Log').innerHTML = stringInHTML;
        });
    };
    document.querySelector('#js_putButton').onclick = function () {
        requestPut('http://localhost:5984/test/put');
    };
    document.querySelector('#postSend').onclick = function () {
        const postText = `You name is: ${inpName.value}`;
        requestPost(postText);
    };
};

function requestGet(url, callback) {
    const callbackFunction = callback || function (stringInHTML) {};
    const request = new XMLHttpRequest();
    let stringInHTML;
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            console.log('Server ready and have "Ok" status');
            console.log('Ready State =', request.readyState);
            console.log('Server status =', request.status);
            stringInHTML = `Server status = ${request.status}. Ready state = ${request.readyState}. request.response Text = ${request.responseText}`;
            callbackFunction(stringInHTML);
        }
    };
    request.open('GET', url);
    request.send();
}

function requestPut(putURL) {
    const putData = {};
    putData.firstname = 'Sasha';
    putData.lastname = 'Vashchenko';
    const putReq = JSON.stringify(putData);
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 201) {
            console.log('Server finish PUT processing');
            console.log('Ready State =', request.readyState);
            console.log('Server status =', request.status);
            const stringInHTML = `Server status = ${request.status}. Ready state = ${request.readyState}. request.response Text = ${request.responseText}. Input text ${putReq}. File URL = ${putURL}`;
            document.querySelector('#js_putLog').innerHTML = stringInHTML;
        } else if (request.status === 409) {
            console.log('Ready State PUT =', request.readyState);
            console.log('Server status =', request.status);
            document.querySelector('#js_putLog').innerHTML = 'We have a some problem. ERROR 409 (Document update conflict). Delete the put document or change the put request name';
        }
    };
    request.open('PUT', putURL, true);
    request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    request.send(putReq);
}

function requestPost(postText) {
    const request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        console.log('Ready State =', request.readyState);
        console.log('Server status =', request.status);
        if (request.readyState === 4 && request.status === 200) {
            if (request.responseText === '1') {
                document.querySelector('form').style.display = 'none';
                document.querySelector('#js_postLog').innerHTML = 'POST REQUEST IS WORKING. Response text get';
            } else {
                document.querySelector('#js_postLog').innerHTML = 'We have a problem. ';
            }
        }
    };
    request.open('POST', 'form.php');
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.send(postText);
}
