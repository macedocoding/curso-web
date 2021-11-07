// JS possui tipagem dinâmica, ou seja, não é necessário especificar o tipo de dado durante a declaração de uma variável ou constante, pois o tipo é inferido pelo valor do dado em runtime.
// JS também possui tipagem fraca, ou seja, pode-se realizar operações com diferentes tipos. O interpretador se encarregará de converter ou concatenar. 

let palavra = 'Armário'; // String
let numero = '12'; // String
let valor = 435.1; // Number
let solteiro = false; // Boolean

let soma = numero + valor; 
console.log(soma) // JS concatenou 12 e 435.1
console.log(typeof soma) // Variável soma se tornou é do tipo String
