// Objetos são pares chave/valor (propriedades) e/ou métodos.Object é o objeto global do qual todos os outros objetos descendem.
// Criando objetos literais

const cadastro = {nome:"João Paulo", idade:25, profissão:"Programador", casado:false};

console.log(cadastro);

console.log(cadastro.nome); // É possível acessar propriedades dos objetos pela notação de ponto
console.log(`O candidato possui ${cadastro.idade} anos de idade`)

const carro = {marca:"Fiat", modelo:"Uno", ano:1997, 
               acelerar:function(){return "Vrum!";}}
console.log(carro.acelerar()); // Pode-se chamar métodos da mesma maneira

// Também é possível criar um objeto vazio e adicionar dados posteriormente

const celular = {};
celular.modelo = "Mi 9 lite";
celular.preco = 2500.00

console.log(celular);
