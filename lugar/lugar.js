const axios = require('axios');


const getLugarLatLng = async(direccionParam)=>{

    const encodedURL= encodeURI(direccionParam);

    const instance = axios.create({
        baseURL:`https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedURL}`,
        timeout:1000,
        headers:{'X-RapidAPI-Key':'69b03b6cb4msh2eaf28f17814e47p157e56jsne285229a2f24'}
    })


    // instance.get()
    //     .then(resp=>{
    //         console.log(resp.data.Results[0]);
    //     }
    // ).catch(err=>{
    //     console.log('ERROR: '+err);
    // })


    const resp = await instance.get()

    if(resp.data.Results.length===0){
        throw new Error('No hay resultados para esta ciudad')
    }
    
    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lng = data.lon;


    return {direccion,lat,lng}
}


module.exports={
    getLugarLatLng
}