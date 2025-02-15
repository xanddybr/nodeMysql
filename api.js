// import express module
const express = require("express");
const mysqlCommand = require("./conn")

// create app extend functions class express
    const app = express();

    app.use(express.json())
    app.use(express.urlencoded({extended:true}))

    app.get("/user",(req,res)=> {
        let sql = 'SELECT * from contacts, poll where contacts.id_cont = poll.id_cont';
        mysqlCommand.query(sql, (err,result)=>{
            if(err) {
                throw err = new Error("mysql not connected")
            }
            res.json(result)
            res.end()
        })
    })

    app.post("/user",(req,res)=>{
        let sql = 'insert into contacts (name,phone) values ("'+req.body.name+'","'+req.body.phone+'")'
        mysqlCommand.query(sql, (err,result)=>{
            if(err) {
                throw err = new Error("mysql not connected")
            }
            res.json(result)
            res.end()
        })
    })

    app.put("/user/:id",(req,res)=>{
        let sql = 'update contacts set name = "'+req.body.name+'", phone = "'+req.body.phone+'" where id = '+req.params.id
        mysqlCommand.query(sql, (err,result)=>{
            if(err) {
                throw err = new Error("mysql not connected")
            }
            console.log(result)
            res.end()
        })
    })

    app.delete("/user/:id",(req,res)=>{
        let sql = 'delete from contacts where id = '+req.params.id
        mysqlCommand.query(sql, (err,result)=>{
            if(err) {
                throw err = new Error("mysql not connected")
            }
            console.log(result)
            res.end()
        })
    })
   
    app.listen(3001, ()=> {
    console.log("Server is running on port 3001, API is ready to use!")
   })
    