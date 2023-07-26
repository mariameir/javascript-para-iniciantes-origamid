/*
Tudo é objeto
Strings, boolean, Number, O bjetos e mais, possuem propriedades e métodos. Por isso são objetos.
*/
var  nome = 'Andre';

nome.length;//5 - length é um propiedade de string
nome.charAt(1);//'n' - charAt é um metodo de string
nome.replace('ré','rei');//Andrei
nome;
// uma string herda propriedades  e metodos do construtor String()


//Number
var altura= 1.8;

altura.toString();//'1.8'
altura.toFixed();//'2'
/*
Por um breve momento o numero é envolvido em um objeto (coerção), tem assim acesso a suias propriedades e metodos
*/

//Funçoes 
function areQuadrado(lado){
  return lado*lado; 
}
areQuadrado.toString();
//function areaQuadrado(lado){
//return lado*lado;
//}
areQuadrado.length;//1


//Elementos do DOOM
var btn = document.querySelector('.btn');

btn.classList.add('blue')//adicionando a classe azul
btn.innerHTML;//clique
btn.addEventListener('click',function(){
  console.log('me sinto oruam')
})


