const mongoose = require("mongoose");
mongoose.set('strictQuery', true);
const uri = "mongodb://127.0.0.1:27017/Human_Resource";

const connectDb = async()=>{
    try{
        const client = await mongoose.connect(uri);
        console.log("connected to mongoDb successfully");
        return client;
    }
    catch(err){
        console.log("error in connecting with MongoDb", err);
    }
}

module.exports=connectDb;