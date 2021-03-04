/* E1
  Crie uma função que recebe duas strings
  e retorna a de maior comprimento.
*/

function getLargestString(string1, string2) {
  if (string1.length >= string2.length) {
    return string1;
  } else {
    return string2;
  }
}
window.exercise01 = function () {
  const string1 = "teste";
  const string2 = "estagio";
  console.log("resultado ex1: ");
  console.log(getLargestString(string1, string2));
};
