
const express = require("express")

const Crude = require("./ContactClass")

const app = express()

const crud = new Crude()

const sqldelete = "DELETE FROM contacts WHERE id_cont in ()";

const sqlinsert = "INSERT INTO contacts (`name`,`phone`) VALUES ('Alex','2124987860'); SET @id_cont = LAST_INSERT_ID(); INSERT INTO `poll` (`id_cont`,`message`,`datatime`) VALUES (@id_cont, 'Im participate of first poll', DATE_FORMAT(NOW(),'%H:%i:%s %d/%m/%Y'))";

const sqlselect = "SELECT * FROM contacts";

const nameCont = "Claudia";

const sqlSrcExist = "SELECT * FROM contacts where name like 'luiz'"

crud.select(sqlselect)


app.listen(3000,() => {
    
})
