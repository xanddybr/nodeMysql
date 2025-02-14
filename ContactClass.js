
const { exit } = require("process")
const mysqlCommand = require("./conn")

class Crude {

    id_count
    name
    phone
    namepoll
    create_at

constructor(){ }

select(sql){
    mysqlCommand.query(sql, (err,result)=> {
        if(err) {
           throw err = new Error("mysql not connected")
        }
        console.log(result)
   })
}

insert_Ifnot_Exist(name1){

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

deleteContact(sql){
    mysqlCommand.query(sql, (err,result)=> {
        if(err) {
           throw err = new Error("mysql not connected")
        }
        console.log(result)
   })
}


}

module.exports = Crude