// A função das estruturas de controle é desviar o código dependendo do resultado obtido em uma expressão lógica

function dieta(calorias) {
    if(calorias < 2000) {
        return 'Emagreceu!';
    } else if(calorias >= 2000 && calorias <= 3000) {
        return 'Manteve o peso!';
    } else if(calorias > 3000) {
        return 'Engordou!';
    }
}

console.log(dieta(3000));
