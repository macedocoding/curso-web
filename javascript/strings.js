// Obtendo porções de uma string

let texto = "Meu nome é João Paulo Macedo"
console.log(texto.substring(2, 10)) // retorna o intervalo de caracteres [2; 10[
console.log(texto.slice(1, 8)) // Similar ao método substring()
console.log(texto.slice(-2)) // A indexação pode iniciar do último elemento = -1
console.log(texto.split(" ")) // Retorna um array cujos elementos são criados a partir do conteúdo ENTRE os delimitadores passados como argumento do método split()

// Buscas em uma string

console.log(texto.indexOf("n")) // Retorna a posição do caractere passado como argumento na sua primeira aparição
console.log(texto.indexOf("M", 3)) // Retorna a posição do caractere passado como primeiro argumento na posição ou após a posição passada como segundo argumento
console.log(texto.indexOf("j")) // Retorna -1, pois não houve match
console.log(texto.lastIndexOf("d")) // Retorna o último índice o qual o caractere passado como argumento aparece

// Métodos booleanos para strings (ES6 +)

console.log(texto.startsWith("M")) // Retorna um valor booleano correspondente ao valor verdade que responde à expressão "a string começa com 'caractere ou substring argumento'?"
console.log(texto.endsWith("k")) // Semelhante ao método anterior, porém a comparação é com a porção final da string
console.log(texto.includes(" ")) // A string inclui o caractere ou substring argumento?

// Criando versões modificadas de uma string

console.log(texto.replace("João Paulo Macedo", "Karine Amorim Soares"))
console.log(texto.toUpperCase()); // Modifica todos os caracteres da string para caixa alta
console.log(texto.toUpperCase());// Modifica todos os caracteres da string para caixa baixa
console.log(texto.normalize()); // Normalização Unicode NFC
console.log(texto.normalize("NFD")); // Normalização NFD

// 

