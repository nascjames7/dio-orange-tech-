function calculadora(){

    //Definição das variáveis de entrada e saída.
    let operacao = Number(prompt("Escolha a operação: \n1 - Soma(+)\n 2 - Subtração(-)\n3 - Multiplicação(*)\n 4 - Divisão Real(/)\n 5 - Divisão Inteira(%)\n 6 - Potenciação(**)"));
    
    let numero1 = Number(prompt("Digite o primeiro numero: "));
    let numero2 = Number(prompt("Digite o segundo numero: "));
    let resultado;

    //Verificação de possíveis erros(operacao).
    if(!operacao || operacao >= 7){

        alert("Erro - operacao inválida!")
        calculadora();

    }else{

        //Verificação de possíveis erros(numero1 e numero2).
        if(!numero1 || !numero2){

            alert("Erro - parâmetros inválidos!")
            calculadora();

        }else{

                //Implementação das funções operacionais.
                function soma(){

                resultado = numero1 + numero2;
                alert(`${numero1} + ${numero2} = ${resultado}`)
                //Permite fazer uma nova operação sem atualiazar.
                novaOperacao();
                }    

                function subtracao(){

                resultado = numero1 - numero2;
                alert(`${numero1} - ${numero2} = ${resultado}`)
                novaOperacao();
                }

                function multiplicacao(){

                resultado = numero1 * numero2;
                alert(`${numero1} * ${numero2} = ${resultado}`)
                novaOperacao();
                }

                function divisaoReal(){

                resultado = (numero1 / numero2).toFixed(2);
                alert(`${numero1} / ${numero2} = ${resultado}`)
                novaOperacao();
                }

                function divisaoInteira(){

                resultado = numero1 % numero2;
                alert(`O resto da divisão entre ${numero1} e ${numero2} é ${resultado}`)
                novaOperacao();
                }

                function potenciacao(){

                resultado = numero1 ** numero2;
                alert(`${numero1} elevado a ${numero2}ª é igual a ${resultado}`)
                novaOperacao();
                }

                //Finalização/Continuação
                function novaOperacao(){

                let opcao = prompt("Deseja fazer outra opercao: \n 1 - Sim\ 2 - Não");

                if(opcao == 1){

                    calculadora();
                }else if (opcao == 2){

                    alert("Até mais!")
                }else{

                    alert("Digite uma opção válida:")
                    novaOperacao();
                    }
                }

                //Implementação do switch para escolha da operação.
                switch(operacao){

                case operacao = 1:
                    soma();
                    break;

                case operacao = 2:
                    subtracao();
                    break;

                case operacao = 3:
                    multiplicacao();
                    break;

                case operacao = 4:
                    divisaoReal();
                    break;

                case operacao = 5:
                    divisaoInteira();
                    break;

                case operacao = 6:
                    potenciacao();
                    break;

                default:
                    console.log("Alguma coisa deu errado!");
                    break;

                }
            } 
         }
                

}
//Chamada da função calculadora.
calculadora();
