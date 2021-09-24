// Array é uma matriz unidimensional ou vetor e permite armazenar vários dados em uma única estrutura.
// Os vetores em JavaScript não são engessados e permitem armazenamento de dados de tipos diferentes em uma mesma estrutura e variando em quantidade (array heterogêneo e de tamanho variável)
// O objeto global associado é o Array 

let vetor = ['João', 'Kau', 'Irene', 'Dida'];
console.log(vetor);

vetor[5] = 0.45 // Adicionei 0.45 na posição 5, portanto índice 4 será vazio
console.log(vetor);

console.log(vetor.push(42, true)); // Adiciona itens ao final do vetor
console.log(vetor.length); // Propriedade que retorna quantidade de itens do vetor
console.log(vetor[1]); // Retorna o valor no índice indicado pelo argumento
console.log(vetor.reverse()); // Método que inverte a ordem dos elementos do array
console.log(vetor.pop()); // Retira o último valor do vetor e o retorna
delete vetor[0]; // Deleta valor no índice indicado
console.log(vetor);
