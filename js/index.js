const express = require("express");
const { dirname } = require("path");
const app = express();


app.get("/", function (req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(8080)