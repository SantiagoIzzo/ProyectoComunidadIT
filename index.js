const express= require(`express`) 
const exphbs= require('express-handlebars')
const perfil=require("./my_modules/perfil.js")
const eventos=require("./my_modules/eventos.js")
const noticias=require("./my_modules/institucional.js")
const proximosPartidos=require("./my_modules/basquet.js")
const bodyParser = require('body-parser')
const app=express()
var texto="Bienvenido al sitio oficial del Club Deportivo Defensores de Hurlingham"
var listaImgNovedades=["img/img-novedades/img-basquetpruebas.jpg","img/img-novedades/img-temporadapileta.jpg","img/img-novedades/img-voleyconvocatoria.jpg"]
var listaImgEventos=["img/img-eventos/img-boxeo.jpg","img/img-eventos/img-carnaval.jpg","img/img-eventos/img-milonga.jpg"]
const basquet={categoria:"juveniles",horario:"20:00 a 9:30",dias:"Lunes,Martes,Miercoles",prof:"Pepe Sanchez" }

//configuramos para manejar envios por POST
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// indicandole cual va a ser el layout general
app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')


//Ruta al home
app.get('/', function (req, res){
    res.render('home',{ estilos: ['css/index.css','css/institucional2.css'], javascript:['js/home.js'],noticias:noticias,listaImgNovedades:listaImgNovedades,listaImgEventos:listaImgEventos,aside:true,ubicacion:true})
})
// app.post('/eventos', function (req, res) {
//     res.json({eventos:eventos})
// })
//fechas
app.post('/fechas', function (req, res) { 
    var deporte = proximosPartidos[req.body.deporte]
    var response= deporte[req.body.categoria]
    res.json(response)
})
// app.post('/fechas', function (req, res) { 
//     var deporte = proximosPartidos[req.body.deporte]
//     var response= deporte[req.body.categoria]
//     res.json(response)
// })
//Ruta deportes
app.get('/deportes', function (req, res) {
    res.render('deportes',{ estilos: ['css/deportes.css','css/slideEventos.css'], javascript:['js/historia.js'],aside:true,eventos:true,listaImgNovedades:listaImgNovedades,listaImgEventos:listaImgEventos})
})
//Ruta a alquiler del salon
app.get('/alquiler-salon', function (req, res) {
    res.render('alquiler-salon',{ estilos: ['css/alquiler-salon.css','css/slideEventos.css'], javascript:['js/alquileres.js'],aside:true,eventos:true,listaImgNovedades:listaImgNovedades,listaImgEventos:listaImgEventos})
})
//Ruta a alquiler de cancha
app.get('/alquiler-cancha', function (req, res) {
    res.render('alquiler-cancha',{ estilos: ['css/alquiler-cancha.css','css/slideEventos.css'],javascript:['js/alquileres.js'],aside:true,eventos:true,listaImgNovedades:listaImgNovedades,listaImgEventos:listaImgEventos})
})
//Ruta a comision directiva
app.get('/comision-directiva', function (req, res) {
    res.render('comision-directiva',{ estilos: ['css/comision-directiva.css','css/slideEventos.css'],javascript:['js/comisionDirectiva.js'],aside:true,eventos:true,listaImgNovedades:listaImgNovedades,listaImgEventos:listaImgEventos})
})
//Ruta a aranceles
app.get('/aranceles', function (req, res) {
    res.render('aranceles',{ estilos: ['css/aranceles.css','css/slideEventos.css'],javascript:['js/aranceles.js'],aside:true,eventos:true,listaImgNovedades:listaImgNovedades,listaImgEventos:listaImgEventos})
})
//Ruta a contacto
app.get('/contacto', function (req, res) {
    res.render('contacto',{ estilos: ['css/contacto.css','css/slideEventos.css'], javascript:['js/contacto.js'],aside:true,eventos:true,listaImgNovedades:listaImgNovedades,listaImgEventos:listaImgEventos})
})
app.post('/contacto', function (req, res) {
    res.render('contacto',{ estilos: ['css/contacto.css','css/slideEventos.css'], javascript:['js/contacto.js'],aside:true,eventos:true,listaImgNovedades:listaImgNovedades,listaImgEventos:listaImgEventos})
})
//Ruta a eventos
app.get('/eventos', function (req, res) {
    res.render('eventos',{ estilos: ['css/eventos.css','css/slideEventos.css'],eventoscontenido:eventos,javascript:['js/eventos.js'],aside:true,eventos:true,listaImgNovedades:listaImgNovedades,listaImgEventos:listaImgEventos})
})
//Ruta a historia
app.get('/historia', function (req, res) {
    res.render('historia',{ estilos: ['css/historia.css','css/slideEventos.css'],javascript:['js/historia.js'],aside:true,eventos:true,listaImgNovedades:listaImgNovedades,listaImgEventos:listaImgEventos})
})
//Ruta a como llegar
app.get('/como-llegar', function (req, res) {
    res.render('como-llegar',{estilos:['css/ubicacion.css'],javascript:['js/ubicacion.js'],transportes:true})
})
//Ruta a institucional
app.get('/institucional', function (req, res) {
    res.render('institucional',{ estilos: ['css/institucional.css','css/slideEventos.css'],noticias:noticias,javascript:['js/institucional.js'],aside:true,eventos:true,listaImgNovedades:listaImgNovedades,listaImgEventos:listaImgEventos})
})
//Ruta a portal de socio
// ,javascript:['js/validarLogin.js']
app.get('/portal', function (req, res) {
    res.render('portal2',{ estilos: ['css/portal.css']})
})
app.post('/usuario', function(req, res){
    usuario=req.body.userName
    password=req.body.userPassword
    console.log("Usuario:"+usuario)
    console.log("Contraseña:"+password)
    if(usuario=="admin" && password=="Holapepe7"){
        res.render('perfil',{ estilos: ['css/perfil.css']})
    }else{
        res.send("No se puede entrar a este perfil")
    }
})

app.post('/mensaje', function(req, res){
    var nombre=req.body.nombre
    var telefono=req.body.telefono
    var email=req.body.email
    var asunto=req.body.asunto
    var mensaje=req.body.mensaje
    console.log(nombre)
    console.log(telefono)
    console.log(email)
    console.log(asunto)
    console.log(mensaje)
    
})


//ruta estatica 
app.use(express.static('public'))

//manejador de errores 
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send("Algo no anda bien, error 500")
})

app.use(function (req, res, next) {
    res.status(404).send("No se puede encontrar, error 404")
})

// indicandole en que puerto tiene que escuchar
app.listen(3000,function(){
    console.log("Example app listening on port 3000!")
})




