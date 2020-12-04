const sqlite3 = require("sqlite3");
const Promise = require("bluebird");

class test {
    constructor(dbFilePath){
        this.db = new sqlite3.Database(dbFilePath, (err) => {
            if(err) {
                console.log("Could not connect to database",err)
            } else {
                console.log("Connected to database")
            }
        })
    }
    RUN(){
    
        var v = document.getElementById("TASK").value;
        
        if(v == "SEARCH"){
            document.getElementById("SELECTERROR").innerHTML = "";
            var input1 = document.getElementById("input1");
            var input2 = document.getElementById("input2");
            var input3 = document.getElementById("input3");
            var input4 = document.getElementById("input4");
            var input5 = document.getElementById("input5");
            SEARCH(input1.value,input2.value,input3.value,input4.value,input5.value)
            alert(input1.value);
        } else if(v == "ADD"){
            document.getElementById("SELECTERROR").innerHTML = "";
            var input1 = document.getElementById("input1");
            var input2 = document.getElementById("input2");
            var input3 = document.getElementById("input3");
            var input4 = document.getElementById("input4");
            var input5 = document.getElementById("input5");
            alert("ADD");
        } else if(v == "DELETE"){
            document.getElementById("SELECTERROR").innerHTML = "";
            var input1 = document.getElementById("input1");
            var input2 = document.getElementById("input2");
            var input3 = document.getElementById("input3");
            var input4 = document.getElementById("input4");
            var input5 = document.getElementById("input5");
            alert("DELETE");
        } else if(v == "EDIT"){
            document.getElementById("SELECTERROR").innerHTML = "";
            var input1 = document.getElementById("input1");
            var input2 = document.getElementById("input2");
            var input3 = document.getElementById("input3");
            var input4 = document.getElementById("input4");
            var input5 = document.getElementById("input5");
            alert("EDIT");
        } else {
            //alert("None Selected");
            document.getElementById("SELECTERROR").innerHTML = "Please Select an Option";
        }
    
    
    }
    
    SEARCH(){
        var db = openDatabase("database","1.0","0",2*1024*1024)
    
    }
    
    ADD(){
    
    }
    
    DELETE(){
        
    }
    
    EDIT(){
    
    }
}


