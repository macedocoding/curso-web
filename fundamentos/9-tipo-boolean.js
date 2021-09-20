// Tipo boolean está relacionado com expressões lógicas. Podemos representar os dois valores lógicos possíveis com duas expressões antagônicas como "true" e "false" (literais "oficiais pra representar valroes lógicos"), "0" e "1" etc.
// O objeto encapsulado referente é o Boolean e, analogamente aos outros objetos apresentados, também possui métodos e propriedades associados por

let ligado = true;
console.log(ligado);

ligado = false;
console.log(ligado);

// Negando-se duas vezes um outro valor que não sejam os literais booleanos (true e false), pode-se emular o efeito de expressões booleanas

ligado = 1;
console.log(ligado); // O literal 1 será mostrado

ligado = !1;
console.log(ligado); // A negação de 1, que é falsa, será mostrada

ligado = !!1;
console.log(ligado); // A negação da negação de 1, que é verdadeira, será mostrada. Dessa forma, é possível utilizar outros literais para representar valores lógicos

console.log('Abaixo, valores que representam valores VERDADEIROS:');
console.log(!!3.67); // Qualquer número positivo
console.log(!!-2); // Qualquer número negativo
console.log(!!' '); // Strings ou spaços em branco (que não deixa de ser string)
console.log(!![]); // Arrays
console.log(!!{}); // Objetos literais
console.log(!!Infinity); // Propriedade("tipo") Infinity
console.log(!!(ligado = ' ')); // Uma atribuição cujo valor atribuído é verdadeiro

console.log('Abaixo, valores que representam valores FALSOS:');
console.log(!!0);
console.log(!!''); //String vazia (diferente de espaço)
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(ligado = null)); // Uma atribuição cujo valor atribuído é falso
