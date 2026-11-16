const titulo = document.getElementById("titulo");
const mensagem = document.querySelector(".mensagem");
const emoji = document.querySelector(".emoji");

console.log(titulo);
console.log(mensagem);

titulo.textContent = "Novo Titulo" //insere somente TEXTO como conteudo
titulo.innerHTML = "<u>Novo Titulo</u>" //insere elementos HTML como conteudo
titulo.innerText = "Novo Titulo" //insere somente TEXTO como conteudo


//titulo.classList.add("verde")// adiciona uma classe
//titulo.classList.remove("verde")// remove uma classe
mensagem.classList.toggle("roxo")// verifica se a classe existe, se sim, ele insere. Caso contrario, ele remove.
emoji.classList.toggle("rosa")

function teste() {
    titulo.classList.add("verde")
}