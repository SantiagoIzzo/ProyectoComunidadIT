//Novedades texto
const novedadesTexto=document.getElementById("novedades-texto")
var novedades=["Bienvenido al sitio oficial del Club Deportivo Defensores de Hurlingham","Esta es una novedad","Esta es una novedad diferente a la anteriror","Esta es una novedad totalmente diferente a las dos anteriores"]
//Alquileres
var slideIndiceContenedoresAlquileres = 1;
//Eventos slide
const contenedoresImgEventos=document.querySelectorAll(".contenedor-evento")
var cantidadContenedoresEventos=contenedoresImgEventos.length
var indiceEvento=0
var stopEventos=false
//Novedades slide
const contenedoresImgNovedades=document.querySelectorAll('.contenedor-img-novedades'); 
var cantidadContenedoresNovedades=contenedoresImgNovedades.length
var indiceNovedadSlide=0
var stopNovedades=false

//Contacto
const form=document.getElementById("formulario-contacto")
const inputNombre=document.getElementById("nombre")
const inputTelefono=document.getElementById("telefono")
const inputEmail=document.getElementById("email")
const inputAsunto=document.getElementById("asunto")
const inputMensaje=document.getElementById("mensaje")

//slide Eventos
const pasarEvento=function(n){
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

//slide Alquileres
function pasarDiv(n) {
    showDivs(slideIndiceContenedoresAlquileres += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slide");
    if (n > x.length) {slideIndiceContenedoresAlquileres = 1} 
    if (n < 1) {slideIndiceContenedoresAlquileres = x.length} ;
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none"; 
    }
    x[slideIndiceContenedoresAlquileres-1].style.display = "block"; 
}



window.onload=function(){

    if(location.pathname=="/alquiler-salon" || location.pathname=="/alquiler-cancha"){
        showDivs(slideIndiceContenedoresAlquileres);
    }
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
    if(location.pathname!=="/como-llegar"){    
        cambiarEvento(0)
        cambiarNovedad(0)
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

    if(location.pathname==="/contacto"){        
        form.onsubmit=function(evento){
            // evento.preventDefault()
            var xmlhttp = new XMLHttpRequest();
            
                // xmlhttp.onreadystatechange = function() {
                //         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                //             const respuesta = JSON.parse(xmlhttp.responseText)
                //         }
                // };
                
                // Armamos los valores que queremos enviar
                var nombre=inputNombre.value
                var telefono=inputTelefono.value
                var email=inputEmail.value
                var asunto=inputAsunto.value
                var mensaje=inputMensaje.value
                const params = "nombre="+nombre+"&telefono="+telefono+"&email="+email+"&asunto="+asunto+"&mensaje="+mensaje
                
                
            
                // Abrimos el request
                xmlhttp.open("POST", "/mensaje", true);
                // Establecemos encabezado
                xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            
                // Enviamos el request con los parámetros que necesitamos enviar
                xmlhttp.send(params);
        }
    }
}
   

