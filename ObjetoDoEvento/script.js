///Evento Criado/////////////////////////
let btn = document.querySelector('#btnSalvar');
let btn2 = document.querySelector('#btnRemover');

function msg(e){
    console.log(e);
}

btn.addEventListener("click", msg);
////////////////////////////////////////

btn2.addEventListener("click", function(event){
    console.log(event);
})