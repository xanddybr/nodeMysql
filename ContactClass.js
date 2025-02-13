
const mysqlCommand = require("./conn")

class Crude {

    id_count
    name
    phone
    namepoll
    create_at

constructor(){}

insertContato(sql){
    mysqlCommand.query(sql, (err,result)=> {
        if(err) {
           throw err = new Error("mysql not connected")
        }
        console.log(result)
   })
}

selectContato(sql){
    mysqlCommand.query(sql, (err,result)=> {
         if(err) {
            throw err = new Error("mysql not connected")
         }
        console.log(result)
    })
}

deleteContato(sql){
    mysqlCommand.query(sql, (err,result)=> {
        if(err) {
            throw err = new Error("mysql not connected")
        }
        console.log(result)
    })
}

}

module.exports = Crude