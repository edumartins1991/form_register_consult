const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const handlebars = require("express-handlebars");      

app.use(express.static('public'));
app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

//Rotas
app.get('/home', function(req, res){
    res.render('home');
});

app.post('/sucessform', function(req, res){
    res.send("Nome " + req.body.name + "Sobrenome " + req.body.lastname + "email "+ req.body.email);
});

app.listen(8080);