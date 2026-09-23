let teste = "a"; //escopo da variavel teste é GLOBAL
boasVindas()

// function declaration
function boasVindas() {
    console.log("Hello, World!");
    console.log(teste);
}


//function expression
const msg = function () {
    console.log("Boas Vindas!");  
}
msg()


const calcularDescont = function() {
    let desconto = 50 * 0.10; // escopo da variavel desconto é LOCAL
    let precoFinal = 50 - desconto;
    console.log(precoFinal);
}
calcularDesconto()


//função anônima
setInterval (function(){
    console.log("Executando uma função anônima");
}, 3000);


function calcularDesconto(valor) {
    let precoFinal = valor - valor * 0.10;
    console.log(precoFinal);
}
calcularDesconto(prompt("Digite um valor: "));
calcularDesconto(100);
calcularDesconto(150);


function apresentar(nome = "Adrielly", idade = 20) {
    console.log(nome + " tem " + idade + " anos ");
}
apresentar();
apresentar("Kim Bora", 30)