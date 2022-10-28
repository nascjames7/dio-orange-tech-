/**
<h1>IgualdadeNumerica</h1>
* A IgualdadeNumerica realiza verificações matemáticas entre números naturais.
* <p>
* <b>Nota:<b> Leia atentamente a documentação desta classe 
* para desfrutar dos recursos oferecidos pelo autor.
* 
* @author James Anderson
* @version 1.0
* @since 16/10/2022
*/

let primeiroNumero = gets();
let segundoNumero = gets();

var resultado = "";

if(primeiroNumero === segundoNumero){

    resultado = "Sao iguais!";

}else resultado = "Nao sao iguais!";

console.log(resultado);