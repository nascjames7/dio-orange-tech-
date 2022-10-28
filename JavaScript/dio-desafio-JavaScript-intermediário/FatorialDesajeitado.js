/**
<h1>FatorialDesajeitado</h1>
* O FatorialDesajeitado recebe um número natural N e calcula o fatorial 
* utilizando as operações matemáticas na seguinte ordem: multiplicação, divisão, adição
* e subtração (no fatorial padrão, usariamos apenas a multiplicação) em ordem decrescente
* até o número zero.
* <p>
* <b>Nota:<b> Leia atentamente a documentação desta classe 
* para desfrutar dos recursos oferecidos pelo autor.
* 
* @author James Anderson
* @version 1.0
* @since 18/10/2022
*/

/**
* Declaração do número natural N que é chamado (new Scanner(System.in))
* e lido como String (nextLine())
* e em seguida, tranformado em inteiro na linha abaixo (Integer.parseInt)
*/

const numeroNatural = Integer.parseInt(gets());

//Declaração das variáveis auxiliares, resultado e contadores.
var resultado = numeroNatural;
numeroNatural--;
let contador = 1; 
let auxiliar = 0;
let auxiliar2 = 0;
let temp = 0;    
    
//Implementação da condição de parada do bloco.
while(numeroNatural > 0){

    //Declaração da variável que irá determinar a operação a ser realizada em cada etapa.
     let opcao = (contador%4);

     switch(opcao){

        case 1:

        if(contador == 1){

            resultado = resultado*numeroNatural;
            numeroNatural--;
            contador++;                    
            break;            

        }else{

            auxiliar2 = numeroNatural;

            if(numeroNatural == 1){

                resultado = temp + ((-auxiliar)*(auxiliar2));
                numeroNatural--;
                contador++;                       
                break;
            }
            numeroNatural--;
            contador++;                    
            break;
        }

        case 2:

        if(contador == 2){                    

            resultado = resultado/numeroNatural;
            numeroNatural--;
            contador++;                    
            break;                                        

        }else{               

            resultado = temp + ((-auxiliar)*(auxiliar2)/(numeroNatural));
            numeroNatural--;
            contador++;                    
            break;                     
        }

        case 3:

        resultado = resultado+numeroNatural;
        temp = resultado;
        numeroNatural--;
        contador++;                
        break;

        case 0:

        if(numeroNatural == 1){

            resultado = resultado-numeroNatural;
            numeroNatural--;
            contador++;                    
            break;

        }else{
                    
            auxiliar = numeroNatural;
            numeroNatural--;
            contador++;                    
            break;
        }

        default:

            console.log("Alguma coisa saiu errada!");
        }   
    }     
        
console.log(resultado);        
    
    




        
        