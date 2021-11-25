// Linguagem de programação interpretada estruturada, de script em alto nível com tipagem dinâmica fraca, multiparadigma (suporta POO) e com garbage collector.
// Expressões retornam valores, por exemplo, nomes de variáveis, operações aritméticas, acesso à elementos de arrays e objetos são exemplos de expressões.
// Declarações (statements) não retornam valores mas modificam o programa de alguma maneira. Atribuições, estruturas de repetição e decisão são exemplos de declarações.
// Tipos primitivos JS: numbers, strings, Booleans, null, undefined e Symbol
// Tudo que não é tipo primitivo é objeto (pertencente ao tipo objeto) e contém propriedades com nome e valor (par chave-valor). Alguns tipos objetos: objeto, array, Set, Map, Date, Error, RegExp etc.
// Até mesmo classes e funções são tipos especializados de objetos. Podem ser tratados como valores e atribuídos à variáveis ou passados como parâmetros de outras funções ou métodos (funções definidas como propriedades de objetos).
// Os próprios tipos definem métodos para trabalharmos com valores. Ex.: a.sort() ao invés da função sort(a).
// Tipos primitivos, apesar de não serem objetos, se comportam como se tivessem métodos.
// Tipos objeto são mutáveis e tipos primitivos imutáveis, inclusive strings.
// A tipagem fraca permite conversão entre tipos em operações. Podem ser feitas, inclusive, automaticamente pelo interpretador.
// O operador de igualdade == converte tipos por conveniência, portanto '1' == 1 retorna 'true'. É recomendável utilizar === (operador de igualdade restrito) ao invés, pois este não performa conversão de tipos.
// A propriedade global Infinity representa valores maiores do que o interpretador consegur trabalhar (overflow). Há também -Infinity.
// Números divididos por 0 retornam Infinity ou -Infinity, com exceção de 0/0 que retorna a propriedade do objeto global NaN (Not a Number). Infinity/Infinity, raíz quadrada de números negativos, operações aritméticas com tipos que não podem ser convertidos em números também retornam NaN.
// Infinity e Nan, além de constantes globais, também são propriedades do objeto Number e é possível chamá-las a partir do operados ponto em Number. Exemplo Number.POSITIVE_INFINITY.
// JS retorna 0 se houver underflow, ou seja, necessidade de se representar um número menor do que o menor intervalo suportado. Há também o -0 se for um limite pela esquerda.
// Função global isNaN() e o método Number.isNaN() retornam true ou false se o argumento for ou não NaN.
// Método Number.isFinite() retorna true se o valor passado como argumento for diferente de Infinity, -Infinity Nan e 0.
// 0 === -0 retorna true, porém quando utilizados em denominadores (com numerador != 0) resultam em Infinity e -Infinity, respectivamente.
// ES 2020 adicionou o tipo BigInt que permite a utilização de inteiros extraordinariamente grandes. Para representarmos um BigInt, devemos adicionar na frente de um inteiro (decimal, binário, octal, hexadecimal) a letra "n". Ex: 2_3348_033n, 0b1001_0101_1011n, 0o473653034, 0x409fb9a1b (os underscores são meros separadores)
// Date é uma classe em JS que permite a representação de datas e tempo. Ex.: O método estático Date.now() retorna o número de milissegundos desde 01/01/1970. 
// Também possível instanciar um objeto do tipo Date com o construtor Date(). Ex.: let data = new Date()
