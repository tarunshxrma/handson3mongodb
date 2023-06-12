const express = require("express");
const employeeRouter = require("./routes/employee");
const connectDb = require("./config/mongoose");

const app = express();
app.use(express.json());

app.get('/', (req,res)=>{
    res.send({message:"this is the Homepage..."})
});
app.use('/api/human_resource', employeeRouter);

app.listen(4050, async()=>{
    try{
        await connectDb();
        console.log("server is connected to the port 4050");
    }
    catch(err){
        console.log("error in running server", err);
    }
});