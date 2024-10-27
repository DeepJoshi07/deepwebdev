const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const {v4 : uuidv4} =require("uuid");
const methodOverride = require("method-override");

app.set("view engine","ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname,"public/css")));

app.use(express.urlencoded({expected:true}));
app.use(methodOverride('_method'))

app.listen(port,(req,res)=>{
    console.log(`server is running on port ${port}`);
})

let posts =[
    {
        id : uuidv4(),
        username:"deep",
        content:"I love coding",
    },
    {
        id : uuidv4(),
        username:"deep2",
        content:"I don't love coding"
    },
    {   
        id : uuidv4(),
        username:"deep3",
        content:"I love coding so much"
    },
]

app.get("/posts",(req,res)=>{
    res.render("index.ejs",{posts})
})
app.get("/posts/new",(req,res)=>{
    res.render("new.ejs");
})
app.post("/posts",(req,res)=>{
    let {username,content} = req.body;
    let id = uuidv4();
    posts.push({id,username,content});
    res.redirect("/posts")
})
app.get("/posts/:id",(req,res)=>{
    let { id }= req.params;
    let post = posts.find((p) => id === p.id);
    res.render("post.ejs",{post});
})
app.patch("/posts/:id",(req,res)=>{
    let { id }= req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
})
app.get("/posts/:id/edit",(req,res)=>{
    let { id }= req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs",{post});
})