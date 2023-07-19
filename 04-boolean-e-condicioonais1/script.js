var possuiGraducao = false;
var possuiDoutorado = false;

if (possuiGraducao) {
  console.log("Possui graduação.");
  var x = 10;
} else if (possuiDoutorado) {
  console.log("Possui doutorado.");
} else {
  console.log("Não possui nada.");
}

/*
TRUTHY E FALSY
Existem valores que retornam true e outros que retornam false quando verificados em uma expressão booleana.
Falsos
if(false)
if(0) // ou -0
if(NaN)
if(null)
if(undefined)
if('') // ou "" ou ``

Verdadeiros
if(true)
if(1)
if(' ')
if('andre')
if(-5)
if({})
*/

nome = "meir";

if (nome) {
  console.log(nome);
} else {
  console.log("Nome invalido");
}

var time = "internacional";

switch (time) {
  case "palmeiras":
    console.log("Tricampeão");
    break;
  case "flamengo":
    console.log("meeh");
    break;
  case "gremio":
    console.log('união palio');
    break;
    default:
      console.log('time invalido')

}


//EXERCÍCIO
// Verifique se a sua idade é maior do que a de algum parente
// Dependendo do resultado coloque no console 'É maior', 'É igual' ou 'É menor'
var minhaIdade = 24;
var idadeParente = 56;

if (minhaIdade > idadeParente){
  console.log('é maior')
}if (minhaIdade == idadeParente){
  console.log('é igual')
}if (minhaIdade < idadeParente){
  console.log('é menor')
}

// Qual valor é retornado na seguinte expressão?
var expressao = (5 - 2) && (5 - ' ') && (5 - 2);
console.log(`aaaaa ${expressao}`)
// true and true and true
// ultimo true ou primeiro false = 3. então retorna 3

// Verifique se as seguintes variáveis são Truthy ou Falsy
var nome = 'Andre'; //Truthy
var idade = 28; // Truthy
var possuiDoutorado = false; //Falsy
var empregoFuturo; //Falsy
var dinheiroNaConta = 0; //Falsy

console.log(!!nome, !!idade, !!possuiDoutorado, !!empregoFuturo, !!dinheiroNaConta)

// Compare o total de habitantes do Brasil com China (valor em milhões)
var brasil = 207;
var china = 1340;

if(brasil >china){
  console.log('brasil maior que china');
} else{
  console.log('brasil menor que china');
}

// O que irá aparecer no console?
if(('Gato' === 'gato') && (5 > 2)) {
  console.log('Verdadeiro');
} else {
  console.log('Falso');
}
//falso

// O que irá aparecer no console?
if(('Gato' === 'gato') || (5 > 2)) {
  console.log('Gato' && 'Cão');
} else {
  console.log('Falso');
}

// o ultimo true= cão

