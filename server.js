var express = require('express');
var app = express();


var things = require('./things.js');

app.use('/things', things);

app.get('/things/:name/:id', function(req, res) {
    res.send('ID: ' + req.params.id + " and name: " + req.params.name);
})

app.get('/things/:id([0-9]{5})', function(req, res) {
    res.send('ID: ' + req.params.id);
})

app.get('*', function(req, res) {
    res.send('Sorry, this is not a valid route');
});

app.use('/things', function(req, res, next) {
    console.log("A new request received at " + Date.now());
    next();
});

app.get('/things', function(req,res) {
    res.send('Things');
});


app.get('/hello', function(req,res) {
    res.send("Hello World");
});

app.post('/hello', function(req,res) {
    res.send("You just called the post method at '/hello'!\n");
});

app.all('/test', function(req, res) {
    res.send("HTTP method doesn't have any effect on this route!");
});


app.listen(3000);
