// Função sem retorno

function imprimirSoma(parcela1, parcela2) {
    console.log(parcela1 + parcela2);
}

imprimirSoma(2, 3); // A função não RETORNA, ela simplesmente tá executando internamente um comando console.log

// Função com retorno

function imprimirMult(fator1, fator2 = 1) { // Posso ter valor padrão no parâmetro
    return fator1 * fator2;   
}

console.log(imprimirMult(3, 4)); // A função efetivamente retorna o produto entre 2 fatores, PORÉM não é dito ao interpretador pra imprimir na tela. Essa tarefa deve ser feita externamente.

// JavaScript, por ser extremamente flexível, permite as situações abaixo

imprimirSoma(4); // Faltou, um argumento, o interpretador retornará NaN mas não será um erro

imprimirSoma(); // Faltaram argumentos, o interpretador retornará NaN mas não será um erro

imprimirSoma(3, 4, 5, 6); // O interpretador considerará apenas os dois primeiros números, novamente sem retornar erro