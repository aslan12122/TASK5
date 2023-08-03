const request = require('request') ; 

const forecast = (latitude , longitude , callback) =>{

const url = 'https://api.weatherapi.com/v1/current.json?key=0260b7dd2353403c8c7170954231807&q='+ latitude + ',' + longitude;

request({url , json: true} , (error , response)=> {

    if(error){
        callback('unable to connect to website!' , undefined)
    }
    else if (response.body.error){
        callback(response.body.error.message , undefined)
    }
    else{
        const object =  {
            latitude:  response.body.location.lat ,
            longitude: response.body.location.lon , 
            weather: response.body.current.condition.text , 
            temperature: response.body.current.temp_c , 
            }
             callback(undefined , {
                weather: `wearher is ${object.weather}` , 
                temperature: `temperature is ${object.temperature}`
             })
    }
})
};

module.exports = forecast;




//   0260b7dd2353403c8c7170954231807
//  https://api.weatherapi.com/v1/current.json?key=0260b7dd2353403c8c7170954231807&q=london