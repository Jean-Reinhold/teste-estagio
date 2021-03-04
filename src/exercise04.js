/* E4
 Utilizando a api da viacep (https://viacep.com.br/) e o seu cep como entrada,
 imprima o seu endereço no formato `‘ENDERECO, NUMERO, CIDADE/ESTADO’`.
 Utilize a fetch API (https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API) para realizar a requisição.
*/

function formatCepData(cepData) {
  return (
    cepData["logradouro"] +
    ", " +
    cepData["cep"] +
    ", " +
    cepData["localidade"] +
    "/" +
    cepData["uf"]
  );
}

function printCepData(cep) {
  fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then((response) => {
      response.json().then((data) => {
        console.log(formatCepData(data));
      });
    })
    .catch();
}

window.exercise04 = function () {
  const cep = "96020000";
  console.log("resultado ex4: ");
  printCepData(cep);
};
