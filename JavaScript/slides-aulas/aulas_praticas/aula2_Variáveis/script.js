//Tipos primitivos

//Boolean

var vOuF = false;
//Impressão do valor booleano da variavel.
console.log(vOuF);
//Impressão do tipo de variável.
console.log(typeof(vOuF));

//Number
var numeroQualquer = 1;
console.log(typeof(numeroQualquer));

//String
var nome = "Adrian";
console.log(typeof(nome));

//var - permite alterar seu valor independente de atribuição (escopo local e global)
//let - permite alterar seu valor independente de atribuição (escopo local)
//const - não permite alterar seu valor após promira atribuição (obrigado a ser inicializado)

//As variaveis sem valor, sem inicialização, (let e var) definido apresentarão tipo null.

var escopoGlobal = "global";
console.log(escopoGlobal);

function escopoLocal(){

    let escopoLocalInterno = "local";
    console.log(escopoLocalInterno);
}

//Chamada da função para impressão, caso contrário, não faz nada.
escopoLocal();

//Atribuição
var atribuicao = "bom";
console.log(atribuicao);//retorna o valor da atribuição
 
//Comparação
var comparacao = 0 == '0';//Não leva o tipo em consideração. (retorna true)
console.log(comparacao);

//Comparação Idêntica
var comparacaoIdentica = 0 === '0';//Leva o tipo em consideração. (retorna false)
console.log(comparacaoIdentica);

//Operações Matemáticas

//Adição
var adicao = 5 + 9;
console.log(adicao);

//Subtração
var subtracao= 5 - 9;
console.log(subtracao);

//Multiplicação
var multiplicacao = 5 * 9;
console.log(multiplicacao);

//Divisão
var divisao = 5/9;
console.log(divisao.toFixed(3));//fixada o numero de casas decimais em 3

//Potenciação
var potenciacao = 5**3;
console.log(potenciacao);

//Mod
var mod = 9%5;
console.log(mod);

//Variáveis relacionais (retorna um boolean)

//Maior
var maiorQue  = 5 > 10;
console.log(maiorQue);

//Menor
var menorQue  = 5 < 10;
console.log(menorQue);

//Maior
var maiorOuIgualQue  = 5 >= 10;
console.log(maiorOuIgualQue);

//Maior
var menorOuIgualQue  = 5 <= 10;
console.log(menorOuIgualQue);

//Variáveis lógicas

//And (verdadeira apenas quando ambas forem true)
var e = true && false;
console.log(e);

//Or (falsa apenas quando ambas forem false)
var ou = true || false;
console.log(ou);

//Not (nega a afirmação)
var nao = !false;
console.log(nao);






