const express = require('express')
const app = express()
const axios = require('axios')
const PORT = process.env.PORT || 2000

app.get('/live',(req,res)=>{res.sendStatus(200)})

console.log('Checking CST for heartbeat...');
axios.get('https://cst-lcg0.onrender.com/live')
    .then((()=>console.log('CST heartbeat detected...')))
    .catch((err)=>{
        console.log(err);
        console.log('CST heartbeat not detected...')
    })

setInterval(()=>{
    console.log('Checking CST for heartbeat...');
    axios.get('https://cst-lcg0.onrender.com/live')
        .then((()=>console.log('CST heartbeat detected...')))
        .catch((err)=>{
            console.log(err);
            console.log('CST heartbeat not detected...')
        })

    axios.get('https://dannys-ecg.onrender.com/live')
        .then((()=>console.log('🥲👍 I\'m awake ...')))

},1000*60*14)

app.listen(PORT,()=>{console.log(`server running on port ${PORT}...`);})