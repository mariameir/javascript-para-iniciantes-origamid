function areaQuadrado(lado){
  return lado;
} 
console.log(areaQuadrado(6));

function pi(){
  return 
}

function pi(){
  return 3.14
}

var total = 5*pi();
console.log(total);

//peso e altura são parametros
function imc (peso, altura){
  var imc= peso/ (altura**2);
  return imc;
}

console.log(imc(80, 1.80)) //80 e 1.80 são argumentos
console.log(imc(80, 1.70)) //80 e 1.80 são argumentos

function corFavorita(cor){ //parametros
  if (cor === 'azul'){
    return 'voce gosta do ceu';
  }else if (cor==='verde'){
    return 'voce gosta do mato';
  }else {
    return 'gosta de nada'
  }
}
console.log(corFavorita('azul')); //argumentos



//argumentos pode, ser funções 
// chamadas de Callback, geralmente são funções que ocorrem apos algum evento
addEventListener('click',function(){
    console.log('clicou');
});
/*
A função possui dois argumentos. Primeiro é a String 'click' a segunda é uma função anônima

Funções anonimas são aquelas em que o nome da função não é definido, escritoas como function()
{} ou ()=>{}*/


/*
Pode ou não retornar um valor
Quando não definimos o return, elas irá retornar undefind. O codigo interno da função é executado normalmente, independente de existir valor do retorn ou não.
*/
function imc2 (peso, altura){
  const imc=peso/(altura**2);
  console.log(imc);
}

imc2(20,1.8)//undefined
console.log(imc2(50,1.8)); //retorna o imc e undefined



/*
Valores retornados 
uma unção pode retornar qualquer tipo de dado até outras funções
*/
function terceiraIdade(idade){
  if (typeof idade !== 'number'){
    return 'Por favor preencha um numero' //bateu num return "cancela" tudo depois dela
  }else if (idade >=60){
    return true;
  }else{
    return false;
  }
  console.log('testando')//teste para provar que depois que batemos em um return ele ignora todo o resto da funcao
}
//cuidado, retornar diferentes tipos de dados na mesma função não é uma boa ideia




/*
Escopo 
Variáveis e funções definidas dentro de um bloco{},
não são visíveis fora dele.
*/                        //parametros
function faltaVisitar(paisesVisitados){
  var totalPaises= 193;
  return `Faltam visitar ${totalPaises-paisesVisitados}`
}

console.log(totalPaises); // erro, totalPaises não definido

/*
Escopo Léxico
Funções conseguem acessar variaveis que foram criadas no contexto pai
*/
var profissao = 'Designer';

function dados() {
  var nome = 'André';
  var idade = 28;
  function outrosDados() {
    var endereco = 'Rio de Janeiro';
    var idade = 29;
    return `${nome}, ${idade}, ${endereco}, ${profissao}`;
  }
  return outrosDados();
}

console.log(dados()); // Retorna 'André, 29, Rio de Janeiro, Designer'

//outrosDados();// retorna um erro 



/*
Hoisting
antes de executar uma função, o JS 'move' todas as funções declaradas para a memoria
*/
imc (80, 1.80); //imc aparece no console

function imc (peso, altura){
  const imc = peso/ (altura**2);
  console.log(imc)
}