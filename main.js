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
            //console.log(input);
            // console.log(input2);
            if(input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == ""){
                return this.wholetable(input1);
            } else if(input1 != "" && input2 != "" && input3 == "" && input4 == "" && input5 == ""){
                return this.SearchByTableReq(input1,input2);
            } else if(input1 != "" && input2 == "" && input3 != "" && input4 == "" && input5 == ""){
                return this.SearchByTableLoc(input1,input3);
            } else if(input1 != "" && input2 == "" && input3 == "" && input4 != "" && input5 == ""){
                return this.SearchByTablePer(input1,parseFloat(input4));
            } else if(input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 != ""){
                return this.SearchByTableFound(input1,input5);
            } else if(input1 != "" && input2 != "" && input3 != "" && input4 == "" && input5 == ""){
                return this.SearchByTableReqLoc(input1,input2,input3);
            } else if(input1 != "" && input2 != "" && input3 == "" && input4 != "" && input5 == ""){
                return this.SearchByTableReqPer(input1,input2,input4);
            } else if(input1 != "" && input2 != "" && input3 == "" && input4 == "" && input5 != ""){
                return this.SearchByTableReqFound(input1,input2,input5);
            } else if(input1 != "" && input2 != "" && input3 != "" && input4 != "" && input5 == ""){
                return this.SearchByTableReqLocPer(input1,input2,input3,input4);
            } else if(input1 != "" && input2 != "" && input3 != "" && input4 == "" && input5 != ""){
                return this.SearchByTableReqLocFound(input1,input2,input3,input5);
            } else if(input1 != "" && input2 != "" && input3 != "" && input4 != "" && input5 != ""){
                return this.SearchByTableReqLocPerFound(input1,input2,input3,input4,input5);
            } else if(input1 != "" && input2 == "" && input3 != "" && input4 != "" && input5 == ""){
                return this.SearchByTableLocPer(input1,input3,input4);
            } else if(input1 != "" && input2 == "" && input3 != "" && input4 == "" && input5 != ""){
                return this.SearchByTableLocFound(input1,input3,input5);
            } else if(input1 != "" && input2 == "" && input3 == "" && input4 != "" && input5 != ""){
                return this.SearchByTablePerFound(input1,input4,input5);
            } else if(input1 != "" && input2 != "" && input3 == "" && input4 != "" && input5 != ""){
                return this.SearchByTableReqPerFound(input1,input2,input4,input5);
            } else if(input1 != "" && input2 == "" && input3 != "" && input4 != "" && input5 != ""){
                return this.SearchByTableLocPerFound(input1,input3,input4,input5);
            } 

        } else if(task == "ADD"){

        } else if(task == "DELETE"){

        } else if(task == "EDIT"){

        } else {
            
            //document.getElementById("SELECTERROR").innerHTML = "Please Select an Option";
        }
    
    }

    getKey(input1){
        if(input1 == "Bosses"){
            return "b"
        } else if(input1 == "Charms"){
            return "c"
        } else if(input1 == "Colosseum"){
            return "co"
        } else if(input1 == "DreamWorld"){
            return "dw"
        } else if(input1 == "Dreamers"){
            return "d"
        } else if(input1 == "Equipment"){
            return "e"
        } else if(input1 == "GodHome"){
            return "gh"
        } else if(input1 == "GrimmTroupe"){
            return "gt"
        } else if(input1 == "MaskShards"){
            return "m"
        } else if(input1 == "NailArts"){
            return "na"
        } else if(input1 == "NailUpgrades"){
            return "nu"
        } else if(input1 == "Spells"){
            return "s"
        } else if(input1 == "VesselFragments"){
            return "v"
        } else if(input1 == "WarriorDreams"){
            return "wd"
        }
    }

    wholetable(input1){
        //console.log("TEST")
        return this.all(
            "SELECT * FROM " + input1,
            []
        )
    }
    SearchByTableReq(input1,input2){
        return this.all(
            "SELECT * FROM " + input1 +
            " WHERE " + this.getKey(input1) + "_requirements LIKE '%" + input2 +"%'",
            []
        )
    }
    SearchByTableLoc(input1,input3){
        return this.all(
            "SELECT * FROM " + input1 +
            " WHERE " + this.getKey(input1) + "_location LIKE '%" + input3 +"%'",
            []
        )
    }
    SearchByTablePer(input1,input4){
        return this.all(
            "SELECT * FROM " + input1 +
            " WHERE " + this.getKey(input1) + "_percentage = ?",
            [input4]
        )
    }
    SearchByTableFound(input1,input5){
        return this.all(
            "SELECT * FROM " + input1 +
            " WHERE " + this.getKey(input1) + "_found = ?",
            [input5]
        )
    }
    SearchByTableReqLoc(input1,input2,input3){
        return this.all(
            "SELECT * FROM " + input1 +
            " WHERE " + this.getKey(input1) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(input1) + "_location LIKE '%" + input3 +"%'",
            []
        )
    }
    SearchByTableReqPer(input1,input2,input4){
        return this.all(
            "SELECT * FROM " + input1 +
            " WHERE " + this.getKey(input1) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(input1) + "_percentage = ?",
            [input4]
        )
    }
    SearchByTableReqFound(input1,input2,input5){
        return this.all(
            "SELECT * FROM " + input1 +
            " WHERE " + this.getKey(input1) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(input1) + "_found = ?",
            [input5]
        )
    }
    SearchByTableReqLocPer(input1,input2,input3,input4){
        return this.all(
            "SELECT * FROM " + input1 +
            " WHERE " + this.getKey(input1) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(input1) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(input1) + "_percentage = ?",
            [input4]
        )
    }
    SearchByTableReqLocFound(input1,input2,input3,input5){
        return this.all(
            "SELECT * FROM " + input1 +
            " WHERE " + this.getKey(input1) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(input1) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(input1) + "_found = ?",
            [input5]
        )
    }
    SearchByTableReqLocPerFound(input1,input2,input3,input4,input5){
        return this.all(
            "SELECT * FROM " + input1 +
            " WHERE " + this.getKey(input1) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(input1) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(input1) + "_percentage = ?" +
            " AND " + this.getKey(input1) + "_found = ?",
            [input4,input5]
        )
    }
    SearchByTableLocPer(input1,input3,input4){
        return this.all(
            "SELECT * FROM " + input1 +
            " WHERE " + this.getKey(input1) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(input1) + "_percentage = ?",
            [input4]
        )
    }
    SearchByTableLocFound(input1,input3,input5){
        return this.all(
            "SELECT * FROM " + input1 +
            " WHERE " + this.getKey(input1) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(input1) + "_found = ?",
            [input5]
        )
    }
    SearchByTablePerFound(input1,input4,input5){
        return this.all(
            "SELECT * FROM " + input1 +
            " WHERE " + this.getKey(input1) + "_percentage = ?" +
            " AND " + this.getKey(input1) + "_found = ?",
            [input4,input5]
        )
    }
    SearchByTableReqPerFound(input1,input2,input4,input5){
        return this.all(
            "SELECT * FROM " + input1 +
            " WHERE " + this.getKey(input1) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(input1) + "_percentage = ?" +
            " AND " + this.getKey(input1) + "_found = ?",
            [input4,input5]
        )
    }
    SearchByTableLocPerFound(input1,input3,input4,input5){
        return this.all(
            "SELECT * FROM " + input1 +
            " WHERE " + this.getKey(input1) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(input1) + "_percentage = ?" +
            " AND " + this.getKey(input1) + "_found = ?",
            [input4,input5]
        )
    }

}

module.exports = datamain