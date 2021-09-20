// null é um tipo primitivo, um literal que representa valor nulo ou vazio e é utilizado ativamente quando desejamos que uma variável não não possua informação (destruindo-a ou inicializando-a com null)
// undefined é um tipo primitivo que representa um valor indefinido e não deve ser utilizado ativamente, é uma propriedade do objeto global que será atribuída pelo próprio interpretador

let valor; // Não inicializada
console.log(valor);

valor = null; // Inicializada e apontando para um endereço sem informações, nulo
console.log(valor);

console.log(valor.toString()); // Erro, pois não há como acessar membros (propriedades e métodos) do tipo null
