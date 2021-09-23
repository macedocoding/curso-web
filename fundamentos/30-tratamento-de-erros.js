// Introdução às palavras reservadas Try, Catch e Throw
function tratarErroELancar(erro) {
    throw 'mensagem';
}

function imprimirNomeGritado(obj) {
    try {
        console.log(obj.nome.toUpperCase() + '!');
    } catch(e) {
        tratarErroELancar(e);
    } finally {
        console.log('Final!');
    }
}

const obj = {name:'João'};

imprimirNomeGritado(obj);
