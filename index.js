const express = require("express");
const connect =require("./database.js"); 
const student = require("./student.schema.js");
const app = express();
app.use(express.json());

app.get("/",async(req,res)=>{
    res.send(await student.find());
})

app.post('/study',async(req,res)=>{
    await student.create(req.body)
    res.send("done")
})

app.get('/student',async(req,res)=>{
    let data = await student.find({gender:req.query.gender}).count()
    console.log(data);
    res.send("done with data")
})

app.listen(8091,()=>{
    console.log("listening on port 8091");
    connect()
})