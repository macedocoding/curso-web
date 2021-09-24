// Operadores aritméticos são binários, pois necessitam de dois operandos. Também são chamados de infixos, pois se posicionam entre os operandos, ao contrário dos pré-fixados (Ex.: ++a) ou pós-fixados (Ex.: a++)

const [a, b, c, d] = [1, 2, 3, 4];

const soma = a + b + c + d; // Soma (ocorre de dois em dois, posteriormente somando com os outros termos, da esquerda pra direita)
const subtracao = d - a - c;
const multiplicacao = c * b * a;
const divisao = d / c / b;
const exponenciacao = b ** c; // Adicionado ao ES7
const modulo = c % 2 // Operador módulo retorna o resto da divisão

console.log(soma, subtracao, divisao, exponenciacao, modulo);