let timeout;

window.addEventListener("mousemove", function(e){
    clearTimeout(timeout);

    timeout = setTimeout(function(){
        console.log(`eixo X: ${e.x} `);
    }, 500)
});