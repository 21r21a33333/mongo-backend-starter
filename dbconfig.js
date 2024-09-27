const { default: mongoose } = require("mongoose")
const env=require("./config");
console.log(env)

function db_connect(){
    mongoose.connect(env.MONGO_URL)
  .then(()=>{
    console.log("Connected to MongoDB");
  })
  .catch((err)=>{
    console.log(err);
    console.log("Couldn't connect to MongoDB");
})
}

module.exports={db_connect};



