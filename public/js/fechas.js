var indiceDeporte=0;
var indiceCategoria=0;
var listaDeportes=["Basquet","Futbol","Voley"]
var numCategorias=7;
var info
const deporte=document.getElementById("deporte")
const categoria=document.getElementById("categoria")
const fase=document.getElementById("fase")
const equipoA=document.getElementById("equipoA")
const equipoB=document.getElementById("equipoB")
const condicion=document.getElementById("condicion")
const fecha=document.getElementById("fecha")
const horario=document.getElementById("horario")

const consultarInfo=function(deporte, categoria,funcionCallback){
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function() {
            if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
                const respuesta = JSON.parse(xmlhttp.responseText)
                funcionCallback(respuesta)
            }
    };
    
    // Armamos los valores que queremos enviar
    const params = "deporte="+deporte+"&categoria="+categoria
    

    // Abrimos el request
    xmlhttp.open("POST", "/fechas", true);
    // Establecemos encabezado
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Enviamos el request con los parámetros que necesitamos enviar
    xmlhttp.send(params);
    
}
const pasarDeporte=function(direccion){
    indiceDeporte=indiceDeporte+direccion
    indiceCategoria=0
    if(indiceDeporte>=listaDeportes.length){
        indiceDeporte=0
    }
    if(indiceDeporte<0){
        indiceDeporte=listaDeportes.length-1
    }
    
    info =consultarInfo(indiceDeporte,0,cambiarInfo)   

}
const pasarCategoria=function(direccion){
    indiceCategoria=indiceCategoria+direccion
    if(indiceCategoria>numCategorias-1){
        indiceCategoria=0
    }
    if(indiceCategoria<0){
        indiceCategoria=6
    }
    consultarInfo(indiceDeporte,indiceCategoria,cambiarInfo)
    
}
const cambiarInfo=function(obj){
    deporte.innerText= listaDeportes[indiceDeporte]
    categoria.innerText=obj.categoria
    fase.innerText=obj.fase
    equipoA.innerText=obj.equipoA
    equipoB.innerText=obj.equipoB
    condicion.innerText=obj.condicion
    fecha.innerText=obj.dia+"/"+obj.mes+"/"+obj.año
    horario.innerText=obj.hs+":"+obj.min
}
pasarDeporte(0,1)



