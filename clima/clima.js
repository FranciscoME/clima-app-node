const axios = require('axios');


const getClima= async(lat,lng)=>{
    const resp= await axios.get(`hhtps://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=cd49626f3cd325de66cc5fdc95ef5cb3&units=metric`)
    
    if(resp)
    return resp.data.main.temp;

}

module.exports={
    getClima
}