const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

//Rotas
app.get('/home', function(req, res){
    res.render('home');
});

/*app.get('/', function(req, res){
    res.render('');
});*/

app.listen(8080);