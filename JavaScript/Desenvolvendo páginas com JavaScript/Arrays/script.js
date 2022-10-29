//Arrays

var lista = ["laranja", "morango", "uva"];
//Imprime toda a lista (o vetor).
console.log(lista);
//Imprime apenas o elemento determinado.
console.log(lista[1]);
//alert(lista[2]);

//Adiciona um elemento no final da sequencia.
lista.push("limão");
console.log(lista);

//Mostra o tamanho da lista.
console.log(lista.length);

//Mostra a lista com os elementos em ordem contrária (Inverte os elemento da lista).
console.log(lista.reverse());
//Anula a inversão anterior.
console.log(lista.reverse());


//Mostra a lista com os elementos como frase (concatena, separando por vírgulas).
console.log(lista.toString());

//Imprime o primeiro elemento.
console.log(lista[0]);
//Imprime a prmeira letra do primeiro elemento.
console.log(lista.toString()[0]);

//Imprime os elementos da lista separados por um determinado símbolo.
console.log(lista.join("-"));
console.log(lista.join(" | "));
console.log(lista.join(" # "));

//Lista de objetos num array.
var frutas = [{nome: "kiwi", cor: "verde"}, {nome: "jaca", cor: "amarelo"},
 {nome: "amora", cor: "vinho"}];
alert(frutas[1]. cor);

//Array com tipos diferentes de variáveis.
let tiposDistintos = [2, "que coisa", true, undefined, null, [3, 5 , 7, 9], 's', {nome: "amora", cor: "vinho"}];
console.log(tiposDistintos);

//Impressão do item e indice de cada elemento do array.
tiposDistintos.forEach(function(item, index){console.log(item, index)});

//Apaga o último elemento do array.
tiposDistintos.pop();
console.log(tiposDistintos.pop());
tiposDistintos.forEach(function(item, index){console.log(item, index)});

//Apaga o primeiro  elemento do array.
tiposDistintos.shift();
console.log(tiposDistintos.shift());
tiposDistintos.forEach(function(item, index){console.log(item, index)});

//Mostra o índice do elemento.
console.log(tiposDistintos.indexOf(null));

//Apaga os elementos entre os índices por arrays.
tiposDistintos.splice(2, 4);
console.log(tiposDistintos);

//Retorna uma parte do array.
tiposDistintos.slice(0, 3);
console.log(tiposDistintos);

//Objetos

//Criação de objetos
let object = {string: "string", number: 7, boolean: true, array: [12, 15, 45], 
null: null, objetoInterno: {objetoInterno: "objetoInterno" }};
console.log(object);

//Acessar propriedades do objeto (desestruturação)
console.log(object.boolean);
console.log(object.objetoInterno);
console.log(object.number);
console.log(object.array[2]);

//Atribuindo elementos do objeto a uma variavel
var string = object.string;
console.log(string);

var array = object.array;
console.log(array);

//Desestruturação(atribuir a uma ou mais variaveis um ou mais elementos de um objeto)
var {boolean, string, number, objetoInterno} = object;
console.log(boolean, string, number, objetoInterno);



