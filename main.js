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
    
    RUN(task,usetable,input1,input2,input3,input4,input5){
        //console.log("main.js")

        if(task == "SEARCH"){
            //console.log(input);
            // console.log(input2);
            if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 == ""){
                return this.wholetable(usetable);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 == "" && input4 == "" && input5 == ""){
                return this.SearchByTableReq(usetable,input2);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 != "" && input4 == "" && input5 == ""){
                return this.SearchByTableLoc(usetable,input3);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 != "" && input5 == ""){
                return this.SearchByTablePer(usetable,parseFloat(input4));
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 != ""){
                return this.SearchByTableFound(usetable,input5);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 != "" && input4 == "" && input5 == ""){
                return this.SearchByTableReqLoc(usetable,input2,input3);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 == "" && input4 != "" && input5 == ""){
                return this.SearchByTableReqPer(usetable,input2,input4);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 == "" && input4 == "" && input5 != ""){
                return this.SearchByTableReqFound(usetable,input2,input5);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 != "" && input4 != "" && input5 == ""){
                return this.SearchByTableReqLocPer(usetable,input2,input3,input4);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 != "" && input4 == "" && input5 != ""){
                return this.SearchByTableReqLocFound(usetable,input2,input3,input5);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 != "" && input4 != "" && input5 != ""){
                return this.SearchByTableReqLocPerFound(usetable,input2,input3,input4,input5);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 != "" && input4 != "" && input5 == ""){
                return this.SearchByTableLocPer(usetable,input3,input4);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 != "" && input4 == "" && input5 != ""){
                return this.SearchByTableLocFound(usetable,input3,input5);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 != "" && input5 != ""){
                return this.SearchByTablePerFound(usetable,input4,input5);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 == "" && input4 != "" && input5 != ""){
                return this.SearchByTableReqPerFound(usetable,input2,input4,input5);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 != "" && input4 != "" && input5 != ""){
                return this.SearchByTableLocPerFound(usetable,input3,input4,input5);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == ""){
                return this.SearchByTableName(usetable,input1);
            } else if(usetable != "" && input1 != "" && input2 != "" && input3 == "" && input4 == "" && input5 == ""){
                return this.SearchByTableNameReq(usetable,input1,input2);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 != "" && input4 == "" && input5 == ""){
                return this.SearchByTableNameLoc(usetable,input1,input3);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 != "" && input5 == ""){
                return this.SearchByTableNamePer(usetable,input1,input4);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 != ""){
                return this.SearchByTableNameFound(usetable,input1,input5);
            } else if(usetable != "" && input1 != "" && input2 != "" && input3 != "" && input4 == "" && input5 == ""){
                return this.SearchByTableNameReqLoc(usetable,input1,input2,input3);
            } else if(usetable != "" && input1 != "" && input2 != "" && input3 == "" && input4 != "" && input5 == ""){
                return this.SearchByTableNameReqPer(usetable,input1,input2,input4);
            } else if(usetable != "" && input1 != "" && input2 != "" && input3 == "" && input4 == "" && input5 != ""){
                return this.SearchByTableNameReqFound(usetable,input1,input2,input5);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 != "" && input4 != "" && input5 == ""){
                return this.SearchByTableNameLocPer(usetable,input1,input3,input4);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 != "" && input4 == "" && input5 != ""){
                return this.SearchByTableNameLocFound(usetable,input1,input3,input5);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 != "" && input5 != ""){
                return this.SearchByTableNamePerFound(usetable,input1,input4,input5);
            } else if(usetable != "" && input1 != "" && input2 != "" && input3 != "" && input4 != "" && input5 == ""){
                return this.SearchByTableNameReqLocPer(usetable,input1,input2,input3,input4);
            } else if(usetable != "" && input1 != "" && input2 != "" && input3 != "" && input4 == "" && input5 != ""){
                return this.SearchByTableNameReqLocFound(usetable,input1,input2,input3,input5);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 != "" && input4 != "" && input5 != ""){
                return this.SearchByTableNameLocPerFound(usetable,input1,input3,input4,input5);
            } else if(usetable != "" && input1 != "" && input2 != "" && input3 != "" && input4 != "" && input5 != ""){
                return this.SearchByTableNameReqLocPerFound(usetable,input1,input2,input3,input4,input5);
            } 

        } else if(task == "ADD"){
            if(usetable != "" && input1 != "" && input2 != "" && input3 != "" && input4 != "" && input5 != ""){
                return this.ADDInsert(usetable,input1,input2,input3,input4,input5);
            } 
        } else if(task == "DELETE"){
            if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 == ""){
                return this.DeleteByTable(usetable);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 == "" && input4 == "" && input5 == ""){
                return this.DeleteByTableReq(usetable,input2);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 != "" && input4 == "" && input5 == ""){
                return this.DeleteByTableLoc(usetable,input3);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 != "" && input5 == ""){
                return this.DeleteByTablePer(usetable,parseFloat(input4));
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 != ""){
                return this.DeleteByTableFound(usetable,input5);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 != "" && input4 == "" && input5 == ""){
                return this.DeleteByTableReqLoc(usetable,input2,input3);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 == "" && input4 != "" && input5 == ""){
                return this.DeleteByTableReqPer(usetable,input2,input4);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 == "" && input4 == "" && input5 != ""){
                return this.DeleteByTableReqFound(usetable,input2,input5);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 != "" && input4 != "" && input5 == ""){
                return this.DeleteByTableReqLocPer(usetable,input2,input3,input4);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 != "" && input4 == "" && input5 != ""){
                return this.DeleteByTableReqLocFound(usetable,input2,input3,input5);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 != "" && input4 != "" && input5 != ""){
                return this.DeleteByTableReqLocPerFound(usetable,input2,input3,input4,input5);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 != "" && input4 != "" && input5 == ""){
                return this.DeleteByTableLocPer(usetable,input3,input4);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 != "" && input4 == "" && input5 != ""){
                return this.DeleteByTableLocFound(usetable,input3,input5);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 != "" && input5 != ""){
                return this.DeleteByTablePerFound(usetable,input4,input5);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 == "" && input4 != "" && input5 != ""){
                return this.DeleteByTableReqPerFound(usetable,input2,input4,input5);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 != "" && input4 != "" && input5 != ""){
                return this.DeleteByTableLocPerFound(usetable,input3,input4,input5);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == ""){
                return this.DeleteByTableName(usetable,input1);
            } else if(usetable != "" && input1 != "" && input2 != "" && input3 == "" && input4 == "" && input5 == ""){
                return this.DeleteByTableNameReq(usetable,input1,input2);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 != "" && input4 == "" && input5 == ""){
                return this.DeleteByTableNameLoc(usetable,input1,input3);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 != "" && input5 == ""){
                return this.DeleteByTableNamePer(usetable,input1,input4);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 != ""){
                return this.DeleteByTableNameFound(usetable,input1,input5);
            } else if(usetable != "" && input1 != "" && input2 != "" && input3 != "" && input4 == "" && input5 == ""){
                return this.DeleteByTableNameReqLoc(usetable,input1,input2,input3);
            } else if(usetable != "" && input1 != "" && input2 != "" && input3 == "" && input4 != "" && input5 == ""){
                return this.DeleteByTableNameReqPer(usetable,input1,input2,input4);
            } else if(usetable != "" && input1 != "" && input2 != "" && input3 == "" && input4 == "" && input5 != ""){
                return this.DeleteByTableNameReqFound(usetable,input1,input2,input5);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 != "" && input4 != "" && input5 == ""){
                return this.DeleteByTableNameLocPer(usetable,input1,input3,input4);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 != "" && input4 == "" && input5 != ""){
                return this.DeleteByTableNameLocFound(usetable,input1,input3,input5);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 != "" && input5 != ""){
                return this.DeleteByTableNamePerFound(usetable,input1,input4,input5);
            } else if(usetable != "" && input1 != "" && input2 != "" && input3 != "" && input4 != "" && input5 == ""){
                return this.DeleteByTableNameReqLocPer(usetable,input1,input2,input3,input4);
            } else if(usetable != "" && input1 != "" && input2 != "" && input3 != "" && input4 == "" && input5 != ""){
                return this.DeleteByTableNameReqLocFound(usetable,input1,input2,input3,input5);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 != "" && input4 != "" && input5 != ""){
                return this.DeleteByTableNameLocPerFound(usetable,input1,input3,input4,input5);
            } else if(usetable != "" && input1 != "" && input2 != "" && input3 != "" && input4 != "" && input5 != ""){
                return this.DeleteByTableNameReqLocPerFound(usetable,input1,input2,input3,input4,input5);
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            
            // else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == ""){
            //     return this.DeleteByTableName(usetable,input1);
            // } else if(usetable != "" && input1 == "" && input2 != "" && input3 == "" && input4 == "" && input5 == ""){
            //     return this.DeleteByTableReq(usetable,input2);
            // } else if(usetable != "" && input1 == "" && input2 == "" && input3 != "" && input4 == "" && input5 == ""){
            //     return this.DeleteByTableLoc(usetable,input3);
            // } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 != "" && input5 == ""){
            //     return this.DeleteByTablePer(usetable,input4);
            // } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 != ""){
            //     return this.DeleteByTableFound(usetable,input5);
            // } else if(usetable != "" && input1 != "" && input2 != "" && input3 == "" && input4 == "" && input5 != ""){
            //     return this.DeleteByTableNameReq(usetable,input1,input2);
            // } else if(usetable != "" && input1 != "" && input2 != "" && input3 == "" && input4 == "" && input5 != ""){
            //     return this.DeleteByTableNameLoc(usetable,input1,input3);
            } 


        } else if(task == "EDIT"){

        } else {
            
            //document.getElementById("SELECTERROR").innerHTML = "Please Select an Option";
        }
    
    }

    getKey(usetable){
        if(usetable == "Bosses"){
            return "b"
        } else if(usetable == "Charms"){
            return "c"
        } else if(usetable == "Colosseum"){
            return "co"
        } else if(usetable == "DreamWorld"){
            return "dw"
        } else if(usetable == "Dreamers"){
            return "d"
        } else if(usetable == "Equipment"){
            return "e"
        } else if(usetable == "GodHome"){
            return "gh"
        } else if(usetable == "GrimmTroupe"){
            return "gt"
        } else if(usetable == "MaskShards"){
            return "m"
        } else if(usetable == "NailArts"){
            return "na"
        } else if(usetable == "NailUpgrades"){
            return "nu"
        } else if(usetable == "Spells"){
            return "s"
        } else if(usetable == "VesselFragments"){
            return "v"
        } else if(usetable == "WarriorDreams"){
            return "wd"
        }
    }

    wholetable(usetable){
        //console.log("TEST")
        return this.all(
            "SELECT * FROM " + usetable,
            []
        )
    }
    SearchByTableReq(usetable,input2){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +"%'",
            []
        )
    }
    SearchByTableLoc(usetable,input3){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'",
            []
        )
    }
    SearchByTablePer(usetable,input4){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_percentage = ?",
            [input4]
        )
    }
    SearchByTableFound(usetable,input5){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_found = ?",
            [input5]
        )
    }
    SearchByTableReqLoc(usetable,input2,input3){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'",
            []
        )
    }
    SearchByTableReqPer(usetable,input2,input4){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(usetable) + "_percentage = ?",
            [input4]
        )
    }
    SearchByTableReqFound(usetable,input2,input5){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(usetable) + "_found = ?",
            [input5]
        )
    }
    SearchByTableReqLocPer(usetable,input2,input3,input4){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?",
            [input4]
        )
    }
    SearchByTableReqLocFound(usetable,input2,input3,input5){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input5]
        )
    }
    SearchByTableReqLocPerFound(usetable,input2,input3,input4,input5){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input4,input5]
        )
    }
    SearchByTableLocPer(usetable,input3,input4){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?",
            [input4]
        )
    }
    SearchByTableLocFound(usetable,input3,input5){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input5]
        )
    }
    SearchByTablePerFound(usetable,input4,input5){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_percentage = ?" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input4,input5]
        )
    }
    SearchByTableReqPerFound(usetable,input2,input4,input5){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(usetable) + "_percentage = ?" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input4,input5]
        )
    }
    SearchByTableLocPerFound(usetable,input3,input4,input5){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input4,input5]
        )
    }
    SearchByTableName(usetable,input1){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'",
            []
        )
    }
    SearchByTableNameReq(usetable,input1,input2){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +"%'",
            []
        )
    }
    SearchByTableNameLoc(usetable,input1,input3){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'",
            []
        )
    }
    SearchByTableNamePer(usetable,input1,input4){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?",
            [input4]
        )
    }
    SearchByTableNameFound(usetable,input1,input5){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input5]
        )
    }
    SearchByTableNameReqLoc(usetable,input1,input2,input3){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +"%'" +
            " AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'",
            []
        )
    }
    SearchByTableNameReqPer(usetable,input1,input2,input4){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?",
            [input4]
        )
    }
    SearchByTableNameReqFound(usetable,input1,input2,input5){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +"%'" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input5]
        )
    }
    SearchByTableNameLocPer(usetable,input1,input3,input4){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?",
            [input4]
        )
    }
    SearchByTableNameLocFound(usetable,input1,input3,input5){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input5]
        )
    }
    SearchByTableNamePerFound(usetable,input1,input4,input5){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input4,input5]
        )
    }
    SearchByTableNameReqLocPer(usetable,input1,input2,input3,input4){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +"%'" +
            " AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?",
            [input4]
        )
    }
    SearchByTableNameReqLocFound(usetable,input1,input2,input3,input5){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +"%'" +
            " AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input5]
        )
    }
    SearchByTableNameLocPerFound(usetable,input1,input3,input4,input5){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input4,input5]
        )
    }
    SearchByTableNameReqLocPerFound(usetable,input1,input2,input3,input4,input5){
        return this.all(
            "SELECT * FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +"%'" +
            " AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input4,input5]
        )
    }


    ADDInsert(usetable,input1,input2,input3,input4,input5){
        return this.all(
            "INSERT INTO " + usetable + " VALUES(?,?,?,?,?)",
            [input1,input2,input3,input4,input5]
        )
    }

    DeleteByTable(usetable){
        return this.all(
            "DELETE FROM " + usetable,
            []
        )
    }
    // DeleteByTableName(usetable,input1){
    //     return this.all(
    //         "DELETE FROM " + usetable + " WHERE " + this.getKey(usetable) + "_name = ?",
    //         [input1]
    //     )
    // }
    // DeleteByTableReq(usetable,input2){
    //     return this.all(
    //         "DELETE FROM " + usetable + " WHERE " + this.getKey(usetable) + "_requirements = ?",
    //         [input2]
    //     )
    // }
    // DeleteByTableLoc(usetable,input3){
    //     return this.all(
    //         "DELETE FROM " + usetable + " WHERE " + this.getKey(usetable) + "_location = ?",
    //         [input3]
    //     )
    // }
    // DeleteByTablePer(usetable,input4){
    //     return this.all(
    //         "DELETE FROM " + usetable + " WHERE " + this.getKey(usetable) + "_percentage = ?",
    //         [input4]
    //     )
    // }
    // DeleteByTableFound(usetable,input5){
    //     return this.all(
    //         "DELETE FROM " + usetable + " WHERE " + this.getKey(usetable) + "_found = ",
    //         [input5]
    //     )
    // }
    // DeleteByTableNameReq(usetable,input1,input2){
    //     return this.all(
    //         "DELETE FROM " + usetable + " WHERE " + this.getKey(usetable) + "_name = ?"
    //         + " AND " + this.getKey(usetable) + "_requirements = ?",
    //         [input1,input2]
    //     )
    // }

    DeleteByTableReq(usetable,input2){
        return this.all(
            "Delete FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +"%'",
            []
        )
    }
    DeleteByTableLoc(usetable,input3){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'",
            []
        )
    }
    DeleteByTablePer(usetable,input4){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_percentage = ?",
            [input4]
        )
    }
    DeleteByTableFound(usetable,input5){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_found = ?",
            [input5]
        )
    }
    DeleteByTableReqLoc(usetable,input2,input3){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'",
            []
        )
    }
    DeleteByTableReqPer(usetable,input2,input4){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(usetable) + "_percentage = ?",
            [input4]
        )
    }
    DeleteByTableReqFound(usetable,input2,input5){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(usetable) + "_found = ?",
            [input5]
        )
    }
    DeleteByTableReqLocPer(usetable,input2,input3,input4){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?",
            [input4]
        )
    }
    DeleteByTableReqLocFound(usetable,input2,input3,input5){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input5]
        )
    }
    DeleteByTableReqLocPerFound(usetable,input2,input3,input4,input5){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input4,input5]
        )
    }
    DeleteByTableLocPer(usetable,input3,input4){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?",
            [input4]
        )
    }
    DeleteByTableLocFound(usetable,input3,input5){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input5]
        )
    }
    DeleteByTablePerFound(usetable,input4,input5){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_percentage = ?" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input4,input5]
        )
    }
    DeleteByTableReqPerFound(usetable,input2,input4,input5){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +
            "%' AND " + this.getKey(usetable) + "_percentage = ?" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input4,input5]
        )
    }
    DeleteByTableLocPerFound(usetable,input3,input4,input5){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input4,input5]
        )
    }
    DeleteByTableName(usetable,input1){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'",
            []
        )
    }
    DeleteByTableNameReq(usetable,input1,input2){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +"%'",
            []
        )
    }
    DeleteByTableNameLoc(usetable,input1,input3){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'",
            []
        )
    }
    DeleteByTableNamePer(usetable,input1,input4){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?",
            [input4]
        )
    }
    DeleteByTableNameFound(usetable,input1,input5){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input5]
        )
    }
    DeleteByTableNameReqLoc(usetable,input1,input2,input3){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +"%'" +
            " AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'",
            []
        )
    }
    DeleteByTableNameReqPer(usetable,input1,input2,input4){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?",
            [input4]
        )
    }
    DeleteByTableNameReqFound(usetable,input1,input2,input5){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +"%'" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input5]
        )
    }
    DeleteByTableNameLocPer(usetable,input1,input3,input4){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?",
            [input4]
        )
    }
    DeleteByTableNameLocFound(usetable,input1,input3,input5){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input5]
        )
    }
    DeleteByTableNamePerFound(usetable,input1,input4,input5){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input4,input5]
        )
    }
    DeleteByTableNameReqLocPer(usetable,input1,input2,input3,input4){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +"%'" +
            " AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?",
            [input4]
        )
    }
    DeleteByTableNameReqLocFound(usetable,input1,input2,input3,input5){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +"%'" +
            " AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input5]
        )
    }
    DeleteByTableNameLocPerFound(usetable,input1,input3,input4,input5){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input4,input5]
        )
    }
    DeleteByTableNameReqLocPerFound(usetable,input1,input2,input3,input4,input5){
        return this.all(
            "DELETE FROM " + usetable +
            " WHERE " + this.getKey(usetable) + "_name LIKE '%" + input1 +"%'" +
            " AND " + this.getKey(usetable) + "_requirements LIKE '%" + input2 +"%'" +
            " AND " + this.getKey(usetable) + "_location LIKE '%" + input3 +"%'" +
            " AND " + this.getKey(usetable) + "_percentage = ?" +
            " AND " + this.getKey(usetable) + "_found = ?",
            [input4,input5]
        )
    }


}

module.exports = datamain