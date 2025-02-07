// import express module
const express = require("express");
const { parse } = require("path");
const { stringify } = require("querystring");
const { json } = require("stream/consumers");

// create app extend functions class express
const app = express();
app.use(express.json())

const users = []

app.post("/",(req,res)=>{
    users.push(req.body)
    res.status(201).json(users)
})

//route hello word
app.get("/",function(req,res){
    res.status(200).json(users)
})

//create server

app.listen(3000)