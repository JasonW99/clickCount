'use strict';


// var express = require('express');

// pass the Express application as an argument to our routes function object
var express = require('express'),
    routes = require('./app/routes/index.js');

var app = express();

routes(app);

// send direct message to the browser
// app.get('/', function (req, res) {
//     res.send('Hello world!');
// });

// send a html page to the browser
// app.get('/', function (req, res) {
//     res.sendFile(process.cwd() + '/test_index.html');
// });



app.listen(3000, function () {
    console.log('Listening on port 3000...');
});
