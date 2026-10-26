const item = document.getElementById("item")
const lista = document.getElementById("lista")

function add() {
    const textoItem = item.value.trim();

    if (textoItem !== "") {
        const novoItem = document.createElement("li") // cria um novo elemento
        novoItem.textContent = textoItem
        lista.appendChild(novoItem);
        item.value = '';
        item.focus()
    }
}