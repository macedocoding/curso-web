// As template strings foram uma adição ao EcmaScript 2015 que permitem a mescla de strings, variáveis, expressões e até funções em uma mesma sentença de maneira mais legível e compacta.

const nome = 'João Paulo Macedo';
const idade = 25;
const salario = 5000.00;

console.log(`Meu nome é ${nome}, tenho ${idade} e almejo um salário inicial de R$ ${salario.toFixed(2)}`); // Utilizar crase

// Com as template strings, o interpretador exibe espaços em branco e quebras de linha

console.log(`Meu nome é 
    ${nome}, tenho 
        ${idade} anos e almejo um salário inicial de 
            R$ ${salario.toFixed(2)}`);

// Chamando uma função com template strings

const maiuscula = texto => texto.toUpperCase(); // Arrow function "maiuscula" com argumento "texto"
console.log(`Ei! ${maiuscula('cuidado!')}`);
