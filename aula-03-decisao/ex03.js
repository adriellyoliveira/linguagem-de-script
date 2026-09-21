let valorCompra = parseFloat(prompt("Informe o valor da sua compra: "));

if (valorCompra >= 200) {
    desconto = valorCompra * 0.15
} else if ((valorCompra > 100) & (valorCompra <= 199.99)) {
    desconto = valorCompra * 0.10
} else {
    console.log("Desconto não aplicado");
}

valorFinal = valorCompra - desconto
console.log("Valor da compra: ", valorCompra);
console.log("Valor do desconto: ", desconto);
console.log("Valor final: ", valorFinal);