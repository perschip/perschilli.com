var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('*', function(req, res) {
    res.render('404');
});





app.listen(3000);