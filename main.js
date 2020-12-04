const sqlite3 = require("sqlite3");
const Promise = require("bluebird");

class datamain{
    constructor(dbFilePath) {
        this.db = new sqlite3.Database(dbFilePath, (err) => {
            if (err) {
                console.log('Could not connect to database', err)
            } else {
                console.log('Connected to database')
            }
        })
    }
    all(sql, params = []) {
        return new Promise((resolve, reject) => {
            this.db.all(sql, params, (err, rows) => {
                if (err) {
                    console.log('Error running sql: ' + sql)
                    console.log(err)
                    reject(err)
                } else {
                    resolve(rows)
                }
            })
        })
    }
    
    RUN(task,input1,input2,input3,input4,input5){
        //console.log("main.js")

        if(task == "SEARCH"){
            console.log(input1);
            console.log(input2);
            if(input1 != null && input2 == "" && input3 == "" && input4 == "" && input5 == ""){
                return this.wholetable(input1);
            }

            
        } else if(task == "ADD"){

;
        } else if(task == "DELETE"){


        } else if(task == "EDIT"){

        } else {
            
            //document.getElementById("SELECTERROR").innerHTML = "Please Select an Option";
        }
    
    }

    wholetable(input1){
        //console.log("TEST")
        return this.all(
            "SELECT * FROM " + input1,
            []
        )
    }
}

module.exports = datamain