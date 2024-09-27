const express=require("express")
const router=express.Router();
const {
    postUser,
    getUser,
    getUserByUserName
}=require("../controllers/usercontrollers");
const User = require("../models/user");

router.route("/")
    .get(getUser)
    .post(postUser)

    router.get("/userwithfriend",async(req,res)=>{
        console.log("friends data ",req.method);
        let data=await User.find().populate("friend");
        res.json(data);
    })
router.get("/:username",getUserByUserName)

module.exports=router;