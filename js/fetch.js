fetch('/js/data.json')
    .then(responseStream => {
        return responseStream.json().then(data => {
            console.log(data);
        });
});


fetch('/js/data.json')
    .then(responseStream2   =>  {
        if (responseStream2.status === 200 ){
            return responseStream2.json()
        } else {
            throw new Error('Request error');
        }
    })
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });