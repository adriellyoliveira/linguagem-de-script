function somarPares(n) {
    cont = 0
    for (i=1; i<=n; i++) {
        if (1%2 == 0) {
            cont++;
        }
    }
    return cont;
}

console.log(somarPares (prompt("Digite um valor: ")));