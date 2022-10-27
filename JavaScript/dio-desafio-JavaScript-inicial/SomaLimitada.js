/**
<h1>SomaLimitada</h1>
* A SomaLimitada realiza a soma de todos os múltiplos de um número natural 
* que sejam inferiores a um determinado limite N (outro numero natural).
* <p>
* <b>Nota:<b> Leia atentamente a documentação desta classe 
* para desfrutar dos recursos oferecidos pelo autor.

 * Este método é utilizado para comparar dois números naturais.
 * 
 * @param numeroNatural este é o primeiro parametro do método.
 * @param valorLimiteDosMultiplos este é o segundo parametro do método.
 * @return int (O resultado deste método é a soma de todos os valores dos múltiplo
 * do numero natural, incluindo ele mesmo dentro do intervalo:
 * [numeroNatural, valorLimiteDosMultiplos).
*
* 
* @author James Anderson
* @version 1.0
* @since 26/10/2022
*/


//Solicitação  e leitura dos valores (numeroNarural e valorLimiteDosMultiplos).
var numeroNatural = parseInt(getss());
var valorLimiteDosMultiplos = parseInt(gets()); 

const limiteDoFor = parseInt(valorLimiteDosMultiplos/numeroNatural);

console.log('limitante: ' + limiteDoFor.toFixed(0));

//Declaração do valor inicial da soma.
let somaTotal = 0;

//Verifica se numeroNatural é nulo.
if(numeroNatural === 0){           

    soma = 0;

}else{

    //Verifica se os dados permitem o cálculo.
    if(numeroNatural != 0 &&  numeroNatural <= valorLimiteDosMultiplos){        

    //Utilizando a equação de soma dos termos de uma progressão aritmética.
        for(let posicao = 0; posicao < limiteDoFor.toFixed(0); posicao++){

            soma += numeroNatural*posicao; 
        } 
    }
}

//Impressão da soma.
console.log('A soma eh: ' + soma);