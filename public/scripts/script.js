const form = document.getElementById('form1'); 

form.addEventListener('submit' , (e)=>{
    e.preventDefault();
    const address = document.getElementById('input').value
    console.log(address)
    weatherLoad()
    form.reset()
})


const forcast = document.getElementById('forcast'); 
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
            setTimeout(()=>{
                forcast.innerText = data.data
                error.innerText = '';
                setTimeout(()=>{
                    addressView.innerText = address;
                },1000)
            } ,1000)
        }
    }
    catch(err){
        console.log(err)
    }
}