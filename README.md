<head>Challenge Amigo Secreto </head>
<h1> Notas importantes </h1> 
//let Amigos
Dentro de las funciones
Obtener elemento de la Lista: document.querySelector()
Limpiar lista: lista.innerHTML = ""
Indice aleatorio: Math.random()
Resultado document.getElementById()//
function agregarAmigo(){
    nombreIngresado = document.getElementById("amigo").value;
    if(nombreIngresado === ""){
        alert("Por favor, inserte un nombre:");
        return;     
    } else if (nombreIngresado.charAt(0) != nombreIngresado.toUpperCase().charAt(0)) {
        alert("El nombre debe iniciar con mayuscula");
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
