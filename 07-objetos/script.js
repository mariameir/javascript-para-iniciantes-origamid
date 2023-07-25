/**
Objetos 
Conjunto de variaveis e funcoes, que são chamadas de propriedades e métodos 
 */

var pessoa = {
  nome:"Andre",
  idade: 28,
  profissao: "Designer",
  possuiFaculdade: true,
}

pessoa.nome; //Andre
pessoa.possuiFaculdade; // true

//propriedades e métodos consistem em nome (chave) e valor


//Métodos - é uma propriedade que possui uma função no local do seu valor
var quadrado = {
  lados:4, //propriedade
  area: function(lado){ //metodo
    return lado * lado;
  },
  perimetro : function (lado){ //metodo
    return  this.lados*lado;
  }
}

quadrado.lados;//4
quadrado.area(5)//25
quadrado.perimetro(5)//20

//abreviação de area: function (){} para area(){} no ES6+

var quadradoAbrev ={ //objeto
  lados:4,//propriedade
  area(lado){//metodo
    return lado * lado;
  },
  perimetro(lado){//metodo
    return this.lados*lado;
  }
}

/*
Organizar o código - Obejetos servem para organizar o codigo em pequenas partes reutilizaveis
*/
Math.PI; //Math é objeto. PI é propriedade
Math.random(); //Math é objeto. random é metodo

var  pi = Math.PI;
console.log(pi);

/**
 * Math é um objeto nativo de JavaScript. Já percebeu que console é um objeto e log() um metodo?
 */



//Criar Objeto - Um objeto e criado utilizando as chaves {}
var carro = {};
var pessoa = {};
console.log(typeof carro);


// Dot Notation Get - acesse propriedades de um objeto utilizando o ponto .
var menu = {
  width:800,
  height:50,
  backgroundColor: '#84E',
}

menu.backgroundColor = '#000';
menu.color = 'blue';

menu.esconder = function(){
  console.log('escondi')
}

var bg = menu.backgroundColor; //  '#84E'

/*
Dot  Notation 
Substitua a propriedade utilizando . e o = apos  o nome da mesma 
*/
var menu = {
  width : 800,
  heigth: 50,
  backgroundColor:'#000'
}

menu.backgroundColor= '#000';
console.log(menu.backgroundColor)


//Adicionar propriedades e metodos - basta adicionar um novo nome e definir seu valor
var menu2 ={
  width: 800,
}
menu2.heigth=50;


/*
Palavra-chave this
this irá fazer um referência ao próprio objeto 
*/
var heigth=120;
var menu3={
  with: 800,
  heigth:50,
  metadeHeight(){
    return this.heigth /2;
  }
}

menu3.metadeHeight(); // resulta em 25
// sem o this, retornaria 60


/*
Prótotipo e Herança
O objeto herda propriedades e metodos do objeto que foi utilizado para criar o mesmo.
*/
var menu4= {
  width:800,
}
menu4.hasOwnProperty('width')//true
menu4.hasOwnProperty('heigth')//false
//hasOwnProperty é um metodo de object