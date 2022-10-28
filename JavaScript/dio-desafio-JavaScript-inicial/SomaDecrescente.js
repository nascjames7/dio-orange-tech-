/**<h1>SomaDecrescente</h1>
* A SomaDecrescente realiza a soma de todos os valores inferiores a um número natural 
* incluindo o mesmo, até o valor nulo.
* <p>
* <b>Nota:<> Leia atentamente a documentação desta classe 
* para desfrutar dos recursos oferecidos pelo autor.
* 
* @author James Anderson
* @version 1.0
* @since 28/10/2022
*/

'use strict'

let numero = parseInt(gets());

var soma = numero;

function somatorio(numero){

  for(let posicao = numero; posicao > 0; posicao--){
  
    if(numero === 0) {
      
      soma = 0;
              
    } else soma += (numero - 1);      
    
  }
    return soma;
}

console.log(soma);