const sbmt = document.getElementById('sbmt'); 

sbmt.addEventListener('click' , (e)=>{
    e.preventDefault();
    const address = document.getElementById('input').value
    const form = document.getElementById('form1'); 

    console.log(address)
    weatherLoad()
    form.reset()
})


const forcast = document.getElementById('forcast'); 
const tempr = document.getElementById('tempr');
const error = document.getElementById('err'); 
const addressView = document.getElementById('addressView'); 


let weatherLoad = async ()=> {
    try{
        
        const address = document.getElementById('input').value; 
        const res = await fetch('http://localhost:3000/weather?address=' + address);
        const data  = await res.json()
        console.log(data)
        if(data.err){
            error.innerText = data.err;
            forcast.innerText = '';
            addressView.innerText = '';
        }
        else{
        setTimeout(()=> {
            forcast.innerText = data.data.weather;
          error.innerText = '';
            setTimeout(()=>{
                tempr.innerText = data.data.temperature;
                setTimeout(()=>{
                    addressView.innerText = address;
                },500)
            } ,500)
        } ,500)
        }
    }
    catch(err){
        console.log(err)
    }
}
//sss