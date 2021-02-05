///Evento Criado/////////////////////////
let btn = document.querySelector('#btnSalvar');
let btn2 = document.querySelector('#btnRemover');

function msg(){
    console.log("Clicou no Salvar!");
}

    btn.addEventListener("click", msg);
////////////////////////////////////////

// Estamos removendo o evento do btn salvar para nao afetar a usabilidade do ususario.
btn2.addEventListener("click", () => {
    btn.removeEventListener("click", msg)
});