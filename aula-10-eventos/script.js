const btn = document.querySelectorAll(".btn");

btn.forEach(function (button) {
    button.addEventListener("click", exibirMsg())
});


// FORMS
const btnGravar = document.querySelector("#btnGravar")
btnGravar.addEventListener("click", validar)



function validar(e) {
    e.preventDefault()
    nome = document.getElementById("nome")
    errorNome = document.querySelector("#errorNome")

    email = document.getElementById("email")
    errorEmail = document.querySelector("#errorEmail")

    if (nome.value == '') {
        alert("Campo obrigátorio");
        errorNome.textContent = "Campo obrigátorio"
        nome.focus();
        return false;
    } else {
        errorNome.textContent = "";
    }

    if (email.value == '') {
        alert("Campo obrigátorio");
        errorEmail.textContent = "Campo obrigátorio"
        email.focus();
        return false;
    } else {
        errorEmail.textContent = "";
    }
}


function exibirMsg() {
    //alert("Hello, World! 2");
    console.log("Função Executada!");
};