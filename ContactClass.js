
const e = require("express")
const mysqlCommand = require("./conn")
const { exit } = require("process")



 
function selectNewId(){
    let sql = "SELECT * FROM contacts ORDER BY id_cont DESC LIMIT 1"
      mysqlCommand.query(sql, (err,result)=> {
      
        if(err) {
           throw err = new Error("mysql not connected")
        }
        console.log(result, " Register fund...")
   })
}

function select(){
    let sql = "SELECT * FROM contacts, poll where contacts.id_cont = poll.id_cont";
    mysqlCommand.query(sql, (err,result)=> {
        if(err) {
           throw err = new Error("mysql not connected")
        }
        console.log(result)
        console.log(result.length, " Register fund...")
   })
}

function insert_Ifnot_Exist(name1){

    let sql = "SELECT * FROM contacts where name like '"+ name1 +"'"

    mysqlCommand.query(sql, (err,result)=> {
        if(err) {
           throw err = new Error("mysql not connected")
        }

        if(result.length < 1){

            let sql = "INSERT INTO contacts (`name`,`phone`) VALUES ('"+ name1 +"','2124987860'); SET @id_cont = LAST_INSERT_ID(); INSERT INTO `poll` (`id_cont`,`message`,`datatime`) VALUES (@id_cont, 'Im participate of first poll', DATE_FORMAT(NOW(),'%H:%i:%s %d/%m/%Y'))";

            mysqlCommand.query(sql, (err,result)=> {
            console.log("Contato cadastrado com sucesso")

            })

         } else {

            console.log(result[0].name, " Contato já existe")
         }
    }) 

    }

function deleteContact(id_cont){
    let sql = "DELETE FROM contacts WHERE id_cont in ("+ id_cont +")";
    mysqlCommand.query(sql, (err,result)=> {
        if(err) {
           throw err = new Error("mysql not connected")
        }
        console.log(result.serverStatus)
   })
}


module.exports = {
    selectNewId,
    select,
    insert_Ifnot_Exist,
    deleteContact
}