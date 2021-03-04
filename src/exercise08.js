/* E8
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Imprima todos os elementos em que a idade é menor que 30.

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

function printPeopleUnder30(people) {
  var peopleUnder30 = people.filter((person) => person.age < 30);

  console.log("As pessoas com menos de 30 anos são:");

  for (var person of peopleUnder30) {
    console.log(getPersonsName(person) + "\n");
  }
}

window.exercise08 = function () {
  console.log("resultado ex8: ");
  printPeopleUnder30(people);
};
