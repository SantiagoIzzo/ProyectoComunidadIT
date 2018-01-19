const eventos=[
    {flota:"",
    titulo:"Este es el evento 1",
    fecha:"12/04/17",
    contenido:"Sed ac ultrices turpis. Morbi tellus dolor, accumsan eu arcu eget, tempus volutpat nisl. Nullam id tortor ullamcorper leo ultrices tempor quis vitae nisi. Integer convallis sapien vitae dapibus pharetra. Etiam facilisis dui ac enim porta, et dapibus nisi tincidunt. Phasellus convallis nisl nulla, nec vulputate erat elementum ut. Aliquam erat volutpat. Duis placerat facilisis magna sed aliquet. Nulla tincidunt mauris ipsum, eu malesuada enim pulvinar fringilla. Ut cursus neque ut purus laoreet sodales. Aenean cursus arcu non nisi consequat congue. Nulla lectus eros, rhoncus sed dignissim non, sodales ac sem. Duis sed semper magna. Cras augue turpis, finibus in imperdiet id, mattis sit amet orci.",
    img:"img/img-eventos/img-milonga.jpg"
    },
    {flota:"",    
    titulo:"Este es el evento 2",
    fecha:"09/07/16",
    contenido:"Sed ac ultrices turpis. Morbi tellus dolor, accumsan eu arcu eget, tempus volutpat nisl. Nullam id tortor ullamcorper leo ultrices tempor quis vitae nisi. Integer convallis sapien vitae dapibus pharetra. Etiam facilisis dui ac enim porta, et dapibus nisi tincidunt. Phasellus convallis nisl nulla, nec vulputate erat elementum ut. Aliquam erat volutpat. Duis placerat facilisis magna sed aliquet. Nulla tincidunt mauris ipsum, eu malesuada enim pulvinar fringilla. Ut cursus neque ut purus laoreet sodales. Aenean cursus arcu non nisi consequat congue. Nulla lectus eros, rhoncus sed dignissim non, sodales ac sem. Duis sed semper magna. Cras augue turpis, finibus in imperdiet id, mattis sit amet orci.",
    img:"img/img-eventos/img-carnaval.jpg"
    },
    {flota:"",
    titulo:"Este es el evento 3",
    fecha:"04/03/15",
    contenido:"Sed ac ultrices turpis. Morbi tellus dolor, accumsan eu arcu eget, tempus volutpat nisl. Nullam id tortor ullamcorper leo ultrices tempor quis vitae nisi. Integer convallis sapien vitae dapibus pharetra. Etiam facilisis dui ac enim porta, et dapibus nisi tincidunt. Phasellus convallis nisl nulla, nec vulputate erat elementum ut. Aliquam erat volutpat. Duis placerat facilisis magna sed aliquet. Nulla tincidunt mauris ipsum, eu malesuada enim pulvinar fringilla. Ut cursus neque ut purus laoreet sodales. Aenean cursus arcu non nisi consequat congue. Nulla lectus eros, rhoncus sed dignissim non, sodales ac sem. Duis sed semper magna. Cras augue turpis, finibus in imperdiet id, mattis sit amet orci.",
    img:"img/img-eventos/img-fiestaretro.jpg"
    }]
const estructurar=function(arrayEventos){
    var izquierda=true
    arrayEventos.forEach(function(evento) {
        if(izquierda){
            evento.flota="flota-izquierda"
        }else{
            evento.flota="flota-derecha"
        }
        izquierda=!izquierda
    }, this);
    return arrayEventos
}


const eventosEstructurados=estructurar(eventos)
module.exports=eventosEstructurados