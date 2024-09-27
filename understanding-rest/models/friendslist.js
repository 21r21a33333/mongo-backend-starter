const mongoose=require("mongoose");

let friendsSchema = mongoose.Schema({
    username:{
        type:String,
    },
    userid:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"users"
    },
    friendref:{
        type:[mongoose.Schema.Types.ObjectId],
        ref:"users"
    }
})

const Friends=mongoose.model("friends",friendsSchema);
module.exports=Friends;