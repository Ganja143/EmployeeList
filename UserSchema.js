const mongoose = require('mongoose')

const RegisterSchema = new mongoose.Schema({

    FullNames: {
                type:String,
                required:true,

    },
    cellNumber:{
            type:Number,
            required:true
    },
    UserName: {
            type:String,
            required:true
    },
    password: {
             type:String,
             required:true
           
    },
});

 const Registration = mongoose.model("UserSchema",RegisterSchema)
 
 module.exports= Registration ;