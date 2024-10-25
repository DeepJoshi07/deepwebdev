const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname,"public/css")));
app.use(express.static(path.join(__dirname,"public/js")));
app.set("views",path.join(__dirname,"/views"));
app.set("view engine","ejs");

app.get("/",(req,res)=>{
    res.render("index.ejs");
})
app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
})

app.get("/rolldice",(req,res)=>{
    let num = Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs",{num})
})

app.get("/ig/:username",(req,res)=>{
    let {username} = req.params;
    let instadata = require("./data.json");
    let data = instadata[username];
    res.render("instagram.ejs",{data})
})