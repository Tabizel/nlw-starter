const sqlite3 = require("sqlite3").verbose()
const db = new sqlite3.Database("./src/database/database.db")
module.exports = db

/*
db.serialize(() => {
    db.run(`
    CREATE TABLE IF NOT EXISTS places (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            image TEXT,
            address TEXT,
            address2 TEXT,
            state TEXT,
            city TEXT,
            items TEXT
        );
    `)
/*
    const query = `
        INSERT INTO places (
            name,
            image,
            address,
            address2,
            state,
            city,
            items
        ) VALUES (
            ?,
            ?,
            ?,
            ?,
            ?,
            ?,
            ?
        );`

    const values = [
        "Papersider",
        "http://127.0.0.1:3000/images/Papersider.jpg",
        "Guilherme Gemballa, Jardim América",
        "Nº 260",
        "Santa Catarina",
        "Rio do Sul",
        "Papéis e Papelão"
    ]

    function afterInsertData(err){
        if(err){
            return console.log(err)
        }
        console.log("Cadastrado com sucesso")
        console.log(this)
    }
*/
    //db.run(query, values, afterInsertData)
/*
    db.all(`SELECT * FROM places`, function(err, rows){
        if(err){
            return console.log(err)
        }
        console.log("Aqui estão os registros: ")
        console.log(rows)
    })
*/
/*
    db.run(`DELETE FROM places WHERE id = ?`, [5], function(err){
        if(err){
            return console.log(err)
        }
        console.log("Register deleted")
    })
*/
//})
