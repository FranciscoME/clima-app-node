const lugar = require('./lugar/lugar')
const clima = require('./clima/clima')


const argv = require('yargs').options({
    direccion:{
        alias:'d',
        desc:'Direccion de la ciudad para obtener el clima',
        demand:true
    }
}).argv;





// const getInfo = (direccion)=>{
//     lugar.getLugarLatLng(direccion)
// .then( res=>
//     clima.getClima(res.lat,res.lng).then(
//         resClima=>
//         console.log(`El clima en ${res.direccion} es de ${resClima}°c`)
//     )

// )
// .catch(err=>console.log(err))
// }




const getInfo = async(direccion)=>{
    
    
    try {
        const coordenadas= await lugar.getLugarLatLng(direccion)
        const temperatura= await clima.getClima(coordenadas.lat,coordenadas.lng)
        return `El clima de ${direccion} es ${temperatura}°c`
    } catch (e) {
        return `No se pudo determinar el clima en ${direccion}`
    }

}



getInfo(argv.direccion).then( r=>
    console.log(r)
)
.catch(e=>console.log(e))

// lugar.getLugarLatLng(argv.direccion)
// .then(res=> console.log(res))

// clima.getClima(40.750000,-74.000000)
// .then(console.log)
// .catch(err=>console.log(err))