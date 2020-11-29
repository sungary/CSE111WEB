// function clickHello(){
//     alert("THIS BUTTON WORKS");
// }

function RUN(){
    var v = document.getElementById("TASK").value;
    
    if(v == "SEARCH"){
        alert("SEARCH");
    } else if(v == "ADD"){
        alert("ADD");
    } else if(v == "DELETE"){
        alert("DELETE");
    } else if(v == "EDIT"){
        alert("EDIT");
    } else {
        //alert("None Selected");
        document.getElementById("SELECTERROR").innerHTML = "Please Select an Option"
    }


}