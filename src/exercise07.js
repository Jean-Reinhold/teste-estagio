/* E7
**Para o seguinte exercício** considere o array de objetos:
[
    {id: 1, first_name: ‘Juca’, last_name: ‘Da Silva’, age: 42},
    {id: 2, first_name: ‘Daniel’, last_name: ‘Gonçalves’,  age: 21},
    {id: 3, first_name: ‘Matheus’, last_name: ‘Garcia’, age: 28},
    {id: 4, first_name: ‘Gabriel’, last_name: ‘Dorneles’,  age: 21}
]

Encontre o primeiro objeto que possui uma pessoa com a idade menor que 25
e imprima seu nome. Caso não encontre, imprima que nenhum resultado foi encontrado.

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

function getTargetPerson(people) {
  var targetPerson;
  targetPerson = people.find((person) => person.age < 25);

  if (targetPerson !== undefined) {
    return { exists: true, name: getPersonsName(targetPerson) };
  } else {
    return { exists: false };
  }
}

function containsTargetPerson(people) {
  var targetPerson = getTargetPerson(people);

  if (targetPerson.exists) {
    console.log(targetPerson.name);
  } else {
    console.log("Não existe uma pessoa com menos de 25 anos");
  }
}

window.exercise07 = function () {
  console.log("resultado ex7: ");
  containsTargetPerson(people);
};
