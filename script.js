// VARIÁVEIS => Um espaço da memória do computador que guardamos algo (um numero, uma letra, um texto, uma imagem)
// FUNÇÃO => Um trecho de código que só é executado quando é chamado

//"assync" tem que vir antes da função para avisar que os dados
//da função tem que ir buscar em um servidor externo
//"await" temos que pedir para o html esperar o servidor responder
//"fetch" ferramenta que vai ate o servidor buscar a informação

let chave = "dee171899a7673302e9eff75f1b0f843";

function colocarNaTela(dados) {
  console.log(dados);
  document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".descricao").innerHTML = dados.weather[0].description;
  document.querySelector(".icone").src =
    "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}

async function buscarCidade(cidade) {
  let dados = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      cidade +
      "&appid=" +
      chave +
      "&lang=pt_br" +
      "&units=metric"
  ).then((resposta) => resposta.json());

  colocarNaTela(dados);
}
//then é então
//Aqui eu estou criando uma função.
//Vai la no html no button e add o evento do click com essa função abaixo.
function cliqueiNoBotao() {
  //aqui vamos capturar o que esta dentro do input
  //JS vai la no html procurar uma class que se chama input-cidade
  let cidade = document.querySelector(".input-cidade").value;
  //com o value o js vai trazer somente o valor que esta dentro do input.

  buscarCidade(cidade);
}

//Aqui eu estou chamando a função.

//mario();
