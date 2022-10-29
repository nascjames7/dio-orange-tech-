//Operações com estruturas condicionais

var jogador1 = 0;
var jogador2 = 0;
var placar;

//Ternário
((jogador1 != (-1)) && (jogador2 != (-1))) ? console.log("Os jogadores são válidos") : console.log("Os jogadores são inválidos");

//If/if-else
if(jogador1 > 0 && jogador2 == 0){

    console.log("jogador1 marcou ponto");
    placar = jogador1 > jogador2;
}

else if(jogador2 > 0 && jogador1 == 0){

    console.log("jogador2 marcou ponto");
    placar = jogador2 > jogador1;
}

//Switch/case
switch(placar){

    case placar = jogador2 > jogador1:

    console.log("jogador2 ganhou");
    break;

    case placar = jogador1 > jogador2:

    console.log("jogador2 ganhou");
    break;
    
    default:

    console.log("ninguém ganhou");

}

//Estruturas de Repetição

//For
let array = ["valor1", "valor2", "valor3", "valor4", "valor5"];
object = {propriedade1: "valor1", propriedade2: "valor2", propriedade3: "valor3"};

for(let indice = 0; indice < array.length; indice++){

    //Imprime numeros.
    console.log(indice);
}

//For/in

//Imprime cada um dos elementos (array) e das propridades(object)
for(let indice in array){

    //Imprime strings.
    console.log(indice);
}

for(let indice in object){

    //Imprime strings.
    console.log(indice);
}

//For/of (não se usa for/of com object)

for(let indice of array){

    //Imprime os valores dos elementos.
    console.log(indice);
}

//while
var numero = 0;

while(numero < 20){

    numero++;
    console.log(numero);   
    
}

//Do/while

var numero = 0;

do{

    numero++;
    console.log(numero);    

}while (numero < 20);






