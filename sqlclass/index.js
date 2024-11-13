const {faker} = require("@faker-js/faker");
const mysql = require('mysql2');
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");
let port = 8080;
let {v4:uuidv4} = require('uuid');

app.set("view engine","ejs");
app.set("views",path.join(__dirname,"views"));
app.use(methodOverride("_method"));
app.use(express.urlencoded({extended:true}));


const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: 'Deep@2002',
    database: 'alph_app',
});
let getRandomUser =()=> {
    return [
       faker.string.uuid(),
       faker.internet.username(), // before version 9.1.0, use userName()
       faker.internet.email(),
       faker.internet.password(),
    ];
  };



app.listen(port,(req,res)=>{
    console.log("i'm listening...")
})
app.get("/",(req,res)=>{
    let q = "SELECT count(*) FROM user";
    try{
    connection.query(q,(err,result)=>{
        if(err) throw err;
        // console.log(result[0]["count(*)"]);
        let count = result[0]["count(*)"];
        res.render("home.ejs",{count});
    });
}catch(err){
    console.log(err);
    res.send("we have got a some sort of error");
}
});


app.get("/user",(req,res)=>{
    let q ="SELECT * FROM user"
    try{
        connection.query(q,(err,users)=>{
            if(err) throw err;
            res.render('showusers.ejs',{users});
        }); 
    }catch(err){
        console.log("we've got an error")
    }
});

app.get("/user/:id/edit",(req,res)=>{
    let id = req.params.id;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs",{user});
        }); 
    }catch(err){
        console.log("we've got an error")
    }
   

    
});

app.patch("/user/:id",(req,res)=>{
    let id = req.params.id;
    let {password:formpass,name:newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user = result[0];
            if(formpass != user.password){
                res.send("password is incorrect");
            }else{
                let q2= `UPDATE user SET name = '${newUsername}' WHERE id = '${id}'`;
                connection.query(q2,(err,result)=>{
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
            
        }); 
    }catch(err){
        console.log("we've got an error")
    }
});

app.get("/user/add",(req,res)=>{
    res.render("add.ejs");
})
app.put("/user/add",(req,res)=>{
    let {name,password,email} = req.body;
    let id = uuidv4();
    let q =`INSERT INTO user(id,name,email,password) VALUES ('${id}','${name}','${email}','${password}')`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            res.redirect("/user");
        })
    }
    catch(err){
        res.send("we got an error!");
    }
});

app.get("/user/:id/delete",(req,res)=>{
    let id = req.params.id;
    let q = `SELECT * FROM user WHERE id = '${id}'`;
    try{
        connection.query(q,(err,result)=>{
            if(err) throw err;
            let user = result[0];
            res.render("delete.ejs",{user});
        }); 
    }catch(err){
        console.log("we've got an error")
    }
    
});

app.delete("/user/:id",(req,res)=>{
    let {password} = req.body.password;
    let id = req.params.id;
    console.log(id);
    try{
        let q =`SELECT * FROM user WHERE id='${id}'`;
        connection.query(q,(err,result)=>{
            if(err) throw err;
            if(result.password === password){
                let q2 = `DELETE FROM user WHERE id = '${id}'`;
                connection.query(q2,(err,result)=>{
                    if(err) throw err;
                    res.redirect("/user");
                })
            }
        })

    }catch(err){
        res.send("got an error")
    }
})





// let q ='INSERT INTO user (id,name,email,password) VALUES (?,?,?,?)';
// let q2 ='INSERT INTO user (id,name,email,password) VALUES ?';
// let data =[101,"deep","deep@email.com","deep277737"];
// let mul_data =[[102,"jay","jay@gamil.com","jay10112002"],
//                 [103,"meet","meet@yahoo.in","meet5112002"]];




// let data =[];
// for(let i = 0;i < 100;i++){
//     data.push(getRandomUser());
// }


// try{
//     connection.query(q2,[data],(err,result)=>{
//         if(err) throw err;
//         console.log(result);
//     });
// }catch(err){
//     console.log(err);
// }
// connection.end();


//   console.log(getRandomUser());