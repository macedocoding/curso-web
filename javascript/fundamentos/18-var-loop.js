for (var i=0; i<10; i++) {
    console.log(i);
}
console.log('Fora: ', i);

// Como var tem escopo global e a estrutura acima é um laço de repetição, não função, a sentença fora do bloco terá acesso à variável e a imprimirá