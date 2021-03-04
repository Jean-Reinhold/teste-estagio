/* E3
  Dado o objeto `{4: ‘a’, 3: ‘e’, 1: ‘i’, 5: ‘s’}`,
  substitua os números na frase `‘T35t3 d3 35t4g1o’` conforme a sua respectiva letra
*/
function callbackReplacer(key) {
  const numberToLetterMap = { 4: "a", 3: "e", 1: "i", 5: "s" };
  return numberToLetterMap[key];
}
function replaceNumberWithLetter(phrase) {
  var regexTargetNumbers = /[1345]/gi;

  return phrase.replace(regexTargetNumbers, callbackReplacer);
}

window.exercise03 = function () {
  const phrase = "T35t3 d3 35t4g1o";
  console.log("resultado ex3: ");
  console.log(replaceNumberWithLetter(phrase));
};
