// nomeie 3 propriedades ou métodos de strings
var nome = 'Meir';
nome.toUpperCase();
nome.toLocaleLowerCase();
nome.length;

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector('.btn');
btn.classList.add('verdao');
btn.innerHTML;//clique
btn.addEventListener('click',function(){
  console.log('iiih')
})



// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
function myFunction() {
  var copyText = document.getElementById("myInput");

  
  copyText.select();
  copyText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(copyText.value);

  alert("Copied the text: " + copyText.value);
}
