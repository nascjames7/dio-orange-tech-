function calculadora(){

    const operacao = prompt("Escolha uma opção:\n 1 - Soma(+)\n 2 - Subtração(-)\n 3 - Multiplicação(*)\n 4 - Divisão real(/)\n 5 - Divisão inteira(%)\n 6 - Potenciação(**)");
}

calculadora();

switch(operacao){

    case operacao == 1:
        soma();
        break;

    case operacao == 2:
        subtracao();
        break;

    case operacao == 3:
        multiplicacao();
        break;

    case operacao == 4:
        divisaoReal();
        break;

    case operacao == 5:
        divisaoInteira();
        break;

    case operacao == 6:
        potenciacao();
        break;

    default:
        
        break;      

}