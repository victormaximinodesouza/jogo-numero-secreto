let chat = parseFloat(prompt('Digite um numero'));
let chat1 = parseFloat(prompt('Digite um numero'));
let chat2 = parseFloat(prompt('Digite um numero'));


function msgTela(nota1, nota2, nota3){
    let resultado = nota1 + nota2 + nota3 / 2;
    alert(`${resultado}`);
}  
msgTela(chat);