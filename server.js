// Create express app
var express = require("express")
var app = express()

const datamain = require('./main.js')
var datab = new datamain('database.sqlite')

// Server port
var HTTP_PORT = 8092

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

// Start server
app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

// Root endpoint
app.get("/", (req, res, next) => {
    res.json({ "message": "Ok" })
});

// Insert here other API endpoints
app.get("/task", (req, res, next) => {
    // console.log("TEST")
    let task = req.query.task;
    let usetable = req.query.usetable;
    let input1 = req.query.input1;
    let input2 = req.query.input2;
    let input3 = req.query.input3;
    let input4 = req.query.input4;
    let input5 = req.query.input5;
    // console.log(input1);
    let edit1 = req.query.edit1;
    let edit2 = req.query.edit2;
    let edit3 = req.query.edit3;
    let edit4 = req.query.edit4;
    let edit5 = req.query.edit5;

    if(task != "EDIT"){
        datab.RUN(task,usetable,input1,input2,input3,input4,input5)
        .then((table) => {
            res.json({
                "message": "success",
                "data": table
            })
        })
        // .catch((err) => {
        //     res.status(400).json({ "error": err.message });
        //     return;
        // })
    } else if(task == "EDIT"){
        datab.EDIT(task,usetable,input1,input2,input3,input4,input5,edit1,edit2,edit3,edit4,edit5)
        .then((table) => {
            res.json({
                "message": "success",
                "data": table
            })
        })
    }
    

});


// Default response for any other request
app.use(function (req, res) {
    res.status(404);
});
