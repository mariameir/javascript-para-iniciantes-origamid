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