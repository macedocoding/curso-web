/* Variáveis e constantes são "rótulos" para endereços de memória, nas quais dados podem ser armazenados. Como JavaScript é uma linguagem de tipagem fraca, não é necessário explicitar o tipo do dado. */

/* Variáveis e constantes são declaradas iniciando-se a sentença com a palavra reservada var, let ou const, seguida do identificador e, caso queira inicializar, adiciona-se o sinal de atribuição "=" seguido do valor. */

var nome = 'João Paulo'; // var cria variáveis com escopo global (NÃO RECOMENDADO)
let anoNascimento; // let limita o escopo da variável ao bloco que está (se estiver) inserida (RECOMENDÁVEL)
const salario = 5600.00; // const cria uma constante, ou seja, cujo valor não pode ser alterado no decorrer da execução do programa

// Pode-se, posteriormente, alterar o valor das variáveis previamente inicializadas ou inicializá-las depois de declará-las (válido para var e let).
nome = 'Karine Amorim';
anoNascimento = 1996;

console.log(nome);
console.log(anoNascimento);

// Apenas com var é possível redeclarar variáveis. let permite apenas alteração do valor. USE LET! 
// const não permite redeclaração ou alteração do valor. QUANTO MAIS CONSTS MELHOR!
// const > let >> var

var a = 1;
var a = 2;

let b = 1
// let b = 2 Dá erro
b = 2;

console.log(a, b);
