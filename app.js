// import express module
const express = require("express");

// create app extend functions class express
const app = express();
const mysql = require("mysql2");

const data = []

const conexao = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "Alex@1797",
    database: "TEST"
})

conexao.connect((err)=>{
    try{
        if(err){
            throw err = new Error("database unable to connect")
        }

    }catch(err){
        console.log(err)
    }
})

let sql = "SELECT * FROM contacts";

conexao.query(sql,(err,result)=>{
    if(err){
        console.log(err)
    }else{
        data.push(result)
    }
})

app.post("/",(req,res)=>{
    users.push(req.body)
    res.json("post method running...")
})

//route hello word
app.get("/",(req,res)=> {
   res.json(data)
   conexao.end()   
})

app.get("/id/:id",(req,res)=> {
    res.json(data[0][req.params.id])
 })

//create server
app.listen(3000)
