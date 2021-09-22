console.log(a);
var a = 1;
console.log(a);

// Podemos notar que o trecho acima não retorna um erro, pois, ao definirmos uma variável com var, mesmo após uma declaração que a invoca, o efeito de hoisting(içamento) ocorrerá e a senteça "var a = 1;" será interpretada como se tivesse sido deslocada para a parte superior do código

var b;
console.log(b);
b = 1;
console.log(b);

// O trecho acima representa um código com interpretação semelhante ao primeiro após o hoisting

/*
console.log(c);
let c = 1;
console.log(c);
*/

// Hoisting não ocorre com let
 