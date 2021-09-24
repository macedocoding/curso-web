// Abaixo alguns métodos do objeto String

const palavra = 'Otorrinolaringologista';

console.log(palavra.length); // Propriedade que retorna o número de caracteres
console.log(palavra.toUpperCase()); // Caixa alta em toda palavra
console.log(palavra.toLowerCase()); // Caixa baixa em toda palavra
console.log(palavra.charAt(5)); // Retorna o caractere referente ao índice passado no argumento
console.log(palavra.replace('otorrino', '')); // Substitui uma string (ou uma "fatia" dela) pela outra
console.log(palavra.charCodeAt(11)); // Retorna o código Unicode do caractere referente ao índice passado no argumento
console.log(palavra.indexOf('o')); // Retorna o índice (posição) do caractere passado como parâmetro
console.log(palavra.substring(3)); // Retorna uma "fatia" da string começando no índice do argumento
console.log(palavra.substring(7, 16)); // Retorna uma "fatia" da string começando no primeiro índice do argumento e terminando antes do segundo índice (['fatia'[)
console.log('João,Kau,Irene'.split(',')); // Fatia uma string em um vetor, utilizando o separador passado como segundo argumento
