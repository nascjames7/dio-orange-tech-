/**
<h1>BuscaSequencial</h1>
* A BuscaSequencial realiza a busca de um determinado valor em um vetor co 10 elementos
* distintos de forma sequencial. Caso o valor seja encontrado, retorna a posição
* e se não, relata que o número não foi encontrado.
* <p>
* <b>Nota:<b> Leia atentamente a documentação desta classe 
* para desfrutar dos recursos oferecidos pelo autor.
* 
* @author James Anderson
* @version 1.0
* @since 28/10/2022
*/

let elementos = [64, 137, -16, 43, 67, 81, -90, 212, 10, 75]; 

let numeroProcurado = parseInt(gets());

var encontrei = false; 

for(let posicao = 0; posicao < 10; posicao++){

  if(elementos[posicao] === numeroProcurado){

    console.log("Achei " + numeroProcurado + " na posicao " + posicao);
    posicao = 10;
    encontrei = true;
  }
            
}
if(!encontrei){

  console.log("Numero " + numeroProcurado + " nao encontrado!");
}