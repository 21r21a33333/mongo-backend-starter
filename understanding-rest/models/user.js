const mongoose=require("mongoose");

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,  
    },
    friend:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    }
})

const User=mongoose.model("users",userSchema);
module.exports=User