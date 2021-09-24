console.log(typeof Object);
console.log(typeof new Object);
// Instâncias de funções são objetos

const Carro = function() {}
console.log(typeof Carro);
console.log(typeof new Carro)
// Outro exemplo de instância de função criada pelo usuário

class Produto {} // ES6
console.log(typeof Produto);
console.log(typeof new Produto);
// Classes, em JS, nada mais são do que rearranjos sintáticos de funções e como exemplificado acima, instâncias de funções são objetos