//fechas, info
const proximosPartidos=[]
const basquet=[]
const voley=[]
const futbol=[]

basquet[0]={categoria:"Primera Division",fase:"Primera Vuelta",equipoA:"G.E.Y", equipoB:"Club Deportivo Defensores de Hurlingham",condicion:"Local",dia:4,mes:5,año:2017,hs:21,min:30}
basquet[1]={categoria:"Juveniles",fase:"Primera Vuelta",equipoA:"Club Deportivo Defensores de Hurlingham", equipoB:"Club Deportivo y Social Alem",condicion:"Local",dia:1,mes:5,año:2017,hs:17,min:30}
basquet[2]={categoria:"Cadetes",fase:"Primera Vuelta",equipoA:"Club Atletico River Plate", equipoB:"Club Deportivo Defensores de Hurlingham",condicion:"Local",dia:1,mes:5,año:2017,hs:15,min:30}
basquet[3]={categoria:"Infantiles",fase:"Primera Vuelta",equipoA:"Club Deportivo Defensores de Hurlingham", equipoB:"Club Deportivo y Social Alem",condicion:"Local",dia:1,mes:5,año:2017,hs:13,min:00}
basquet[4]={categoria:"Pre-Infantiles",fase:"Primera Vuelta",equipoA:"A.F.A.L.P", equipoB:"Club Deportivo Defensores de Hurlingham",condicion:"Local",dia:1,mes:5,año:2017,hs:12,min:30}
basquet[5]={categoria:"Mini",fase:"Primera Vuelta",equipoA:"Club Deportivo Defensores de Hurlingham", equipoB:"Club Deportivo Moron",condicion:"Local",dia:1,mes:5,año:2017,hs:10,min:30}
basquet[6]={categoria:"Pre-Mini",fase:"Primera Vuelta",equipoA:"Club Deportivo Defensores de Hurlingham", equipoB:"Club Deportivo Moron",condicion:"Local",dia:1,mes:5,año:2017,hs:9,min:30}

futbol[0]={categoria:"Primera Division",fase:"Primera Vuelta",equipoA:"Velez", equipoB:"Club Deportivo Defensores de Hurlingham",condicion:"Local",dia:4,mes:5,año:2017,hs:21,min:30}
futbol[1]={categoria:"Juveniles",fase:"Primera Vuelta",equipoA:"Club Deportivo Defensores de Hurlingham", equipoB:"Argentino jr",condicion:"Local",dia:1,mes:5,año:2017,hs:17,min:30}
futbol[2]={categoria:"Cadetes",fase:"Primera Vuelta",equipoA:"Club Deportivo Defensores de Hurlingham", equipoB:"Club Deportivo Moron B",condicion:"Local",dia:1,mes:5,año:2017,hs:9,min:30}
futbol[3]={categoria:"Infantiles",fase:"Primera Vuelta",equipoA:"Club Deportivo Defensores de Hurlingham", equipoB:"Atlas",condicion:"Local",dia:1,mes:5,año:2017,hs:13,min:00}
futbol[4]={categoria:"Pre-Infantiles",fase:"Primera Vuelta",equipoA:"A.F.A.L.P", equipoB:"Club Deportivo Defensores de Hurlingham",condicion:"Local",dia:1,mes:5,año:2017,hs:12,min:30}
futbol[5]={categoria:"Mini",fase:"Primera Vuelta",equipoA:"Club Deportivo Defensores de Hurlingham", equipoB:"Atletico Nacional de Medellin",condicion:"Local",dia:1,mes:5,año:2017,hs:10,min:30}
futbol[6]={categoria:"Pre-Mini",fase:"Primera Vuelta",equipoA:"Club Deportivo Defensores de Hurlingham", equipoB:"Club Deportivo Moron",condicion:"Local",dia:1,mes:5,año:2017,hs:9,min:30}

voley[0]={categoria:"Primera Division",fase:"Primera Vuelta",equipoA:"Club Moron", equipoB:"Club Deportivo Defensores de Hurlingham",condicion:"Local",dia:4,mes:5,año:2017,hs:21,min:30}
voley[1]={categoria:"Juveniles",fase:"Primera Vuelta",equipoA:"Club Deportivo Defensores de Hurlingham", equipoB:"Pedro Echague",condicion:"Local",dia:1,mes:5,año:2017,hs:17,min:30}
voley[2]={categoria:"Cadetes",fase:"Primera Vuelta",equipoA:"Club Deportivo Defensores de Hurlingham", equipoB:"Pedro Echague B",condicion:"Local",dia:1,mes:5,año:2017,hs:17,min:30}
voley[3]={categoria:"Infantiles",fase:"Primera Vuelta",equipoA:"Club Deportivo Defensores de Hurlingham", equipoB:"Estudiantil Porteño",condicion:"Local",dia:1,mes:5,año:2017,hs:13,min:00}
voley[4]={categoria:"Pre-Infantiles",fase:"Primera Vuelta",equipoA:"A.F.A.L.P", equipoB:"Club Deportivo Defensores de Hurlingham",condicion:"Local",dia:1,mes:5,año:2017,hs:12,min:30}
voley[5]={categoria:"Mini",fase:"Primera Vuelta",equipoA:"Club Deportivo Defensores de Hurlingham", equipoB:"Boca",condicion:"Local",dia:1,mes:5,año:2017,hs:10,min:30}
voley[6]={categoria:"Pre-Mini",fase:"Primera Vuelta",equipoA:"Club Deportivo Defensores de Hurlingham", equipoB:"Bella Vista",condicion:"Local",dia:1,mes:5,año:2017,hs:9,min:30}

proximosPartidos[0]=basquet
proximosPartidos[1]=futbol
proximosPartidos[2]=voley

module.exports=proximosPartidos;
