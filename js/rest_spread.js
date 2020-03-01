const multiply = (...args) => args.reduce((acc, value) => acc * value, 1)

const sum1 = (...args) => {
    return args.reduce((acc, value) => acc + value, 0)
}

const sum2 = (...rest) => {
    return multiply.apply(undefined, rest);
};

const sum3 = (...rest) => {
    return multiply(...rest);
}

console.log(sum1(5, 5, 5, 2, 3));
console.log(sum2(5, 5, 5, 2, 3));
console.log(sum3(5, 5, 5, 2, 3));

const str = 'Star Wars';
const logArgs = (...args) => { console.log(args); }
logArgs(...str);

const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7];
const arr3 = [...arr1, ...arr2, 8, 9];
console.log(arr1);
console.log(arr2);
console.log(arr3);

const obj1 = {
    test1 : 123,
    subObj :{
        test : 456
    }
};

const obj2 = {...obj1, subObj : {...obj1.subObj}};

console.log(obj2);