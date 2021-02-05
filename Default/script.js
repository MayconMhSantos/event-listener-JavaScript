// ///Evento Criado/////////////////////////
// let btn = document.querySelector('#btnSalvar');
// let btn2 = document.querySelector('#btnRemover');
// let p = document.querySelector('p');

let a = document.querySelector("a");

a.addEventListener("click", function(e){
    e.preventDefault();
    alert("Site indisponivel no momento")
})



// //Criamos um erro de propagacao executando os dois eventos quando clicamos em salvar
// function msg(e){ // exp erro proposital
//     console.log('Clicou no btn');// exp erro proposital

//     e.stopPropagation(); // <<<< Solulcao>>>>
// }

// btn.addEventListener("click", msg);// exp erro proposital

// btn2.addEventListener("click", function(event){// exp erro proposital
//     console.log(event);// exp erro proposital
// })
// p.addEventListener("click", function(){// exp erro proposital
//     console.log("Clicou no paragrafo")// exp erro proposital
// })