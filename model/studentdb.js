// to access mongoos
const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://Prithviraj:Prithviraj2003@cluster0.thhay5q.mongodb.net/?retryWrites=true&w=majority")
.then(()=>{
    console.log("DB Connected")
})
.catch(err=>console.log(err));
let Schema = mongoose.Schema;
//creating instance for schema
const studentSchema = new Schema({
    sname:String,
    sgrade:Number
})
var studentModel = mongoose.model("students",studentSchema);
module.exports = studentModel