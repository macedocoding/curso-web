{
    {
        var texto = 'Estou aqui';
        console.log(`Dentro dos blocos: ${texto}`);
    }
}

console.log(`Fora dos blocos: ${texto}`);

// Variáveis criadas com var são visíveis globalmente e só têm dois escopos possíveis: global e em funções

function retornarTexto() {
    var texto2 = 'Olá, mundo!'
    return texto2;
}

//console.log(`Fora do escopo da função: ${texto2}`); Erro!
console.log(`Invocando a partir da função: ${retornarTexto()}`); // Funciona, pois não tento acessar a variável texto2 diretamente mas a partir do chamado da função retornarTexto()