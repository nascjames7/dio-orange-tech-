//Funções

function soma(n1, n2){

    return (n1 + n2);
}

//O alert mostra a resposta numa caixa de diálogo.
alert(soma(5,10));

//**********************************************//

function setReplace(frase, nome, novoNome){

    //Substiui o nome contido na frase pelo novo nome.
    return frase.replace(nome, novoNome);
}

alert(setReplace("Vai Japão", "Japão", "Brasil"));

//*******************************************************//

var validar = 0;

function validarIdade(idade){

    var validar;

    if(idade >= 18){

        validar = true;

    }else validar = false;

    return validar;
}

//Lê a variável idade que será inserida após a apresentação da pergunta na caixa de diálogo.
var idade = prompt("Qual a sua idade?");
//Imprime o validar. Se o validar fosse declarado globalmente fora do escopo.
//console.log(validarIdade(idade));
console.log(validar);

//******************************************//

//Tipos de Função

//Função declarativa
function funcao(){

    console.log("Sou a mensagem de uma função declarativa.");
}

funcao();

//********************************** */

//Expressão de função 
var funcao = function funcao(){

    console.log("Sou a mensagem de uma função de expressão.");
}

funcao();

//********************************** */

//Arrow function
var funcao = () => {

    console.log("Sou uma arrow function");
}

funcao();

