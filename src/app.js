const express = require('express')
const app = express()
const path = require('path')
//req = required -> parte del cliente
//res = response -> parte del servidor

app.set('view engine', 'pug')
app.set('views', path.join(__dirname,'vistas'))

//ROUTER
const routes = require('./routes/inRoutes')
app.use(routes)

//STATIC FILES
app.use(express.static(path.join(__dirname,'../front')))

app.use((req, res)=>{
    res.sendFile(path.join(__dirname, '../front/index.html'))
})

//LOCALHOST:3000
app.listen(3000, ()=>{
    console.log("etamo listos beibe")
})