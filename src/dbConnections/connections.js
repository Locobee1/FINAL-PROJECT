const mongoose = require('mongoose')

const password = '0fzDHPhtWOnS9V9h'
const dbName = 'perron'

//AQUI HAY ERROR no jala password
const uri = 'mongodb+srv://LOCOBEE:${}@cluster0.nurb5ci.mongodb.net/?retryWrites=true&w=majority'

module.exports= () => mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology: true} )

//6396be15a007bf748c909ee3
