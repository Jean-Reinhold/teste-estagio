/* E2
  Dado a seguinte string `‘teste 1 de 2 string 3’`,
  substitua todas as ocorrências de números por `$`.
*/

function changeNumebersToDollarSigns(phrase) {
  var regexNumbers = /\d/gi;

  return phrase.replace(regexNumbers, "$");
}

window.exercise02 = function () {
  var stringTest = "teste 1 de 2 string 3";

  console.log("resultado ex2: ");
  console.log(changeNumebersToDollarSigns(stringTest));
};
