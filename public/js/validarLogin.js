const formulario = document.querySelector('form')
const validarUsername = function(username) {
    // valida que el string tenga números y letras
    const regexUser= /^[a-z0-9]+$/i;
    return regexUser.test(username);
}
const validarPass = function(pass) {
    //validar password
    const regexPass= /(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/i;
    // retorna un valor boolean dependiendo si cumple o no con la expresión regular.
    return regexPass.test(pass);
}

formulario.onsubmit = function(evento) {
    // evento.preventDefault();
    const username = formulario.elements[0];
    const pass = formulario.elements[1];
  
    if (!validarUsername(username.value)) {
        console.log('Usuario incorrecto');
      return false;
    }
  
    if (!validarPass(pass.value)) {
      console.log('Contraseña incorrecto');
      return false;
    }
    const usuario=username.value
    const password=pass.value

    // Creamos el objeto
    var xmlhttp = new XMLHttpRequest();
    
    // xmlhttp.onreadystatechange = function() {
    //         if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
    //             console.log(xmlhttp.responseText);
    //         }
    // };

    // Armamos los valores que queremos enviar
    const params = "usuario=admin&password=Holapepe7"

    // Abrimos el request
    xmlhttp.open("POST", "/validarlogin", true);

    // Establecemos encabezado
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    // Enviamos el request con los parámetros que necesitamos enviar
    xmlhttp.send(params);

    return true
    //Enviar datos por GET
    // var xmlhttp = new XMLHttpRequest();
    
    
    // xmlhttp.open("GET", "/submitporget", true);
    
    // xmlhttp.send();


    
}
