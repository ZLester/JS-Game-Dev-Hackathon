var express = require('express');
var app = express();
var port = 1337;

app.use(express.static(__dirname + '/client'));

console.log('HR Game Hackathon Demo Listening on port ' + port);
app.listen(port);
