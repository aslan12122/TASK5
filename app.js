const express = require('express'); 
const hbs = require('hbs');
const app = express() ; 

const geocode = require('./src/geocode')
const forecast = require('./src/forecast')


app.use(express.static('public'))

hbs.registerPartials(__dirname + "/views/partials")


const port = process.env.PORT || 3000


app.set('view engine', 'hbs');

app.get('/'  , (req , res)=>{
    res.render('index')
})

app.get('/weather'  , (req , res)=>{
    if(!req.query.address){
        return res.send({
            Error : 'you must enter an address.'
        })}
    geocode(req.query.address , (err , data)=> {
        if(err){
            return res.send({err})
        }
    forecast(data.latitude , data.longitude ,(err , data) => {
        if(err){
            return res.send({err})
        }
        res.send({data})
    }) 
    })
    
})


// 

app.listen(port , ()=>{
    console.log(`app is running on port ${port}`)
})


