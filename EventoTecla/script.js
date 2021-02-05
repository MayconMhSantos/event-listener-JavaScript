// Teclas
// - keydown Quando Afunda a tecla.
// - keyup Quandosolta a tecla.

window.addEventListener("keyup", function(e){
    if(e.key == 'q') {
    console.log("Tecla Q apertada");
    }
});

window.addEventListener("keydown", function(e){
    if(e.key == 'Enter') {
    console.log("Tecla ENTER apertada");
    }
});
