let nombre = prompt ("ingresa tu nombre: ");
let apellido = prompt ("ingresa tu apellido ");

let nombreCompleto = nombre + " " + apellido;

function saludar (nombreCompleto){
    alert ("Hola! Bienvenido" + nombreCompleto);
}
saludar (nombreCompleto)

let confirmar = confirm ("Por favor suscribite para continuar")



let usuario = "Sofia Mauceri, Mauceri Sofia";
if (usuario === "Sofia Mauceri" || usuario === "Mauceri Sofia") {
    console.warn("Usted está suscripto");
} else {
    console.warn("Usted no se ha suscrito aún");
}
