/*
Array - é um grupo de valores geralmente relacionados. Servem para guardarmos diferentes valores em uma única variável
*/
var videoGames = ['Switch', 'PS5', 'Xbox']
videoGames[0];
videoGames[2];
// Acesse um elemento do array utilizando [posição]


//Método e propriedades de uma array
var videoGames1 = ['PC','XBOX','PS5','Switch']

videoGames1.pop(); //remove o ultimo item e retorna ele
videoGames1.push('3DS'); // adiciona um item ao final do array
videoGames1.length; // 3

//Existem diversos de outros metodos, como map, reduce, forEach


// FOR LOOP -  fazem algo repetidamente até que uma condição seja atingida.
for (var numero = 0; numero < 10; numero++){
  console.log(numero);
}
// o for loop possui 3 partes, inicio, condição, incremento


//WHILE LOOP 
var i = 0;
while (i < 10){
  console.log(i);
  i++;
}
// o for loop é mais comum


//ARRAYS E LOOPS IMPORTANTE
var videoGames2 = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0; i<videoGames2.length; i++){
  console.log(videoGames2[i]);
}
// o for loop é mais comum


//BREAK - o loop irá parar caso encontre a palavra break
var videoGames3 = ['Switch', 'PS4', 'XBox', '3DS'];
for (var i = 0 ; i < videoGames3.length; i++){
  console.log(videoGames3[i]);
  if(videoGames3[i] =='PS4'){
    break; 
  }
}


/*
FOREACH
forEach é um método que executa uma função para cada idtem do Array. É uma forma mais simples de utilizarmos um loop com array (ou array-like)
*/
var videoGames4 = ['Switch', 'PS4', 'XBox', '3DS'];
videoGames4.forEach(function(item){
  console.log(item);
});
//o argumento item sera direcionando dinamicamente
// podemos passar os seguintes parametros item, index, array


// NÃO SE CONFUNDA COM A SINTEXE
var numero = 0;
var maximo = 50;
for(;numero < maximo;) {
  console.log(numero);
  numero++;
}
//Não aconselho escrever da forma acima, mas funciona normalmente.