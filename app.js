// import express module
const express = require("express")

// create app extend functions class express
const app = express();

//route hello word
app.get("/",function(req,res){
    res.write("Congratulations, your make your first API with node!")
    res.end()
})

//create server

app.listen(3000)