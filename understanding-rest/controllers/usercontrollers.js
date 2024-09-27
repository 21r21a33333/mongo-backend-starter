const User =require("../models/user");


getUser=async (req,res)=>{
    let username=req.query.username;
    if(username){
        let data= await User.find({
            username:username
        })
        res.status(200).json(data);   
    }
    else{
        let data=await User.find()
            // .limit(2)
            // .skip(4)
            .sort("-username password")
            .distinct("username");
        res.status(200).json(data);
    }
}

getUserByUserName=async(req,res)=>{
    let username=req.params.username;
    let data= await User.find({
        username:username
    })
    res.status(200).json(data);
}

postUser = async (req,res)=>{
    try{
        console.log(req.method);
        let {username,password}=req.body;
        let data=new User({
            username:username,
            password:password
        });
        let dataresponse=await data.save();

        res.status(200).json(dataresponse);
    }
    catch(err){console.log(err)}
}


module.exports={
    postUser,
    getUser,
    getUserByUserName
}