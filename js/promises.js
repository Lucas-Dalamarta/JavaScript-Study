//  Promises

const doSomethingPromise = () => new Promise((resolve , reject) =>{
    setTimeout(function(){
        resolve('First Data');
    },1500);
});

const doOtherThingPromise= () => new Promise((resolve , reject) =>{
    setTimeout(function(){
        resolve('Second Data');
    },1000);
});

Promise.all([doSomethingPromise() ,doOtherThingPromise()])  //  Returns both Promisses resolves in a []
    .then((data) => {
        console.log(data[0].split(''));
        console.log(data[1].split(''));
}).catch(err => {
    console.log(err);
});

Promise.race([doSomethingPromise() ,doOtherThingPromise()])
    .then((data) => {
        console.log(data);
    })
    .catch(err => {
    console.log(err);
    });

doSomethingPromise()
    .then(data => {
        console.log(data.split(''));
        return doOtherThingPromise()
    })
    .then(data2 => console.log(data2.split('')))
    .catch(error => console.log(error));

// doOtherThingPromise.then(data => console.log(data));
/*
<state>

Pending
Fulfilled
Rejected
*/

//  Callbacks
function doSomething(callback) {
    setTimeout(function () {
        callback('First data');
    }, 1000);
}

function doOtherThing(callback) {
    setTimeout(function () {
        callback('Second data');
    }, 1000);
}

function doAll() {
    try {
        doSomething(function (data) {
            var processedData1 = data.split('');

            try {
                doOtherThing(function (data2) {
                    var processedData2 = data2.split('');

                    try {
                        setTimeout(() => {
                            console.log(processedData1, processedData2);
                        }, 1000);
                    } catch (err) {
                        //Handle Error
                    }
                });
            } catch (err) {
                //Handle Error
            }
        });
    } catch (err) {
        //Handle Error
    }
}

// doAll();