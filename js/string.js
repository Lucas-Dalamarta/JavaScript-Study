//  String
var texto = 'Star Wars';

console.log('Text size of ' + texto + ' is ' + texto.length);
console.log(texto.replace('Wars', 'Trek') + ' is a saga i have not watched yet!'); // if a function is used inside another , it wont change the original value
console.log(texto); //  Still prints 'Star Wars'

texto = texto.replace('Wars', 'Trek');
console.log(texto); //  Will print 'Star Trek'