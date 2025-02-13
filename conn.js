const mysql = require("mysql2")

const mysqlCommand = mysql .createConnection ({
    host: "localhost",
    user: "root",
    port: 3306,
    password: "Alex@1797",
    database: "TEST",
    multipleStatements: true
})

mysqlCommand.connect((err)=>{
    if(err) {
        throw err = new Error("mysql not connected")
    }
    console.log("Mysql connected..")
})

module.exports = mysqlCommand
