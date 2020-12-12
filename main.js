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
            if(usetable == "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 == ""){
                return this.wholetableNoInput();
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 == ""){
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
            // search special cases
            // search by name
            else if(usetable == "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == ""){
                return this.SearchByName(input1);
            } 
            // search by req
            else if(usetable == "" && input1 == "" && input2 != "" && input3 == "" && input4 == "" && input5 == ""){
                return this.SearchByReq(input2);
            } 
            // search by loc
            else if(usetable == "" && input1 == "" && input2 == "" && input3 != "" && input4 == "" && input5 == ""){
                return this.SearchByLoc(input3);
            } 
            // search by name
            else if(usetable == "" && input1 == "" && input2 == "" && input3 == "" && input4 != "" && input5 == ""){
                return this.SearchByPer(input4);
            } 
            // search by found
            else if(usetable == "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 != ""){
                return this.SearchByFound(input5);
            } 
            // search by loc + found
            else if(usetable == "" && input1 == "" && input2 == "" && input3 != "" && input4 == "" && input5 != ""){
                return this.SearchByLocFound(input3,input5);
            } 
            // search by req + found
            else if(usetable == "" && input1 == "" && input2 != "" && input3 == "" && input4 == "" && input5 != ""){
                return this.SearchByReqFound(input2,input5);
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
            // should not come here
        } else {
            
            //document.getElementById("SELECTERROR").innerHTML = "Please Select an Option";
        }
    
    }
    EDIT(task,usetable,input1,input2,input3,input4,input5,edit1,edit2,edit3,edit4,edit5){
        if(task == "EDIT"){
            // edit by table
            if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 == "" && edit4 == "" && edit5 == ""){
                return this.EditByTableSETName(usetable,edit1);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 == "" && edit2 != "" && edit3 == "" && edit4 == "" && edit5 == ""){
                return this.EditByTableSETReq(usetable,edit2);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 == "" && edit2 == "" && edit3 != "" && edit4 == "" && edit5 == ""){
                return this.EditByTableSETLoc(usetable,edit3);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 == "" && edit2 == "" && edit3 == "" && edit4 != "" && edit5 == ""){
                return this.EditByTableSETPer(usetable,edit4);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 == "" && edit2 == "" && edit3 == "" && edit4 == "" && edit5 != ""){
                return this.EditByTableSETFound(usetable,edit5);
            } 
            // edit by table by name
            else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 == "" && edit4 == "" && edit5 == ""){
                return this.EditByTableNameSETName(usetable,input1,edit1);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 == "" && edit2 != "" && edit3 == "" && edit4 == "" && edit5 == ""){
                return this.EditByTableNameSETReq(usetable,input1,edit2);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 == "" && edit2 == "" && edit3 != "" && edit4 == "" && edit5 == ""){
                return this.EditByTableNameSETLoc(usetable,input1,edit3);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 == "" && edit2 == "" && edit3 == "" && edit4 != "" && edit5 == ""){
                return this.EditByTableNameSETPer(usetable,input1,edit4);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 == "" && edit2 == "" && edit3 == "" && edit4 == "" && edit5 != ""){
                return this.EditByTableNameSETFound(usetable,input1,edit5);
            } 
            // edit by table by req
            else if(usetable != "" && input1 == "" && input2 != "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 == "" && edit4 == "" && edit5 == ""){
                return this.EditByTableReqSETName(usetable,input2,edit1);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 != "" && edit3 == "" && edit4 == "" && edit5 == ""){
                return this.EditByTableReqSETReq(usetable,input2,edit2);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 != "" && edit4 == "" && edit5 == ""){
                return this.EditByTableReqSETLoc(usetable,input2,edit3);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 == "" && edit4 != "" && edit5 == ""){
                return this.EditByTableReqSETPer(usetable,input2,edit4);
            } else if(usetable != "" && input1 == "" && input2 != "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 == "" && edit4 == "" && edit5 != ""){
                return this.EditByTableReqSETFound(usetable,input2,edit5);
            } 
            // edit by table by loc
            else if(usetable != "" && input1 == "" && input2 == "" && input3 != "" && input4 == "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 == "" && edit4 == "" && edit5 == ""){
                return this.EditByTableLocSETName(usetable,input3,edit1);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 != "" && input4 == "" && input5 == "" && edit1 != "" && edit2 != "" && edit3 == "" && edit4 == "" && edit5 == ""){
                return this.EditByTableLocSETReq(usetable,input3,edit2);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 != "" && input4 == "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 != "" && edit4 == "" && edit5 == ""){
                return this.EditByTableLocSETLoc(usetable,input3,edit3);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 != "" && input4 == "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 == "" && edit4 != "" && edit5 == ""){
                return this.EditByTableLocSETPer(usetable,input3,edit4);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 != "" && input4 == "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 == "" && edit4 == "" && edit5 != ""){
                return this.EditByTableLocSETFound(usetable,input3,edit5);
            } 
            // edit by table by per
            else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 != "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 == "" && edit4 == "" && edit5 == ""){
                return this.EditByTablePerSETName(usetable,input4,edit1);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 != "" && input5 == "" && edit1 != "" && edit2 != "" && edit3 == "" && edit4 == "" && edit5 == ""){
                return this.EditByTablePerSETReq(usetable,input4,edit2);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 != "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 != "" && edit4 == "" && edit5 == ""){
                return this.EditByTablePerSETLoc(usetable,input4,edit3);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 != "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 == "" && edit4 != "" && edit5 == ""){
                return this.EditByTablePerSETPer(usetable,input4,edit4);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 != "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 == "" && edit4 == "" && edit5 != ""){
                return this.EditByTablePerSETFound(usetable,input4,edit5);
            } 
            // edit by table by found
            else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 != "" && edit1 != "" && edit2 == "" && edit3 == "" && edit4 == "" && edit5 == ""){
                return this.EditByTableFoundSETName(usetable,input5,edit1);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 != "" && edit1 != "" && edit2 != "" && edit3 == "" && edit4 == "" && edit5 == ""){
                return this.EditByTableFoundSETReq(usetable,input5,edit2);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 != "" && edit1 != "" && edit2 == "" && edit3 != "" && edit4 == "" && edit5 == ""){
                return this.EditByTableFoundSETLoc(usetable,input5,edit3);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 != "" && edit1 != "" && edit2 == "" && edit3 == "" && edit4 != "" && edit5 == ""){
                return this.EditByTableFoundSETPer(usetable,input5,edit4);
            } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 != "" && edit1 != "" && edit2 == "" && edit3 == "" && edit4 == "" && edit5 != ""){
                return this.EditByTableFoundSETFound(usetable,input5,edit5);
            } 
            
            //edit by table by name set name + 1
            else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 != "" && edit3 == "" && edit4 == "" && edit5 == ""){
                return this.EditByTableNameSETNameReq(usetable,input1,edit1,edit2);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 != "" && edit4 == "" && edit5 == ""){
                return this.EditByTableNameSETNameLoc(usetable,input1,edit1,edit3);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 == "" && edit4 != "" && edit5 == ""){
                return this.EditByTableNameSETNamePer(usetable,input1,edit1,edit4);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 == "" && edit4 == "" && edit5 != ""){
                return this.EditByTableNameSETNameFound(usetable,input1,edit1,edit5);
            } 
            //edit by table by name set name + 2
            else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 != "" && edit3 != "" && edit4 == "" && edit5 == ""){
                return this.EditByTableNameSETNameReqLoc(usetable,input1,edit1,edit2,edit3);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 != "" && edit3 == "" && edit4 != "" && edit5 == ""){
                return this.EditByTableNameSETNameReqPer(usetable,input1,edit1,edit2,edit4);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 != "" && edit3 == "" && edit4 == "" && edit5 != ""){
                return this.EditByTableNameSETNameReqFound(usetable,input1,edit1,edit2,edit5);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 != "" && edit4 != "" && edit5 == ""){
                return this.EditByTableNameSETNameLocPer(usetable,input1,edit1,edit3,edit4);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 != "" && edit4 == "" && edit5 != ""){
                return this.EditByTableNameSETNameLocFound(usetable,input1,edit1,edit3,edit5);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 == "" && edit4 != "" && edit5 != ""){
                return this.EditByTableNameSETNamePerFound(usetable,input1,edit1,edit4,edit5);
            } 
            //edit by table name set name + 3
            else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 != "" && edit3 != "" && edit4 != "" && edit5 == ""){
                return this.EditByTableNameSETNameReqLocPer(usetable,input1,edit1,edit2,edit3,edit4);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 != "" && edit3 != "" && edit4 == "" && edit5 != ""){
                return this.EditByTableNameSETNameReqLocFound(usetable,input1,edit1,edit2,edit3,edit5);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 == "" && edit3 != "" && edit4 != "" && edit5 != ""){
                return this.EditByTableNameSETNameLocPerFound(usetable,input1,edit1,edit3,edit4,edit5);
            } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 != "" && edit3 == "" && edit4 != "" && edit5 != ""){
                return this.EditByTableNameSETNameReqPerFound(usetable,input1,edit1,edit2,edit4,edit5);
            }
            //edit by table name set + 4
            else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == "" && edit1 != "" && edit2 != "" && edit3 != "" && edit4 != "" && edit5 != ""){
                return this.EditByTableNameSETNameReqLocPerFound(usetable,input1,edit1,edit2,edit3,edit4,edit5);
            }
            
            // else if(usetable != "" && input1 == "" && input2 == "" && input3 != "" && input4 == "" && input5 == "" && edit1 == "" && edit2 == "" && edit3 == "" && edit4 == "" && edit5 == ""){
            //     return this.EditByTableLoc(usetable,input3);
            // } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 != "" && input5 == "" && edit1 == "" && edit2 == "" && edit3 == "" && edit4 == "" && edit5 == ""){
            //     return this.EditByTablePer(usetable,parseFloat(input4));
            // } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 == "" && input5 != ""){
            //     return this.EditByTableFound(usetable,input5);
            // } else if(usetable != "" && input1 == "" && input2 != "" && input3 != "" && input4 == "" && input5 == ""){
            //     return this.EditByTableReqLoc(usetable,input2,input3);
            // } else if(usetable != "" && input1 == "" && input2 != "" && input3 == "" && input4 != "" && input5 == ""){
            //     return this.EditByTableReqPer(usetable,input2,input4);
            // } else if(usetable != "" && input1 == "" && input2 != "" && input3 == "" && input4 == "" && input5 != ""){
            //     return this.EditByTableReqFound(usetable,input2,input5);
            // } else if(usetable != "" && input1 == "" && input2 != "" && input3 != "" && input4 != "" && input5 == ""){
            //     return this.EditByTableReqLocPer(usetable,input2,input3,input4);
            // } else if(usetable != "" && input1 == "" && input2 != "" && input3 != "" && input4 == "" && input5 != ""){
            //     return this.EditByTableReqLocFound(usetable,input2,input3,input5);
            // } else if(usetable != "" && input1 == "" && input2 != "" && input3 != "" && input4 != "" && input5 != ""){
            //     return this.EditByTableReqLocPerFound(usetable,input2,input3,input4,input5);
            // } else if(usetable != "" && input1 == "" && input2 == "" && input3 != "" && input4 != "" && input5 == ""){
            //     return this.EditByTableLocPer(usetable,input3,input4);
            // } else if(usetable != "" && input1 == "" && input2 == "" && input3 != "" && input4 == "" && input5 != ""){
            //     return this.EditByTableLocFound(usetable,input3,input5);
            // } else if(usetable != "" && input1 == "" && input2 == "" && input3 == "" && input4 != "" && input5 != ""){
            //     return this.EditByTablePerFound(usetable,input4,input5);
            // } else if(usetable != "" && input1 == "" && input2 != "" && input3 == "" && input4 != "" && input5 != ""){
            //     return this.EditByTableReqPerFound(usetable,input2,input4,input5);
            // } else if(usetable != "" && input1 == "" && input2 == "" && input3 != "" && input4 != "" && input5 != ""){
            //     return this.EditByTableLocPerFound(usetable,input3,input4,input5);
            // } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 == ""){
            //     return this.EditByTableName(usetable,input1);
            // } else if(usetable != "" && input1 != "" && input2 != "" && input3 == "" && input4 == "" && input5 == ""){
            //     return this.EditByTableNameReq(usetable,input1,input2);
            // } else if(usetable != "" && input1 != "" && input2 == "" && input3 != "" && input4 == "" && input5 == ""){
            //     return this.EditByTableNameLoc(usetable,input1,input3);
            // } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 != "" && input5 == ""){
            //     return this.EditByTableNamePer(usetable,input1,input4);
            // } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 == "" && input5 != ""){
            //     return this.EditByTableNameFound(usetable,input1,input5);
            // } else if(usetable != "" && input1 != "" && input2 != "" && input3 != "" && input4 == "" && input5 == ""){
            //     return this.EditByTableNameReqLoc(usetable,input1,input2,input3);
            // } else if(usetable != "" && input1 != "" && input2 != "" && input3 == "" && input4 != "" && input5 == ""){
            //     return this.EditByTableNameReqPer(usetable,input1,input2,input4);
            // } else if(usetable != "" && input1 != "" && input2 != "" && input3 == "" && input4 == "" && input5 != ""){
            //     return this.EditByTableNameReqFound(usetable,input1,input2,input5);
            // } else if(usetable != "" && input1 != "" && input2 == "" && input3 != "" && input4 != "" && input5 == ""){
            //     return this.EditByTableNameLocPer(usetable,input1,input3,input4);
            // } else if(usetable != "" && input1 != "" && input2 == "" && input3 != "" && input4 == "" && input5 != ""){
            //     return this.EditByTableNameLocFound(usetable,input1,input3,input5);
            // } else if(usetable != "" && input1 != "" && input2 == "" && input3 == "" && input4 != "" && input5 != ""){
            //     return this.EditByTableNamePerFound(usetable,input1,input4,input5);
            // } else if(usetable != "" && input1 != "" && input2 != "" && input3 != "" && input4 != "" && input5 == ""){
            //     return this.EditByTableNameReqLocPer(usetable,input1,input2,input3,input4);
            // } else if(usetable != "" && input1 != "" && input2 != "" && input3 != "" && input4 == "" && input5 != ""){
            //     return this.EditByTableNameReqLocFound(usetable,input1,input2,input3,input5);
            // } else if(usetable != "" && input1 != "" && input2 == "" && input3 != "" && input4 != "" && input5 != ""){
            //     return this.EditByTableNameLocPerFound(usetable,input1,input3,input4,input5);
            // } else if(usetable != "" && input1 != "" && input2 != "" && input3 != "" && input4 != "" && input5 != ""){
            //     return this.EditByTableNameReqLocPerFound(usetable,input1,input2,input3,input4,input5);
            // }
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

    wholetableNoInput(){
        return this.all(
            "SELECT * FROM Bosses" +
            " UNION " +
            "SELECT * FROM Charms" +
            " UNION " + 
            "SELECT * FROM Colosseum" +
            " UNION " +
            "SELECT * FROM DreamWorld" +
            " UNION " +
            "SELECT * FROM Dreamers" +
            " UNION " +
            "SELECT * FROM Equipment" +
            " UNION " +
            "SELECT * FROM GodHome" + 
            " UNION " +
            "SELECT * FROM GrimmTroupe" +
            " UNION " +
            "SELECT * FROM MaskShards" +
            " UNION " +
            "SELECT * FROM NailArt" +
            " UNION " +
            "SELECT * FROM NailUpgrades" +
            " UNION " +
            "SELECT * FROM Spells" +
            " UNION " +
            "SELECT * FROM VesselFragments" +
            " UNION " +
            "SELECT * FROM WarriorDreams",
            []
        )
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

    EditByTableSETName(usetable,edit1){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_name = ?",
            [edit1]
        )
    }
    EditByTableSETReq(usetable,edit2){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_requirements = ?",
            [edit2]
        )
    }
    EditByTableSETLoc(usetable,edit3){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_location = ?",
            [edit3]
        )
    }
    EditByTableSETPer(usetable,edit4){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_percentage = ?",
            [edit4]
        )
    }
    EditByTableSETFound(usetable,edit5){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_found = ?",
            [edit5]
        )
    }
    EditByTableNameSETName(usetable,input1,edit1){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_name = ?" + " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit1, input1]
        )
    }
    EditByTableNameSETReq(usetable,input1,edit2){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_requirements = ?" + " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit2, input1]
        )
    }
    EditByTableNameSETLoc(usetable,input1,edit3){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_location = ?" + " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit3, input1]
        )
    }
    EditByTableNameSETPer(usetable,input1,edit4){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_percentage = ?" + " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit4, input1]
        )
    }
    EditByTableNameSETFound(usetable,input1,edit5){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_found = ?" + " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit5, input1]
        )
    }
    EditByTableReqSETName(usetable,input2,edit1){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_name = ?" + " WHERE "+ this.getKey(usetable) + "_requirements = ?",
            [edit1, input2]
        )
    }
    EditByTableReqSETReq(usetable,input2,edit2){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_requirements = ?" + " WHERE "+ this.getKey(usetable) + "_requirements = ?",
            [edit2, input2]
        )
    }
    EditByTableReqSETLoc(usetable,input2,edit3){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_location = ?" + " WHERE "+ this.getKey(usetable) + "_requirements = ?",
            [edit3, input2]
        )
    }
    EditByTableReqSETPer(usetable,input2,edit4){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_percentage = ?" + " WHERE "+ this.getKey(usetable) + "_requirements = ?",
            [edit4, input2]
        )
    }
    EditByTableReqSETFound(usetable,input2,edit5){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_found = ?" + " WHERE "+ this.getKey(usetable) + "_requirements = ?",
            [edit5, input2]
        )
    }
    EditByTableLocSETName(usetable,input3,edit1){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_name = ?" + " WHERE "+ this.getKey(usetable) + "_location = ?",
            [edit1, input3]
        )
    }
    EditByTableLocSETReq(usetable,input3,edit2){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_requirements = ?" + " WHERE "+ this.getKey(usetable) + "_location = ?",
            [edit2, input3]
        )
    }
    EditByTableLocSETLoc(usetable,input3,edit3){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_location = ?" + " WHERE "+ this.getKey(usetable) + "_location = ?",
            [edit3, input3]
        )
    }
    EditByTableLocSETPer(usetable,input3,edit4){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_percentage = ?" + " WHERE "+ this.getKey(usetable) + "_location = ?",
            [edit4, input3]
        )
    }
    EditByTableLocSETFound(usetable,input3,edit5){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_found = ?" + " WHERE "+ this.getKey(usetable) + "_location = ?",
            [edit5, input3]
        )
    }
    EditByTablePerSETName(usetable,input4,edit1){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_name = ?" + " WHERE "+ this.getKey(usetable) + "_percentage = ?",
            [edit1, input4]
        )
    }
    EditByTablePerSETReq(usetable,input4,edit2){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_requirements = ?" + " WHERE "+ this.getKey(usetable) + "_percentage = ?",
            [edit2, input4]
        )
    }
    EditByTablePerSETLoc(usetable,input4,edit3){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_location = ?" + " WHERE "+ this.getKey(usetable) + "_percentage = ?",
            [edit3, input4]
        )
    }
    EditByTablePerSETPer(usetable,input4,edit4){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_percentage = ?" + " WHERE "+ this.getKey(usetable) + "_percentage = ?",
            [edit4, input4]
        )
    }
    EditByTablePerSETFound(usetable,input4,edit5){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_found = ?" + " WHERE "+ this.getKey(usetable) + "_percentage = ?",
            [edit5, input4]
        )
    }
    EditByTableFoundSETName(usetable,input5,edit1){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_name = ?" + " WHERE "+ this.getKey(usetable) + "_found = ?",
            [edit1, input5]
        )
    }
    EditByTableFoundSETReq(usetable,input5,edit2){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_requirements = ?" + " WHERE "+ this.getKey(usetable) + "_found = ?",
            [edit2, input5]
        )
    }
    EditByTableFoundSETLoc(usetable,input5,edit3){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_location = ?" + " WHERE "+ this.getKey(usetable) + "_found = ?",
            [edit3, input5]
        )
    }
    EditByTableFoundSETPer(usetable,input5,edit4){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_percentage = ?" + " WHERE "+ this.getKey(usetable) + "_found = ?",
            [edit4, input5]
        )
    }
    EditByTableFoundSETFound(usetable,input5,edit5){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_found = ?" + " WHERE "+ this.getKey(usetable) + "_found = ?",
            [edit5, input5]
        )
    }
    EditByTableNameSETNameReq(usetable,input1,edit1,edit2){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_name = ?, " + this.getKey(usetable) + "_requirements = ?,"  + " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit1,edit2, input1]
        )
    }
    EditByTableNameSETNameLoc(usetable,input1,edit1,edit3){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_name = ?, " + this.getKey(usetable) + "_location = ?,"  + " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit1,edit3, input1]
        )
    }
    EditByTableNameSETNamePer(usetable,input1,edit1,edit4){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_name = ?, " + this.getKey(usetable) + "_percentage = ?,"  + " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit1,edit4, input1]
        )
    }
    EditByTableNameSETNameFound(usetable,input1,edit1,edit5){
        return this.all(
            "UPDATE " + usetable + " SET " + this.getKey(usetable) + "_name = ?, " + this.getKey(usetable) + "_found = ?,"  + " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit1,edit5, input1]
        )
    }
    EditByTableNameSETNameReqLoc(usetable,input1,edit1,edit2,edit3){
        return this.all(
            "UPDATE " + usetable + 
            " SET " + this.getKey(usetable) + "_name = ?, " + this.getKey(usetable) + "_requirements = ?,"  + this.getKey(usetable) + "_location = ?," +
            " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit1,edit2,edit3, input1]
        )
    }
    EditByTableNameSETNameReqPer(usetable,input1,edit1,edit2,edit4){
        return this.all(
            "UPDATE " + usetable + 
            " SET " + this.getKey(usetable) + "_name = ?, " + this.getKey(usetable) + "_requirements = ?,"  + this.getKey(usetable) + "_percentage = ?," +
            " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit1,edit2,edit4, input1]
        )
    }
    EditByTableNameSETNameReqFound(usetable,input1,edit1,edit2,edit5){
        return this.all(
            "UPDATE " + usetable + 
            " SET " + this.getKey(usetable) + "_name = ?, " + this.getKey(usetable) + "_requirements = ?,"  + this.getKey(usetable) + "_found = ?," +
            " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit1,edit2,edit5, input1]
        )
    }
    EditByTableNameSETNameLocPer(usetable,input1,edit1,edit3,edit4){
        return this.all(
            "UPDATE " + usetable + 
            " SET " + this.getKey(usetable) + "_name = ?, " + this.getKey(usetable) + "_location = ?,"  + this.getKey(usetable) + "_percentage = ?," +
            " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit1,edit3,edit4, input1]
        )
    }
    EditByTableNameSETNameLocFound(usetable,input1,edit1,edit3,edit5){
        return this.all(
            "UPDATE " + usetable + 
            " SET " + this.getKey(usetable) + "_name = ?, " + this.getKey(usetable) + "_location = ?,"  + this.getKey(usetable) + "_found = ?," +
            " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit1,edit3,edit5, input1]
        )
    }
    EditByTableNameSETNamePerFound(usetable,input1,edit1,edit4,edit5){
        return this.all(
            "UPDATE " + usetable + 
            " SET " + this.getKey(usetable) + "_name = ?, " + this.getKey(usetable) + "_percentage = ?,"  + this.getKey(usetable) + "_found = ?," +
            " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit1,edit4,edit5, input1]
        )
    }
    EditByTableNameSETNameReqLocPer(usetable,input1,edit1,edit2,edit3,edit4){
        return this.all(
            "UPDATE " + usetable + 
            " SET " + this.getKey(usetable) + "_name = ?, " + this.getKey(usetable) + "_requirements = ?,"  + this.getKey(usetable) + "_location = ?," + this.getKey(usetable) + "_percentage = ?," +
            " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit1,edit2,edit3,edit4, input1]
        )
    }
    EditByTableNameSETNameReqLocFound(usetable,input1,edit1,edit2,edit3,edit5){
        return this.all(
            "UPDATE " + usetable + 
            " SET " + this.getKey(usetable) + "_name = ?, " + this.getKey(usetable) + "_requirements = ?,"  + this.getKey(usetable) + "_location = ?," + this.getKey(usetable) + "_found = ?," +
            " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit1,edit2,edit3,edit5, input1]
        )
    }
    EditByTableNameSETNameLocPerFound(usetable,input1,edit1,edit3,edit4,edit5){
        return this.all(
            "UPDATE " + usetable + 
            " SET " + this.getKey(usetable) + "_name = ?, " + this.getKey(usetable) + "_location = ?,"  + this.getKey(usetable) + "_percentage = ?," + this.getKey(usetable) + "_found = ?," +
            " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit1,edit3,edit4,edit5, input1]
        )
    }
    EditByTableNameSETNameReqPerFound(usetable,input1,edit1,edit2,edit4,edit5){
        return this.all(
            "UPDATE " + usetable + 
            " SET " + this.getKey(usetable) + "_name = ?, " + this.getKey(usetable) + "_requirements = ?,"  + this.getKey(usetable) + "_percentage = ?," + this.getKey(usetable) + "_found = ?," +
            " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit1,edit2,edit4,edit5, input1]
        )
    }
    EditByTableNameSETNameReqLocPerFound(usetable,input1,edit1,edit2,edit3,edit4,edit5){
        return this.all(
            "UPDATE " + usetable + 
            " SET " + this.getKey(usetable) + "_name = ?, " + this.getKey(usetable) + "_requirements = ?,"  + this.getKey(usetable) + "_location = ?," + this.getKey(usetable) + "_percentage = ?," + this.getKey(usetable) + "_found = ?," +
            " WHERE "+ this.getKey(usetable) + "_name = ?",
            [edit1,edit2,edit3,edit4,edit5, input1]
        )
    }


    // SEARCH SPECIAL CASES
    SearchByName(input1){
        return this.all(
            "SELECT * FROM Bosses" +
            " WHERE b_name LIKE " + "'%" + input1 + "%' " + 
            " UNION " +
            "SELECT * FROM Charms" +
            " WHERE c_name LIKE " + "'%" + input1 + "%' " +
            " UNION " + 
            "SELECT * FROM Colosseum" +
            " WHERE co_name LIKE " + "'%" + input1 + "%' " +
            " UNION " +
            "SELECT * FROM DreamWorld" +
            " WHERE dw_name LIKE " + "'%" + input1 + "%' " +
            " UNION " +
            "SELECT * FROM Dreamers" +
            " WHERE d_name LIKE " + "'%" + input1 + "%' "  +
            " UNION " +
            "SELECT * FROM Equipment" +
            " WHERE e_name LIKE " + "'%" + input1 + "%' "  +
            " UNION " +
            "SELECT * FROM GodHome" +
            " WHERE gh_name LIKE " + "'%" + input1 + "%' "  +
            " UNION " +
            "SELECT * FROM GrimmTroupe" +
            " WHERE gt_name LIKE " + "'%" + input1 + "%' "  +
            " UNION " +
            "SELECT * FROM MaskShards" +
            " WHERE m_name LIKE " + "'%" + input1 + "%' "  +
            " UNION " +
            "SELECT * FROM NailArt" +
            " WHERE na_name LIKE " + "'%" + input1 + "%' "  +
            " UNION " +
            "SELECT * FROM NailUpgrades" +
            " WHERE nu_name LIKE " + "'%" + input1 + "%' "  +
            " UNION " +
            "SELECT * FROM Spells" +
            " WHERE s_name LIKE " + "'%" + input1 + "%' "  +
            " UNION " +
            "SELECT * FROM VesselFragments" +
            " WHERE v_name LIKE " + "'%" + input1 + "%' "  +
            " UNION " +
            "SELECT * FROM WarriorDreams" +
            " WHERE wd_name LIKE " + "'%" + input1 + "%' " ,
            []
        )
    }
    SearchByReq(input2){
        return this.all(
            "SELECT * FROM Bosses" +
            " WHERE b_requirements LIKE " + "'%" + input2 + "%' " +
            " UNION " +
            "SELECT * FROM Charms" +
            " WHERE c_requirements LIKE " + "'%" + input2 + "%' " +
            " UNION " + 
            "SELECT * FROM Colosseum" +
            " WHERE co_requirements LIKE " + "'%" + input2 + "%' " +
            " UNION " +
            "SELECT * FROM DreamWorld" +
            " WHERE dw_requirements LIKE " + "'%" + input2 + "%' " +
            " UNION " +
            "SELECT * FROM Dreamers" +
            " WHERE d_requirements LIKE " + "'%" + input2 + "%' " +
            " UNION " +
            "SELECT * FROM Equipment" +
            " WHERE e_requirements LIKE " + "'%" + input2 + "%' " +
            " UNION " +
            "SELECT * FROM GodHome" +
            " WHERE gh_requirements LIKE " + "'%" + input2 + "%' " +
            " UNION " +
            "SELECT * FROM GrimmTroupe" +
            " WHERE gt_requirements LIKE " + "'%" + input2 + "%' " +
            " UNION " +
            "SELECT * FROM MaskShards" +
            " WHERE m_requirements LIKE " + "'%" + input2 + "%' " +
            " UNION " +
            "SELECT * FROM NailArt" +
            " WHERE na_requirements LIKE " + "'%" + input2 + "%' " +
            " UNION " +
            "SELECT * FROM NailUpgrades" +
            " WHERE nu_requirements LIKE " + "'%" + input2 + "%' " +
            " UNION " +
            "SELECT * FROM Spells" +
            " WHERE s_requirements LIKE " + "'%" + input2 + "%' " +
            " UNION " +
            "SELECT * FROM VesselFragments" +
            " WHERE v_requirements LIKE " + "'%" + input2 + "%' " +
            " UNION " +
            "SELECT * FROM WarriorDreams" +
            " WHERE wd_requirements LIKE " + "'%" + input2 + "%' ",
            []
        )
    }
    SearchByLoc(input3){
        return this.all(
            "SELECT * FROM Bosses" +
            " WHERE b_location LIKE " + "'%" + input3 + "%' " +
            " UNION " +
            "SELECT * FROM Charms" +
            " WHERE c_location LIKE " + "'%" + input3 + "%' " +
            " UNION " + 
            "SELECT * FROM Colosseum" +
            " WHERE co_location LIKE " + "'%" + input3 + "%' " +
            " UNION " +
            "SELECT * FROM DreamWorld" +
            " WHERE dw_location LIKE " + "'%" + input3 + "%' " +
            " UNION " +
            "SELECT * FROM Dreamers" +
            " WHERE d_location LIKE " + "'%" + input3 + "%' " +
            " UNION " +
            "SELECT * FROM Equipment" +
            " WHERE e_location LIKE " + "'%" + input3 + "%' " +
            " UNION " +
            "SELECT * FROM GodHome" +
            " WHERE gh_location LIKE " + "'%" + input3 + "%' " +
            " UNION " +
            "SELECT * FROM GrimmTroupe" +
            " WHERE gt_location LIKE " + "'%" + input3 + "%' " +
            " UNION " +
            "SELECT * FROM MaskShards" +
            " WHERE m_location LIKE " + "'%" + input3 + "%' " +
            " UNION " +
            "SELECT * FROM NailArt" +
            " WHERE na_location LIKE " + "'%" + input3 + "%' " +
            " UNION " +
            "SELECT * FROM NailUpgrades" +
            " WHERE nu_location LIKE " + "'%" + input3 + "%' " +
            " UNION " +
            "SELECT * FROM Spells" +
            " WHERE s_location LIKE " + "'%" + input3 + "%' " +
            " UNION " +
            "SELECT * FROM VesselFragments" +
            " WHERE v_location LIKE " + "'%" + input3 + "%' " +
            " UNION " +
            "SELECT * FROM WarriorDreams" +
            " WHERE wd_location LIKE " + "'%" + input3 + "%' ",
            []
        )
    }
    SearchByPer(input4){
        return this.all(
            "SELECT * FROM Bosses" +
            " WHERE b_percentage = ? " +
            " UNION " +
            "SELECT * FROM Charms" +
            " WHERE c_percentage = ? " +
            " UNION " + 
            "SELECT * FROM Colosseum" +
            " WHERE co_percentage = ? " +
            " UNION " +
            "SELECT * FROM DreamWorld" +
            " WHERE dw_percentage = ? " +
            " UNION " +
            "SELECT * FROM Dreamers" +
            " WHERE d_percentage = ? " +
            " UNION " +
            "SELECT * FROM Equipment" +
            " WHERE e_percentage = ? " +
            " UNION " +
            "SELECT * FROM GodHome" +
            " WHERE gh_percentage = ? " +
            " UNION " +
            "SELECT * FROM GrimmTroupe" +
            " WHERE gt_percentage = ? " +
            " UNION " +
            "SELECT * FROM MaskShards" +
            " WHERE m_percentage = ? " +
            " UNION " +
            "SELECT * FROM NailArt" +
            " WHERE na_percentage = ? " +
            " UNION " +
            "SELECT * FROM NailUpgrades" +
            " WHERE nu_percentage = ? " +
            " UNION " +
            "SELECT * FROM Spells" +
            " WHERE s_percentage = ? " +
            " UNION " +
            "SELECT * FROM VesselFragments" +
            " WHERE v_percentage = ? " +
            " UNION " +
            "SELECT * FROM WarriorDreams" +
            " WHERE wd_percentage = ? ",
            [input4,input4,input4,input4,input4,input4,input4,input4,input4,input4,input4,input4,input4,input4]
        )
    }
    SearchByFound(input5){
        return this.all(
            "SELECT * FROM Bosses" +
            " WHERE b_found = ? " +
            " UNION " +
            "SELECT * FROM Charms" +
            " WHERE c_found = ? " +
            " UNION " + 
            "SELECT * FROM Colosseum" +
            " WHERE co_found = ? " +
            " UNION " +
            "SELECT * FROM DreamWorld" +
            " WHERE dw_found = ? " +
            " UNION " +
            "SELECT * FROM Dreamers" +
            " WHERE d_found = ? " +
            " UNION " +
            "SELECT * FROM Equipment" +
            " WHERE e_found = ? " +
            " UNION " +
            "SELECT * FROM GodHome" +
            " WHERE gh_found = ? " +
            " UNION " +
            "SELECT * FROM GrimmTroupe" +
            " WHERE gt_found = ? " +
            " UNION " +
            "SELECT * FROM MaskShards" +
            " WHERE m_found = ? " +
            " UNION " +
            "SELECT * FROM NailArt" +
            " WHERE na_found = ? " +
            " UNION " +
            "SELECT * FROM NailUpgrades" +
            " WHERE nu_found = ? " +
            " UNION " +
            "SELECT * FROM Spells" +
            " WHERE s_found = ? " +
            " UNION " +
            "SELECT * FROM VesselFragments" +
            " WHERE v_found = ? " +
            " UNION " +
            "SELECT * FROM WarriorDreams" +
            " WHERE wd_found = ? ",
            [input5,input5,input5,input5,input5,input5,input5,input5,input5,input5,input5,input5,input5,input5]
        )
    }
    SearchByLocFound(input3,input5){
        return this.all(
            "SELECT * FROM Bosses" +
            " WHERE b_location LIKE " + "'%" + input3 + "%' " + " AND " + "b_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM Charms" +
            " WHERE c_location LIKE " + "'%" + input3 + "%' " + " AND " + "c_found = " + "'" + input5 + "'" +
            " UNION " + 
            "SELECT * FROM Colosseum" +
            " WHERE co_location LIKE " + "'%" + input3 + "%' " + " AND " + "co_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM DreamWorld" +
            " WHERE dw_location LIKE " + "'%" + input3 + "%' " + " AND " + "dw_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM Dreamers" +
            " WHERE d_location LIKE " + "'%" + input3 + "%' " + " AND " + "d_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM Equipment" +
            " WHERE e_location LIKE " + "'%" + input3 + "%' " + " AND " + "e_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM GodHome" +
            " WHERE gh_location LIKE " + "'%" + input3 + "%' " + " AND " + "gh_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM GrimmTroupe" +
            " WHERE gt_location LIKE " + "'%" + input3 + "%' " + " AND " + "gt_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM MaskShards" +
            " WHERE m_location LIKE " + "'%" + input3 + "%' " + " AND " + "m_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM NailArt" +
            " WHERE na_location LIKE " + "'%" + input3 + "%' " + " AND " + "na_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM NailUpgrades" +
            " WHERE nu_location LIKE " + "'%" + input3 + "%' " + " AND " + "nu_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM Spells" +
            " WHERE s_location LIKE " + "'%" + input3 + "%' " + " AND " + "s_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM VesselFragments" +
            " WHERE v_location LIKE " + "'%" + input3 + "%' " + " AND " + "v_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM WarriorDreams" +
            " WHERE wd_location LIKE " + "'%" + input3 + "%' " + " AND " + "wd_found = " + "'" + input5 + "'" ,
            []
        )
    }
    SearchByReqFound(input2,input5){
        return this.all(
            "SELECT * FROM Bosses" +
            " WHERE b_requirements LIKE " + "'%" + input2 + "%' " + " AND " + "b_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM Charms" +
            " WHERE c_requirements LIKE " + "'%" + input2 + "%' " + " AND " + "c_found = " + "'" + input5 + "'" +
            " UNION " + 
            "SELECT * FROM Colosseum" +
            " WHERE co_requirements LIKE " + "'%" + input2 + "%' " + " AND " + "co_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM DreamWorld" +
            " WHERE dw_requirements LIKE " + "'%" + input2 + "%' " + " AND " + "dw_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM Dreamers" +
            " WHERE d_requirements LIKE " + "'%" + input2 + "%' " + " AND " + "d_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM Equipment" +
            " WHERE e_requirements LIKE " + "'%" + input2 + "%' " + " AND " + "e_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM GodHome" +
            " WHERE gh_requirements LIKE " + "'%" + input2 + "%' " + " AND " + "gh_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM GrimmTroupe" +
            " WHERE gt_requirements LIKE " + "'%" + input2 + "%' " + " AND " + "gt_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM MaskShards" +
            " WHERE m_requirements LIKE " + "'%" + input2 + "%' " + " AND " + "m_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM NailArt" +
            " WHERE na_requirements LIKE " + "'%" + input2 + "%' " + " AND " + "na_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM NailUpgrades" +
            " WHERE nu_requirements LIKE " + "'%" + input2 + "%' " + " AND " + "nu_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM Spells" +
            " WHERE s_requirements LIKE " + "'%" + input2 + "%' " + " AND " + "s_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM VesselFragments" +
            " WHERE v_requirements LIKE " + "'%" + input2 + "%' " + " AND " + "v_found = " + "'" + input5 + "'" +
            " UNION " +
            "SELECT * FROM WarriorDreams" +
            " WHERE wd_requirements LIKE " + "'%" + input2 + "%' " + " AND " + "wd_found = " + "'" + input5 + "'" ,
            []
        )
    }
}

module.exports = datamain