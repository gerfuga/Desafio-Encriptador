const textArea = document.querySelector(".textArea");
const mensaje = document.querySelector(".resultado");
const Copiar = document.querySelector(".copiar");

function btnEncriptar(){
    const textoEncriptado  = encriptar(textArea.value) /*Capta el texto del mensaje*/
    mensaje.value = textoEncriptado /*Accion del boton*/
    textArea.value = ""; /*Limpar el área*/
    mensaje.style.backgroundImage = "none" /*oculta la imagen de la chica al mostrar el resultado*/

}

function encriptar (stringEncriptada){
    let matrizcodigo = [["e", "enter"],["i" , "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringEncriptada.includes(matrizcodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizcodigo[i][0], matrizcodigo[i][1])

        }
    }
     return stringEncriptada
}

function btnEncriptar(){
    const textoEncriptado  = encriptar(textArea.value) /*Capta el texto del mensaje*/
    mensaje.value = textoEncriptado /*Accion del boton*/
    textArea.value = ""; /*Limpar el área*/
    mensaje.style.backgroundImage = "none" /*oculta la imagen de la chica al mostrar el resultado*/

}


function btnDesencriptar(){
    const textoEncriptado  = Desencriptar(textArea.value) /*Capta el texto del mensaje*/
    mensaje.value = textoEncriptado /*Accion del boton*/
    textArea.value = ""; /*Limpar el área*/
}

function Desencriptar (stringDesEncriptada){
    let matrizcodigo = [["e", "enter"],["i" , "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesEncriptada = stringDesEncriptada.toLowerCase()

    for(let i = 0; i < matrizcodigo.length; i++){
        if(stringDesEncriptada.includes(matrizcodigo[i][1]))/*cambia a [1] para hacer el proceso inverso*/{
            stringDesEncriptada = stringDesEncriptada.replaceAll(matrizcodigo[i][1], matrizcodigo[i][0])

        }
    }
     return stringDesEncriptada
}

function copiar(){
    var copyText = document.querySelector(".resultado");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard
      .writeText(copyText.value)
      .then(() => {
        alert("Texto copiado");
      })
      .catch(() => {
        alert("Algo salió mal");
      });
}