// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let nombreIngresado ="";
amigos = [];
let indice = 0;
let nombreSorteado = "";


function agregarAmigo(){
    nombreIngresado = document.getElementById("amigo").value;
    if(nombreIngresado === ""){
        alert("Por favor, inserte un nombre:");
        return;     
    } else if (nombreIngresado.charAt(0) != nombreIngresado.toUpperCase().charAt(0)) {
        alert("El nombre debe iniciar con mayuscula!");
        return;
    }
    else {
        amigos.push(nombreIngresado);
        //agregarNombre('p', nombresUsuarios[nombresUsuarios.length-1])
        actualizarLista();
        limpiarCaja();
    }

}

function limpiarCaja() {
    document.querySelector('#amigo').value = "";
}
function actualizarLista(){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML="";
    for(let i = 0; i<amigos.length; i++){
        let nuevoElemento = document.createElement("li");
        nuevoElemento.textContent = amigos [i];
        lista.appendChild(nuevoElemento);
    }
}
function sortearAmigo (){

    if(amigos.length== 0 ){
        alert("No hay amigos para sortear");
    } else {
        indice = Math.floor(Math.random()*amigos.length);
        nombreSorteado = amigos[indice];
        resultado = document.getElementById("resultado");
        resultado.innerHTML= `El nombre sorteado es: ${nombreSorteado}`;
    }
}
