
function tabuada(){
    valor = document.getElementById("txtValor");
    tabuadas = document.getElementById("tabuada");
    tab = "";

    if(valor.value == "" || !Number.isFinite(Number(valor.value))){
        alert("Campo obrigatório!");
        valor.value = "";
        valor.focus();
    }
    else{
        for(i=1;i<=10;i++){
            tab = tab + i + " * " + valor.value + " = " + (i*valor.value) + "<br>";
        }
        tabuadas.innerHTML = tab;
        valor.value = "";
        valor.focus();
    }
}