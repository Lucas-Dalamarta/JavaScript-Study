const uniqueID = Symbol('Hello');
console.log(uniqueID);

/*  Well known Symbols  */
Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

const arr = [1, 2, 3, 5];
const it = arr[Symbol.iterator]();
while (true) {
    let { value: valor, done: pronto } = it.next();

    if (pronto) {
        break;
    } else {
        console.log(valor);
    }
}
const str = 'Star Wars';

for (let value of str) {
    console.log(value);
}

console.clear();

const obj = {
    values: [1, 2, 3, 4, 5],
    [Symbol.iterator]() {
        let i = 0;

        return {
            next: () => {
                i++;

                return  {
                    value: this.values[i-1],
                    done : i > this.values.length
                };
            }
        };
    }
};

const ite = obj[Symbol.iterator]()

console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());
console.log(ite.next());

for (let value of obj){
    console.log(value);
}

const arr2 = [...obj];

console.log(arr2);