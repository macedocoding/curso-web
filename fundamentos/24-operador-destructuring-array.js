const [a, b, c] = [10, 12, 15]; // Extraindo o valor de um array pelo operado destructuring
console.log(a, b, c);

const nomes = ['João', 'Kau', 'Beibe', 'Meire'];
const [nome1, nome2] = nomes;
console.log(nome1, nome2);

const frutas = ['banana', 'maçã', 'melão', 'uva'];
const [, maca, , uva] = frutas; // Extração do segundo e quarto item do array "frutas" e passando os valores pras variáveis "maca" e "uva"
console.log(maca, uva);
