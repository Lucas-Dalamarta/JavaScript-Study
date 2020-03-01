var arr = ['Luke', 'Leia', 'Han', ['Vader']];
var Luke1 = arr[0];
var Leia1 = arr[1];
var Han1 = arr[2];
var Vader1 = arr[3][0];

var [Luke2, Leia2, Han2, [Vader2]] = [...arr];  //  Destructuring Assignment
console.log(Vader1);
console.log(Vader2);

var obj = {
    name: 'Anakin',
    props: {
        age: 22,
        favColors: ['black', 'green']
    }
}
var name1 = obj.name;
var { name: name2 } = obj;  //  Destructuring Assignment
console.log(name1);
console.log(name2);

var age1 = obj.props.age;
var favColors1 = obj.props.favColors;
console.log(favColors1);

var { props: { age: age2, favColors: [color1, color2] } } = obj;   //  Destructuring Assignment
console.log(age2);
console.log(color1);
console.log(color2);

var chars = [{ name: 'Yoda', Jedi: true }];

var char1 = chars[0].name;
console.log(char1);

var [{ name: char2 }] = chars;  //  Destructuring Assignment
console.log(char2);

//  Functions

const sum1 = (arr) => {
    return arr[0] + arr[1];
}
console.log(sum1([5, 5]));


const sum2 = ([a, b] = []) => {   //  Destructuring Assignment
    return a + b;
}
console.log(sum2([5, 5]));

const sum3 = ([a, b] = [10,-5]) => {   //  Destructuring Assignment w/ default Values
    return a + b;
}
console.log(sum3());
console.log(sum3([15,10]));