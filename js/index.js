const express = require("express");
const app = express();
const bodyParser = require("body-parser")
const moment = require('moment')
const Consults = require("./models/Consults")

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
app.get('/Consults', function(req, res){
    Consults.findAll({order: [['id', 'DESC']]}).then(function(consults){
        res.send('teste '+ consults[0].name.toString());
    })
    
});

app.get('/cad-user', function(req, res){
    res.render('cad-user');
});

app.post('/add-users', function(req, res){
    Consults.create({
        name: req.body.name,
        lastname: req.body.lastname
    }).then(function(){
        res.redirect('/Consults')
    }).catch(function(erro){
        res.send("Erro" + erro)
    })
 
})

app.listen(8080);