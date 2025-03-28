import mongoose from "mongoose";

const EmpSchema = new mongoose.Schema({
    name:String,
    email:String,
    password:String,
})

const EmpModel = mongoose.model("employee",EmpSchema)  // employee is a collection name inside database

export default EmpModel;