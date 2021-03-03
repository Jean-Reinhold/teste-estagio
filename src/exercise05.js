/* E5
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: "Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Imprima uma mensagem de saudação com o nome completo para cada um dos objetos.

Ex.:
Olá, Fulano de tal!
Olá, Juca da silva!
...

*/

const people = [
  { id: 1, first_name: "Juca", last_name: "Da Silva", age: 42 },
  { id: 2, first_name: "Daniel", last_name: "Gonçalves", age: 21 },
  { id: 3, first_name: "Matheus", last_name: "Garcia", age: 28 },
  { id: 4, first_name: "Gabriel", last_name: "Dorneles", age: 21 }
];

function getPersonsName(person) {
  return person["first_name"] + " " + person["last_name"];
}

function salutePerson(name) {
  console.log("Olá " + name + "!");
}

function saluteAllPeople(people) {
  var name;
  for (var person of people) {
    name = getPersonsName(person);
    salutePerson(name);
  }
}

window.exercise05 = function () {
  console.log("resultado ex5: ");
  saluteAllPeople(people);
};
