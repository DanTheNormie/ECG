const express = require('express')
const app = express()
const PORT = process.env.PORT || 2000

app.get('/live',(res)=>{res.sendStatus(200)})

console.log('Checking CST for heartbeat...');
    fetch('https://cst-lcg0.onrender.com/live')
        .then(((data)=>console.log('CST heartbeat detected...')))
        .catch((err)=>{
            console.log(err);
            console.log('CST heartbeat not detected...')
        })


setInterval(async ()=>{
    console.log('Checking CST for heartbeat...');
    fetch('https://cst-lcg0.onrender.com/live')
        .then(((data)=>console.log('CST heartbeat detected...')))
        .catch((err)=>{
            console.log('CST heartbeat not detected...')
        })

},1000*60*14)

app.listen(PORT,()=>{console.log(`server running on port ${PORT}...`);})