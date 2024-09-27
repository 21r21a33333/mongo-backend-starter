const express=require("express")
const {db_connect:connect}=require("./dbconfig");
const mongoose=require("mongoose");
const User=require("./models/users")

connect();

console.log(User)

async function creatuser(){
    try{
        const newUser = new User({
            username: 'john_doe',
            password: 'password123'
          });
        let data=await newUser.save();
        //console.log("data") ;   
    }catch(err){
        console.log(err);
    }
}
// creatuser();

async function find(){
    try{
        console.log("finding");
    let data=await User.find({
        username:"john_doe"
    })
    console.log("found data:\n",data)
    }
    catch(err){
        console.log(err)
    }
}

find();


