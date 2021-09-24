const pessoa = {
    nome: 'Leonardo Santana',
    idade: 34,
    endereco: {
        rua: 'Rua 9 de julho',
        numero: 1054
    }
}

console.log(pessoa.endereco.rua); // Maneira cássica de se extrair dados de um objeto, via operador ponto

// Com o operador de desestruturação, é possível extrair dados de objetos e arrays e criar variáveis externamente!
// Para objetos utiliza-se notação {} e para arrays [] seguido de = e o nome do objeto ou array
const {nome, endereco} = pessoa; 
console.log(nome, endereco);

// Também é possível renomear variáveis retiradas das estruturas colocando-se : seguido do novo nome
const {nome: n, endereco: e} = pessoa;
console.log(n, e);

// Para extrair valores de objetos dentro do objeto mais externo
const {endereco: {rua, numero}} = pessoa; // endereco nçao será extraído
console.log(rua, numero); 

// É possível setar valores padrão 
// Quando tentamos extrair variáveis que não existem, undefined será retornado, por isso é interessante setar valores padrão
const {sobrenome = 'Não preenchido', profissão} = pessoa;
console.log(sobrenome, profissão);
