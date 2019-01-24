window.onload = function () {
    document.querySelector('#requestButton').onclick = function () {
        requestGet();
    }
}

function requestGet() {
    let request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === 1 && request.status === 0) {
            console.log('Server sleep request not initialized')
            console.log('Ready State =', request.readyState);
            console.log('Server status =',request.status);
        }
        if (request.readyState === 2 && request.status === 200) {
            console.log('Server recived request')
            console.log('Ready State =', request.readyState);
            console.log('Server status =',request.status);
        }
        if (request.readyState === 3 && request.status === 200) {
            console.log('Server start processing request')
            console.log('Ready State =', request.readyState);
            console.log('Server status =',request.status);
        }
        if (request.readyState === 4 && request.status === 200) {
            console.log('Server ready and have "Ok" status')
            console.log('Ready State =', request.readyState);
            console.log('Server status =',request.status);
        }
    }
    
    request.open('GET', 'http://localhost:5984/test/hw11');
    request.send();
}



