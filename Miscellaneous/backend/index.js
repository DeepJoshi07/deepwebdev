const express = require("express");
const app = express();
const port = 3000;

app.use(express.urlencoded({expected:true}));
app.use(express.json());

app.get("/request",(req,res)=>{
    res.send("Hello World Get");
})
app.post("/request",(req,res)=>{
    
    let body = req.body;
    console.log(body);

    res.send("Hello World Post "+body.name);
})
app.listen(port,(req,res)=>{
   
    console.log(`server is running on port ${port}`);
})