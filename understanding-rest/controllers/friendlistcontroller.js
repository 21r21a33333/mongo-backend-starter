const Friends = require("../models/friendslist");
getFriends=async(req,res)=>{
    let data=await Friends.find().populate("friendref userid");
    res.json(data);
}

creteFriends=async(req,res)=>{
    let check=req.body.username;
    let dbdata=await Friends.findOne({username:check});
    if(dbdata){
        let data=dbdata.friendref;
        data.push(...req.body.friendref);
        dbdata.friendref=data;
        let ret=await dbdata.save();
        res.json(ret);
    } else{
        let data=await Friends.create({
            ...req.body
        });
        res.json(data);
    }
    
}
module.exports={
    creteFriends,
    getFriends
}
