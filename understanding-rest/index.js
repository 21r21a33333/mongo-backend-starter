const express=require('express');
const {databaseconnect}=require("./dbconfig");
const userRouter=require("./routes/userroutes");
const friendRouter=require("./routes/friend")
const User = require('./models/user');

//establishing connection
databaseconnect();
//creating app
const app=express();

//parsing middlewares
app.use(express.json())
app.use(express.urlencoded({extended:true}));



//router
app.use('/apis', userRouter);
app.use('/friends',friendRouter);
app.use("*",(req,res)=>{
    res.json({ "staus":"no page found "})
})
app.listen(3000,()=>{
    console.log("server stated at 3000")
})

