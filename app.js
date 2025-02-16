
const express = require("express")
const crude = require("./ContactClass") 
const app = express()

//crud.selectNewId();
const setruning = setInterval(crude.selectNewId, 5000);

app.listen(3000,() => {
    console.log("Server is running on port 3000, Database is ready to use!")
})
