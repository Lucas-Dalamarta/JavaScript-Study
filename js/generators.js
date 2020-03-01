const obj = {
    values: [1, 2, 3, 4, 5],
    *[Symbol.iterator]() {  //  MetaProp
        for (var i = 0 ; i < this.values.length;i++){
            yield this.values[i];
        }
    }
};

for (let value of obj){
    console.log(value);
}

function* hello() {
    console.log('Hello');
    yield 1;

    console.log('From');
    const value = yield 2;

    console.log(value);
}

const it2 = hello();
console.log(it2.next());
console.log(it2.next());
console.log(it2.next('Outside!'));


function* naturalNumb(){
    let number = 0;

    while(true){
        yield number;
        number++;
    }
}

const it3 = naturalNumb();

console.log(it3.next());
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());
console.log(it3.next());