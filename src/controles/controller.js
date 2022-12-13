const controller = {}
const connection = require('../dbConnections/connections')
const perroModel = require('../models/modelos')

controller.index = async (req, res)=>{
 try{
     await connection()
     const perron = await perroModel.find()
     console.log(perron)
     res.render('index')

 } catch(err){
    console.log(err)
 }

}

module.exports = controller

//VZbMfZjE3vCZ8KG1

//second pasword
//0fzDHPhtWOnS9V9h

//ip
//189.252.242.36

// mongodb+srv://LOCOBEE:<0fzDHPhtWOnS9V9h>@cluster0.nurb5ci.mongodb.net/?retryWrites=true&w=majority
// mongodb+srv://LOCOBEE:<password>@cluster0.nurb5ci.mongodb.net/?retryWrites=true&w=majority