const { addAllData, getAllData, getSalaryData, getExpData, getGradExpData, updateSalary, deleteData } = require("../controller/employee");
const router = require("express").Router();

router.post('/add_data', addAllData);
router.get('/all_data', getAllData);
router.get("/salary_data", getSalaryData);
router.get("/exp_data", getExpData);
router.get("/grad_exp_data", getGradExpData);
router.put("/update_salary", updateSalary);
router.delete("/delete_data", deleteData);

module.exports=router;