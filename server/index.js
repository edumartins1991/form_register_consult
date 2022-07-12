const express = require ("express");
const app = express();
const db = require ("mysql");
const cors = require ("cors")

const db = mysql.createPoll({
    host: "localhost",
    user: "consultuser",
    password: "123456@Bc",
    database: "consult"
})

app.get("/", (req, res) => {
    res.send("uhauhauahu");
});

app.listen (3001, () =>{
    console.log("rodando servidor")
});