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
//Imprime o validar. 
console.log(validarIdade(idade));


//******************************************//