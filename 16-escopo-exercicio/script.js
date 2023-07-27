// Por qual motivo o código abaixo retorna com erros?
{
  var cor = 'preto';
  var marca = 'Fiat';
  var portas = 4;
}
//console.log(var, marca, portas);
// var é uma palavra reservada e não o nome da variavel



// Como corrigir o erro abaixo?
 const dois = 2;
 function somarDois(x) {
  return x + dois;
}
function dividirDois(x) {
  return x / dois;
}
somarDois(4);
dividirDois(6);



// O que fazer para total retornar 500?
const numero = 50;

for(let numero = 0; numero < 10; numero++) {
  console.log(numero);
}

const total = 10 * numero;
console.log(total);