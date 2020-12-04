// function clickHello(){
//     alert("THIS BUTTON WORKS");
// }
// const sqlite3 = require("sqlite3");
// const Promise = require("bluebird");




function RUN(){
    
    var v = document.getElementById("TASK").value;
    
    if(v == "SEARCH"){
        document.getElementById("SELECTERROR").innerHTML = "";
        var input1 = document.getElementById("input1");
        alert(input1);
    } else if(v == "ADD"){
        alert("ADD");
    } else if(v == "DELETE"){
        alert("DELETE");
    } else if(v == "EDIT"){
        alert("EDIT");
    } else {
        //alert("None Selected");
        document.getElementById("SELECTERROR").innerHTML = "Please Select an Option";
    }


}

function SEARCH(){

}