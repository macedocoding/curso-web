let pontos = [    // Criação do array (que é objeto) "pontos" com 2 objetos contendo 2 pares chave-valor cada
    {x: 0, y: 0},
    {x: 1, y: 1}
]

pontos.distancia = function() {  //Adição de um novo elemento ao array "pontos" através do operador ponto chamado "distância", que será uma função anônima (portanto chamada de método, pois é definida em um array que é objeto em JS)
    let p1 = this[0]; // this refere-se ao array que a função foi definida. Algo como: "Acessar o item de índice 0 do objeto que eu estou dentro"
    let p2 = this[1];

    let delta_x = p2.x - p1.x;
    let delta_y = p2.y - p1.y;

    return (Math.sqrt((delta_x ** 2) + (delta_y ** 2))).toFixed(3);
}

console.log(pontos.distancia());

// Maneiras de exibir caracteres Unicode não-ASCII

console.log('\u00e9'); // \u seguido de EXATAMENTE 4 dígitos hexadecimais
console.log('\u{00b390}') // \u seguido de {} com 1 a 6 dígitos em hexadecimal