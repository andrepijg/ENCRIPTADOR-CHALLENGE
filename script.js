const copy = document.getElementById("copiar");
const img = document.querySelector(".derecho");





function encriptar(){
    var ingresarTexto = document.getElementById("textarea").value;
    var textoEncriptado = ingresarTexto.replaceAll("e", "enter", "gi").replaceAll("i", "imes", "gi").replaceAll("a", "ai", "gi").replaceAll("o", "ober", "gi").replaceAll("u", "ufat", "gi");
    textoEncriptado = textoEncriptado.toLowerCase();
    mensajeEncriptado.value = textoEncriptado;
    copy.style.display = "block";
    img.style.backgroundImage ="none";
    document.getElementById("textarea").value="";
}


function desencriptar(){
    var devolverTexto = document.getElementById("textarea").value;
    var textoDesencriptado = devolverTexto.replaceAll("enter", "e","gi").replaceAll("imes", "i", "gi").replaceAll("ai", "a", "gi").replaceAll("ober", "o","gi").replaceAll("ufat", "u","gi");
    textoDesencriptado = textoDesencriptado.toLowerCase();
    mensajeEncriptado.value = textoDesencriptado;
    document.getElementById("textarea").value="";
    
}

function copiar(){
    mensajeEncriptado.select();
    navigator.clipboard.writeText(mensajeEncriptado.value).then(() => {
        alert("Copiado Exitosamente");
      })
      .catch(() => {
        alert("Ops algo salió mal");
      });
      document.getElementById("mensajeEncriptado").value="";;
    }