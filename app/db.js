var sqlite3 = require('sqlite3').verbose()
var bcrypt = require('bcrypt')

const DBSOURCE = "db.sqlite" 


let db = new sqlite3.Database(DBSOURCE, (err) => {
    if (err) {
      // Cannot open database
      console.error(err.message)
      throw err
    }else{
        console.log('Connected to the SQlite database.')

        db.run(`CREATE TABLE if not exists user (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name text, 
            email text UNIQUE, 
            created_at text,
            CONSTRAINT email_unique UNIQUE (email)
            )`,(err) => {
        if (err) {
            console.log(err)
        }else{
           console.log("Таблица в параше")
        }
    })  
    }
})


module.exports = db