const mongoose=require("mongoose");

let userSchema=mongoose.Schema({
    username:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    }
})

const User=new mongoose.model("user",userSchema);
module.exports=User;