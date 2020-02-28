//  Arrays
const people = ['Padme', 'Luke', 'Leia', 'Han'];

people.push('Anakin');      //  Inserts Anakin into Array
people.shift();             //  Removes Padme from Array
people[3] = 'Darth Vader';  //  Replace Anakin for Darth Vader


var Characthers = [{ nome: "Luke", idade: 23, sabre: false }, { nome: "Yoda", idade: 500, sabre: true }, { nome: "Anakin", idade: "57", sabre: true }, { nome: "Leia", idade: "23", sabre: false }, { nome: "Rey", idade: "25", sabre: true }];
function retornaJedi(Personagens) {
    for (i in Personagens) {
        if (Personagens[i].sabre === true) {
            console.log(Personagens[i].nome + " é um Jedi , e sua idade é " + Personagens[i].idade + ".");
        } else {
            console.log(Personagens[i].nome + " não é um Jedi.");
        }
    }
    return;
}


retornaJedi(Characthers);