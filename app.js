
const express = require("express")
const Crude = require("./ContactClass")

const app = express()



const crud = new Crude()

//const sql = "INSERT INTO `contacts` (`name`,`phone`) VALUES ('João','2178885589'); SET @id_cont = LAST_INSERT_ID(); INSERT INTO `poll` (`id_cont`,`message`,`datatime`) VALUES (@id_cont, 'now is running...', DATE_FORMAT(NOW(),'%H:%i:%s %d/%m/%Y'));"

crud.insertContato("select * from contacts")

app.listen(3000,() => {
    console.log("Node is running...")
})
