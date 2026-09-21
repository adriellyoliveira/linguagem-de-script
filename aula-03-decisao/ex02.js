let user = prompt("Digite seu usuário").toLocaleLowerCase();
let senha = prompt("Digite sua senha");

if ((user == "adim") && (senha == "1234")) {
    console.log("Acesso Permitido");
} else {
    console.log("Acesso Negado");
};