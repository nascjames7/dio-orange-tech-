/**
<h1>Palindromo</h1>
* O Palindromo realiza verificações numa String e retorna
* TRUE (caso seja um palindro) ou FALSE (caso não seja um palindromo).
* <p>
* <b>Nota:<b> Leia atentamente a documentação desta classe 
* para desfrutar dos recursos oferecidos pelo autor.
* 
* @author James Anderson
* @version 1.0
* @since 06/11/2022
*/

let palavra = prompt("Digite uma palavra: ");

//Contagem de letras da String.
const numeroDeLetras = palavra.length();
//Criação de um vetor para alocação das letras da String.
var letras = Array(numeroDeLetras);
//Alocação das letras no Array letras[].
letras = palavra.split("");
//Declaração de variável booleana de controle.
var istoCorrespondeAoPalinidromo = true;        

//Criação do laço para verificar se temo um palindromo.
for(posicao = 0; posicao < numeroDeLetras; posicao++){

  if(letras[posicao] != letras[(numeroDeLetras -1 ) - posicao]){

    istoCorrespondeAoPalinidromo = false;
  }
}

//Laço para impressão da resposta final.
if(istoCorrespondeAoPalinidromo == true){

  console.log("TRUE");

}else console.log("FALSE");                
    
