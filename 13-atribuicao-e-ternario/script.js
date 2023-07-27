// Operadores de Atribuição - podem funcinar como formas abreviadas
var x = 5;
var y= 10;

x += y // x = x + y (15)
x -+ y // x = x - y (-5)
x *= y // x =  x * y (50)
x /= y // x = x / y (0.5)
x %= y // x = x % y (0)
x **= y // x = x ** y (97656225)

let numero = 20;
let numero2 = 10;
numero += numero2 //numero = numero +numero2
console.log(numero);


//OPERDOR TERNARIO - Abreviação de condicionais com if e else 
var idade = 12;
var podeBeber = (idade >=18) ? 'Pode beber' : 'Não pode beber';
console.log(podeBeber); // pode beber

// condição            ? = se true                 : = se false
//Geralmente utilizado quando precisavos atribuir um valor para uma variavel, dependendo de uma condição 



// IF ABREVIADO - Não é necesseario abrir e fechar as chaves {} quando retornamos apenas uma linhas de codigo
var possuiFaculdade = true;
if (possuiFaculdade) console.log('Possui faculdade');
else console.log('Não possui faculdae');


// ou 
if (possuiFaculdade) 
  console.log('Possui faculdade');
else
  console.log('Não possui faculdae');
//Eu particularmente prefiro a segunda opção aqui.