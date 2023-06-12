const employeeModel = require("../model/employeemodel");

const addAllData = async(req,res)=>{
    const allData=req.body;
    try{
        const employeeData=allData.map((info)=>{
            return({
                firstName: info.firstName,
                lastName: info.lastName,
                salary: info.salary,
                department: info.department,
                lastCompany: info.lastCompany,
                lastSalary: info.lastSalary,
                overallExp: info.overallExp,
                contactInfo: info.contactInfo,
                yearGrad: info.yearGrad,
                gradStream: info.gradStream
            })
        })
        await employeeModel.insertMany(employeeData);
        return res.send({message:"data inserted successfully..."})
    }
    catch(err){
        console.log(err);
    }
}
const getAllData = async(req, res)=>{
    const data = await employeeModel.find({});
    res.json(data);
}
const getSalaryData = async(req, res)=>{
    const data = await employeeModel.find({salary:{$gt:"30000"}}).select('salary');
    res.json(data);
}
const getExpData = async(req, res)=>{
    const data = await employeeModel.find({overallExp:{$gte:"2"}}).select('overallExp');
    res.json(data);
}
const getGradExpData = async(req, res)=>{
    const data = await employeeModel.find({overallExp:{$gt:"1"}, yearGrad:{$gt:"2015"}}).select('overallExp yearGrad');
    res.json(data);
}
const updateSalary = async(req,res)=>{
    const newSalary = req.body;
    console.log(newSalary);
    await employeeModel.updateMany({salary:{$gte:'35000'}}, newSalary);
    res.send({message:'new salary updated successfully...'});
}
const deleteData = async(req,res)=>{
    const receivedQuery = req.body;
    console.log(receivedQuery);
    await employeeModel.deleteMany(receivedQuery);
    res.send({message:'data deleted successfully...'})
}

module.exports={addAllData, getAllData, getSalaryData, getExpData, getGradExpData, updateSalary, deleteData};