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



let numero = parseInt(gets());

let soma = numero;

for(let posicao = 0; posicao < numero; posicao++){

    soma += (numero-1)/2; 
} 

console.log(soma);
