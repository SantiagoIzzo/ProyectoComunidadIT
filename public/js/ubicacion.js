const novedadesTexto=document.getElementById("novedades-texto")
var novedades=["Bienvenido al sitio oficial del Club Deportivo Defensores de Hurlingham","Esta es una novedad","Esta es una novedad diferente a la anteriror","Esta es una novedad totalmente diferente a las dos anteriores"]
window.onload=function(){
    var indiceLetra=0
    var indiceNovedad=0
    var nuevoTexto=""
    var stop=true
    const intervarlId = setInterval(function(){
           if(stop){
                nuevoTexto=nuevoTexto+novedades[indiceNovedad].charAt(indiceLetra)
                novedadesTexto.innerText=nuevoTexto
                indiceLetra=indiceLetra+1
           }
        if(indiceLetra>novedades[indiceNovedad].length-1){
            indiceLetra=0
            indiceNovedad=indiceNovedad+1
            nuevoTexto=""
            stop=false
            setTimeout(function(){
                stop=true
            },2000)
            if(indiceNovedad>novedades.length-1){
                indiceNovedad=0
            }
        }
    }, 150)
}