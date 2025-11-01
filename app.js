// Manipulando textos

/*let titulo = document.querySelector('h1') // seleciona o h1 do html

titulo.innerHTML = 'Hora do desafio'; 

let paragrafo = document.querySelector('p');
paragrafo.innerText = 'escolha um numero entre 0 e 20';*/


let listaDeNumeroSorteados = [];
let numeroMaximo = 100;
let numeroSecreto = 5;
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsivevoice.speak(texto, 'Brazilian Portuguese Female' , {rate:1.2});
}


function exibirMsgInicial(){
    exibirTextoNaTela('h1', 'Jogo do numero secreto');
    exibirTextoNaTela('p', 'Escolha um numero entre 0 e 10');
}
exibirMsgInicial();



function verificarChute(){
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto){
        exibirTextoNaTela('h1' , 'Acertou');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o numero Secreto ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p' , mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if(chute > numeroSecreto){
            exibirTextoNaTela('p' , 'O numero secreto é menor');
        } else{
            exibirTextoNaTela('p' , 'O numero secreto é maior');
        }
        tentativas ++;
        LimparCampo();
    }
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroMaximo + 1);
    let quantidadeDeElementos = listaDeNumeroSorteados.length;

    if(quantidadeDeElementos == numeroMaximo ){
        listaDeNumeroSorteados = []; //lista vazia
    } 
    if(listaDeNumeroSorteados.includes(numeroEscolhido)){//Verificar se o elemento está na lista
        return gerarNumeroAleatorio();
    } else{
        listaDeNumeroSorteados.push(numeroEscolhido);
        console.log(listaDeNumeroSorteados); //Adiciona item ao final da lista
        return numeroEscolhido;
    }
}

function LimparCampo(){
    chute = document.querySelector('input'); // essa função irá limpar o campo de texto
    chute.value= ''; //String vazio
}

function reiniciarjogo(){
    numeroSecreto = gerarNumeroAleatorio();
    LimparCampo();
    tentativas = 1;
    exibirMsgInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);

}
