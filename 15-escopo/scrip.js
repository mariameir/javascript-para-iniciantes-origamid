// ESCOPO DE FUNÇÃO - Variáveis declaradaas dentro de funções não são acessadas fora das mesmas
function mostrarCarro(){
  var carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // fusca no console
console.log(carro); // erro, carro is not defined
// escopo evita o comflito entre nomes



// VARIÁVEIS GLOBAL (ERRO) - declarar variaveis sem a palvra chave var, const, let, cria uma variavel que pode ser acessada em qualquer escopo (global). isso é um erro.
function mostrarCarro() {
  carro = 'Fusca';
  console.log(carro);
}

mostrarCarro(); // Fusca
console.log(carro); // Fusca
// 'use strict'  impede isso.



// ESCOPO DE FUNÇÃO (PAI) - variaveis declaradas no escopo pai da função, conseguem ser acessadas pelas funções.
var carro1 = "Fusca";
function mostrarCarro2(){
  var frase = `Meu carro é um ${carro}`;
  console.log(frase);
}
mostrarCarro2();
console.log(carro1);



/*
ESCOPO DE BLOCO
Variaveis criadas com var, vazam o bloco. Por isso com a introdução do ES6 a melhor forma de declararmos uma variavel é utilizando const e let, pois estas respeitam o escopo do bloco
*/
if(true){
  var carro3 = 'Fusca'
  console.log(carro3);
}
console.log(carro3); //Carro



//VAZAR BLOCO - Mesmo com a condição falsa, a variavel ainda sera declarada utilizando o hosting e o valor que ficara como undefined.
if(false) {
  var carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // undefined



// CONST E LET NO LUGAR DE VAR - A partir de agora vamos utilizar apenas let e const para declarar variaveis.
if(true) {
  const carro = 'Fusca';
  console.log(carro);
}
console.log(carro); // erro, carro is not defined



//{} CRIA UM BLOCO - Chaves {} criam um escopo de bloco, não confundir com a criação de objetos = {}
{
  var carro = 'Fusca';
  const ano = 2018;
}
console.log(carro); // Carro
console.log(ano); // erro ano is not defined



// FOR LOOP - Ao utilizar var dentro de um forloop, que é um bloco, o valor do variável utilizada irá vazar e existir fora do loop.
for(var i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // 10



//FOR LOOP COM LET - Com o let evitamos que o número vaze.
for(let i = 0; i < 10; i++) {
  console.log(`Número ${i}`);
}
console.log(i); // i is not defined



//CONST - Mantém o escopo no bloco, impede a redeclaração e impede a modificação do valor da variável, evitando bugs no código.
const mes = 'Dezembro';
mes = 'Janeiro'; // erro, tentou modificar o valor
const semana; // erro, declarou sem valor

const data = {
  dia: 28,
  mes: 'Dezembro',
  ano: 2018,
}

data.dia = 29; // Funciona
data = 'Janeiro'; // erro
//Variáveis com valores constantes devem utilizar o const.



// LET - Mantém o escopo no bloco, impede a redeclaração, mas permite a modificação do valor da variável.
let ano1;
ano1 = 2018;
ano1++;
console.log(ano1); // 2019

let ano1 = 2020; // erro, redeclarou a variável
//Geralmente vamos utilizar o const.
