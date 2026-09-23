function verificarIdade(idade) {
    if (idade >= 18) {
        return "Maior de Idade";
    } return "Menor de Idade";
}

console.log(verificarIdade(prompt("Digite uma idade: ")));
