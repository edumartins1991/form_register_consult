const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "consultuser",
  password: "123456@Bc",
  database: "consult",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
    const { name } = req.body;
    const { lastname } = req.body;
  
    let mysql = "INSERT INTO consults ( name, lastname) VALUES (?, ?)";
    db.query(mysql, [name, lastname], (err, result) => {
      res.send(result);
    });
  });

  app.post("/search", (req, res) => {
    const { name } = req.body;
    const { lastname } = req.body;  
    let mysql =
      "SELECT * from consults WHERE name = ? AND lastname = ?";
    db.query(mysql, [name, lastname], (err, result) => {
      if (err) res.send(err);
      res.send(result);
    });
  });
  
  app.get("/getCards", (req, res) => {
    let mysql = "SELECT * FROM consults";
    db.query(mysql, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });

  app.put("/edit", (req, res) => {
    const { id } = req.body;
    const { name } = req.body;
    const { lastname } = req.body;
    let mysql = "UPDATE consults SET name = ?, lastname = ? WHERE id = ?";
    db.query(mysql, [name, lastname, id], (err, result) => {
      if (err) {
        res.send(err);
      } else {
        res.send(result);
      }
    });
  });
  
  app.delete("/delete/:id", (req, res) => {
    const { id } = req.params;
    let mysql = "DELETE FROM consults WHERE id = ?";
    db.query(mysql, id, (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  });
  
  


app.listen (3001, () =>{
    console.log("rodando servidor")
});