// import express module
const express = require("express");
const mysql = require("mysql2")

process.on('uncaughtException', (err) => {
    console.error('Uncaught Exception:', err);
});

// create app extend functions class express
    const app = express();
    app.use(express.json())
    app.use(express.urlencoded({extended:true}))


    const mysqlCommand = mysql.createConnection({
        host: "localhost",
        user: "root",
        port: 3306,
        password: "Alex@1797",
        database: "TEST"
    })

        mysqlCommand.connect((err)=>{
            if(err) {
                throw err = new Error("mysql not connected")
            }
            console.log("mysql connected")
        })


    app.get("/user",(req,res)=> {
        sql = 'select * from contacts'
        mysqlCommand.query(sql, (err,result)=>{
            if(err) {
                throw err = new Error("mysql not connected")
            }
            res.json(result)
            res.end()
        })
        
    })

   app.get("/user/:id",(req,res)=> {
        sql = 'select * from contacts where id = '+ Number(req.params.id)
        mysqlCommand.query(sql, (err,result)=>{
            if(err) {
                throw err = new Error("mysql not connected")
            }
            res.json(result)
            res.end()
        })
    })

    app.post("/user",(req,res)=>{
        sql = 'insert into contacts (name,phone) values ("'+req.body.name+'","'+req.body.phone+'")'
        mysqlCommand.query(sql, (err,result)=>{
            if(err) {
                throw err = new Error("mysql not connected")
            }
            res.json(result)
            res.end()
        })
    })

    app.put("/user/:id",(req,res)=>{
        sql = 'update contacts set name = "'+req.body.name+'", phone = "'+req.body.phone+'" where id = '+req.params.id
        mysqlCommand.query(sql, (err,result)=>{
            if(err) {
                throw err = new Error("mysql not connected")
            }
            console.log(result)
            res.end()
        })
    })

    app.delete("/user/:id",(req,res)=>{
        sql = 'delete from contacts where id = '+req.params.id
        mysqlCommand.query(sql, (err,result)=>{
            if(err) {
                throw err = new Error("mysql not connected")
            }
            console.log(result)
            res.end()
        })
    })
   
    app.listen(3000)