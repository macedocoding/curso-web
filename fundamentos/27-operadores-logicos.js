// Recebi duas ofertas de trabalho. Caso feche as duas, comprarei uma TV de 50", caso feche apenas um, comprarei uma TV de 32", independente de fechar um ou dois, comprarei sorvete. Se tomar sorvete, não me manterei saudável.
// Operador AND (&&) retorna true se as expressões de entrada forem TODAS true
// Operador OR (||) retorna true se pelo menos uma entrada for true
// Operador XOR retorna true se e somente se uma entrada for true e outra false
// Operador NOT (!) inverte o valor lógico de uma expressão

function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2;
    const comprarTv50 = trabalho1 && trabalho2;
    const comprarTv32 = trabalho1 != trabalho2; // Negação emula o comportamento do xor
    const manterSaudavel = !comprarSorvete;
    return {comprarSorvete, comprarTv32, comprarTv50, manterSaudavel}; 
    /* Forma mais moderna de se criar objetos cujo valor tem o mesmo nome da chave. A notação padrão seria:
    return {comprarSorvete: comprarSorvete, comprarTv32: comprarTv32, comprarTv50: comprarTv50, manterSaudavel: manterSaudavel} */
}

console.log(compras(true, true));
console.log(compras(true, false));
console.log(compras(false, true));
console.log(compras(false, false));
