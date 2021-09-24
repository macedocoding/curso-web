let numero = 1;
{
    let numero = 2;
    console.log('Dentro = ' + numero);
}
console.log('Fora = ' + numero);

// Como let possui escopo de bloco, posso criar duas variáveis homônimas em escopos diferentes e acessá-las com valores diferentes sem problemas