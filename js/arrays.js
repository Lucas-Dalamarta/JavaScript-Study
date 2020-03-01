//  Arrays
const people = ['Padme', 'Luke', 'Leia', 'Han'];

people.push('Anakin');      //  Inserts Anakin into Array
people.shift();             //  Removes Padme from Array
people[3] = 'Darth Vader';  //  Replace Anakin for Darth Vader


var Characthers = [
    { nome: "Luke", idade: 23, sabre: false },
    { nome: "Yoda", idade: 500, sabre: true },
    { nome: "Anakin", idade: 57, sabre: true },
    { nome: "Leia", idade: 23, sabre: false },
    { nome: "Rey", idade: 25, sabre: true }
];

var retornaJedi = (Personagens) => {
    for (i in Personagens) {
        Personagens[i].sabre ? mensagem = Personagens[i].nome + ' é um Jedi' : mensagem = Personagens[i].nome + ' não é um Jedi';
        console.log(mensagem);
    }
}
retornaJedi(Characthers);