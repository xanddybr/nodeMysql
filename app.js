
const express = require("express")
const Crude = require("./ContactClass")

const app = express()

const crud = new Crude();

crud.select()


app.listen(3000,() => {
    console.log("Server is running on port 3000, Database is ready to use!")
})
