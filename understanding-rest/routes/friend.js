const express=require("express");
const {
    getFriends,
    creteFriends
}=require("../controllers/friendlistcontroller")
const router=express.Router();

router.get("/",getFriends)
router.post("/",creteFriends)

module.exports=router;