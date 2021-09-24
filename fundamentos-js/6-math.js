// Objeto Math possui várias constantes e métodos para aplicações matemáticas

const raio = 3;
console.log(`Área = ${(Math.PI * Math.pow(raio, 2)).toFixed(1)} m²`);

const seno = Math.sqrt(3) / 2;
console.log(`O arco associado ao seno ${seno} é igual a ${(Math.asin(seno).toFixed(2))} rad`);
