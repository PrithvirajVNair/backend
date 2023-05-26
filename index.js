//1.importing
const express = require('express');
const { model } =require('mongoose');
const studentModel = require('./model/studentdb')
const cors = require("cors")

//2.initialize
const app = new express();
//middleware
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(cors());
//3.create API
//app.get(url,callback)
app.post('/create',(req,res)=>{
   var result = new studentModel(req.body);
   result.save();
   res.send(("data added"))
})
app.get('/view',(req,res)=>{
    res.json({"name":"Prithviraj","age":12})
})

//port
app.listen(8080,()=>{
    console.log("app is running in port 8080")
})
//to view data
app.get('/see',async(req,res)=>{    //async is used to wait before finding all elements....inorder to operate "await" we have to use async
    var data = await studentModel.find()
    res.json(data);
})//delete
app.delete('/delete/:id',async(req,res)=>{
    let id =  req.params.id
    await studentModel.findByIdAndDelete(id)
    res.send("deleted")
})
//update
app.put('/edit/:id',async(req,res)=>{
    var id = req.params.id;
    await studentModel.findByIdAndUpdate(id,req.body);
    res.send("uploaded")
}) 