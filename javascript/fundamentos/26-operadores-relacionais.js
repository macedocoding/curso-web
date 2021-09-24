// == é igual a (retorna um booleano) === é estritamente igual a (considera tipos iguais)

console.log('1' == 1);
console.log('1' === 1);
console.log('3' != 3);
console.log('3' !== 3);
console.log(Math.PI == 3.141592);

console.log(3 < 2);
console.log(Infinity > 4);
console.log(Math.E <= Math.E);
console.log(-34 >= -33 );

const d1 = new Date(0);
const d2 = new Date(0);
console.log(d1 == d2)
console.log(d1 === d2)
//Como d1 e d2 receberam apenas os endereços de memória (atribuição por referência), ambas retornam false

console.log(d1.getTime() == d2.getTime());
console.log(d1.getTime() === d2.getTime());
// Como eu extraí os dados da data que agora são numbers, não mais endereços de memória, posso compará-los diretamente