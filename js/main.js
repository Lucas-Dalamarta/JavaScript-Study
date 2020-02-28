//  Basics
var name = "Luke Skywalker";
var idade = 23;
var idade2 = 10;
var frase = "Naruto é melhor que Boruto"
console.log(idade + idade2);
console.log(frase.replace("Naruto", "Dragon Ball"));


//  Arrays
var lista = ["Leia", "Luke", "Han"];
console.log(lista[1]);
lista.push("C3-PO");
console.log(lista);
console.log(lista.length);
console.log(lista.join(" | "));

//  Dict
var Characthers = [
    { nome: "Luke", idade: 23, sabre: false },
    { nome: "Yoda", idade: 500, sabre: true }
];
console.log(Characthers[1]);

//  Conditionals
if (Characthers[0].sabre === false) {
    console.log(Characthers[0]);
}

// For Loop
Characthers.push({ nome: "Anakin", idade: "57", sabre: true });
for (i in Characthers) {
    if (Characthers[i].sabre === true) {
        console.log(Characthers[i]);
    } else {
        console.log(Characthers[i].nome + " is not a Jedi yet");
    }
}

//  While Loop
char = { nome: "Leia", idade: "23", sabre: false };
Characthers.push(char);
Characthers.push({ nome: "Rey", idade: "25", sabre: true });
var item = 0;
while (item < Characthers.length) {
    if (Characthers[item].sabre === true) {
        console.log(Characthers[item]);
    } else {
        console.log(Characthers[item].nome + " is not a Jedi yet");
    }
    item++;
}

//  Date
var data = new Date();
console.log("Hoje é : " + data.getDate() + "/" + (data.getMonth() + 1) + "/" + data.getFullYear());