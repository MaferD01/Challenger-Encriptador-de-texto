const textareaMensaje = document.querySelector(".textareaMensaje");
const textareaTranscripcion = document.querySelector("#textareaTranscripcion");

const buttonEncriptar = document.querySelector(".btnEncriptar");
const buttonDesencriptar = document.querySelector(".btnDesencriptar");
const buttonCopiar = document.querySelector("#btnCopiar");

function encriptar() {

    var mensaje = textareaMensaje.value; 
    var mensajeEncriptado = mensaje.toLowerCase()
    .replaceAll("e", "enter")
    .replaceAll("i", "imes")
    .replaceAll("o", "ober")
    .replaceAll("a", "ai")
    .replaceAll("u", "ufat");

    textareaTranscripcion.value = mensajeEncriptado; 
        
    document.getElementById("textareaTranscripcion").style.visibility = "visible";
    document.getElementById("btnCopiar").style.visibility = "visible";
    document.getElementById("imgHombre").style.display = "none";
    document.getElementById("pAlerta2").style.display = "none";
    document.getElementById("pAlerta3").style.display = "none";
}

function desencriptar(){
    var mensajeEncriptado = textareaMensaje.value; 
    var mensaje = mensajeEncriptado
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ai", "a")
    .replaceAll("ufat", "u");

    textareaTranscripcion.value = mensaje;
}

function copiar () {
    var mensajeEncriptado = textareaTranscripcion.value;
    navigator.clipboard.writeText(mensajeEncriptado);

    textareaMensaje.value = "";
    textareaMensaje.focus();

}


buttonEncriptar.onclick = encriptar;
buttonDesencriptar.onclick = desencriptar;
buttonCopiar.onclick = copiar;