// function clickHello(){
//     alert("THIS BUTTON WORKS");
// }
// const sqlite3 = require("sqlite3");
// const Promise = require("bluebird");

function RUN(){
    var v = document.getElementById("TASK").value;
    var db = openDatabase('database', '1.0', 'd', 2 * 1024 * 1024);
    if(v == "SEARCH"){
        document.getElementById("SELECTERROR").innerHTML = "";
        var input1 = document.getElementById("input1");
        var input2 = document.getElementById("input2");
        var input3 = document.getElementById("input3");
        var input4 = document.getElementById("input4");
        var input5 = document.getElementById("input5");
        SEARCH(db,input1.value,input2.value,input3.value,input4.value,input5.value)
        //alert(input1.value);
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

function SEARCH(db,input1,input2,input3,input4,input5){
    db.transaction(function (tx){
        tx.exqcuteSql("SELECT * FROM Bosses");
    })
}