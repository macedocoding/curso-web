/* Tipo primitivo number se refere aos tipo de dado numérico de uma maneira geral (conjunto dos reais).
Quando utilizamos Number (capitalizado), nos referimos ao objeto encapsulado que possui, portanto, métodos e propriedades para trabalhar com números. */

const numero = 35.46; // Variável "numero" do tipo primitivo number
console.log(numero);
console.log(typeof numero); // Observa-se que "numero" é do tipo primitivo number
console.log(numero.toFixed(1)); 
// Exemplo do método toFixed() que arredonda o número pro número de casas decimais passado como parâmetro. Quando tento acessar um método de uma variável primitiva (inicialmente nçao faz sentido), JS cria momentaneamente um objeto Number que "envolve" a variável e permite que métodos sejam acessados. 

const outroNumero = new Number(134); // Criando explicitamente um objeto Number com valor associado
console.log(outroNumero);
console.log(typeof outroNumero); // Observa-se que "outroNumero" é do tipo primitivo object
console.log(outroNumero.toFixed(2)); 
// Nesse caso, o método toFixed() é acessado diretamente do objeto outroNumero

console.log(numero.toString()); // Converte em string (equivalente a toString(10))
console.log(numero.toString(2)); // Converte em binário (mudar o parâmetro para a base desejada)
console.log(numero.toString(16)); // Converte em hexadecimal (mudar o parâmetro para a base desejada)
