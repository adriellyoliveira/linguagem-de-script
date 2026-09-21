let nota = parseFloat(prompt("Digite a nota do aluno: "));
let freq = parseFloat(prompt("Digite a frequencia do aluno: "));

if ((nota >= 6) && (freq >= 75)) {
    console.log("Aluno Aprovado!");
} else {
    console.log("Aluno Reprovado!");
};