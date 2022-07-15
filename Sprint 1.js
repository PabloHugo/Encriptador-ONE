window.addEventListener("load", function () {

    var textoEntrada = document.querySelector(".conteiner__textoIn");
    var textoSalida = document.querySelector(".conteiner__textoOut");

    var botonEncriptar = document.querySelector(".boton__encriptar");
    var botonDesencriptar = document.querySelector(".boton__desencriptar");
    var botonCopiar = document.querySelector(".boton__copiar");

    botonEncriptar.addEventListener("click", function () {
        var texto = encriptarTexto();
        textoSalida.value = texto;
    });

    botonDesencriptar.addEventListener("click",function (){
        var texto = desencriptarTexto();
        textoSalida.value = texto;
    })

    botonCopiar.addEventListener("click", copiarClipBoard);

    function encriptarTexto() {

        var textoEncriptar = limpiarTexto(textoEntrada.value);
       
        var textoEncriptado = textoEncriptar.replaceAll("e", "enter")
            
            .replaceAll("i", "imes")
            .replaceAll("a","ai")
            .replaceAll("o","ober")
            .replaceAll("u","ufat")
        ;
        return textoEncriptado;
    }

    function desencriptarTexto(){

        var textoDesencriptar = textoEntrada.value;

        var textoDesencriptado = textoDesencriptar.replaceAll("enter", "e")
           
            .replaceAll("imes", "i")
            .replaceAll("ai","a")
            .replaceAll("ober","o")
            .replaceAll("ufat","u")
        ;
        return textoDesencriptado;
    }

    function copiarClipBoard(){
       
        textoSalida.select();
        document.execCommand("copy");
        textoEntrada.value = textoSalida.value;
    }

    function limpiarTexto(texto){
        return texto.normalize('NFD').replace(/[\u0300-\u036f]/g,"").toLowerCase();
    }

});