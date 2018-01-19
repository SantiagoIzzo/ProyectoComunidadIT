var indiceNovedadSlide=0
var indiceEvento=0
var stopEventos=false
var stopNovedades=false

const contenedoresImgEventos=document.querySelectorAll(".contenedor-evento")
const novedadesTexto=document.getElementById("novedades-texto")
var novedades=["Bienvenido al sitio oficial del Club Deportivo Defensores de Hurlingham","Esta es una novedad","Esta es una novedad diferente a la anteriror","Esta es una novedad totalmente diferente a las dos anteriores"]
const contenedoresImgNovedades=document.querySelectorAll('.contenedor-img-novedades');  

var cantidadContenedoresNovedades=contenedoresImgNovedades.length
var cantidadContenedoresEventos=contenedoresImgEventos.length


//slide Eventos
const pasarEvento=function(n){
    stopEventos=true
    indiceEvento=indiceEvento+n
    if(indiceEvento>contenedoresImgEventos.length-1){
        indiceEvento=0
    }
    if(indiceEvento<0){
        indiceEvento=contenedoresImgEventos.length-1
    }
    cambiarEvento(indiceEvento)
}
const cambiarEvento=function(pos){
    console.log(pos) 
    let cont=0
    contenedoresImgEventos[pos].style.display="block"    
    while(cont<=contenedoresImgEventos.length-1){
        if(cont!=pos){
        contenedoresImgEventos[cont].style.display="none"        
        }
        cont=cont+1
    }
    cont=0
    return contenedoresImgEventos.length-1
}


//slide Novedades
const pasarNovedad=function(n){
    stopNovedades=true;
    indiceNovedadSlide=indiceNovedadSlide+n
    if(indiceNovedadSlide>contenedoresImgNovedades.length-1){
        indiceNovedadSlide=0
    }
    if(indiceNovedadSlide<0){
        indiceNovedadSlide=contenedoresImgNovedades.length-1
    }
    cambiarNovedad(indiceNovedadSlide)
}
const cambiarNovedad=function(pos){
   
    console.log(pos) 
    let cont=0
    contenedoresImgNovedades[pos].style.display="block"    
    while(cont<=contenedoresImgNovedades.length-1){
        if(cont!=pos){
        contenedoresImgNovedades[cont].style.display="none"        
        }
        cont=cont+1
    }
    cont=0
}


window.onload=function(){
    var indiceLetra=0
    var indiceNovedad=0
    var nuevoTexto=""
    var pausa=true

    // pasarEvento(0)
    cambiarEvento(0)
    cambiarNovedad(0)
    
    
    const intervalIdNovedades = setInterval(function(){
        if(pausa){
            nuevoTexto=nuevoTexto+novedades[indiceNovedad].charAt(indiceLetra)
            novedadesTexto.innerText=nuevoTexto
            indiceLetra=indiceLetra+1
        }
        if(indiceLetra>novedades[indiceNovedad].length-1){
            indiceLetra=0
            indiceNovedad=indiceNovedad+1
            nuevoTexto=""
            pausa=false
            setTimeout(function(){
                pausa=true
            },2000)
            if(indiceNovedad>novedades.length-1){
                indiceNovedad=0
            }
        }
    }, 150)

    const intervalIdEventosSlide= setInterval(function(){
        if(!stopEventos){
            indiceEvento=indiceEvento+1
            if(indiceEvento>cantidadContenedoresEventos-1){
                indiceEvento=0
            }
            cambiarEvento(indiceEvento)
        }
    },4000)

    const intervalIdNovedadesSlide= setInterval(function(){
        if(!stopNovedades){
            indiceNovedadSlide=indiceNovedadSlide+1
            if(indiceNovedadSlide>cantidadContenedoresNovedades-1){
                indiceNovedadSlide=0
            }
            cambiarNovedad(indiceNovedadSlide)
        }
    },4000)
        
}