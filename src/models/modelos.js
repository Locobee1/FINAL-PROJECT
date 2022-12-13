const mongoose = require('mongoose')
const { Schema } = mongoose

const perroSchema = new Schema({
    nombre : string
})

const perroModel = mongoose.model('perron', perroSchema)

module.exports = perroModel