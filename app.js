var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
port = process.env.PORT || 8080;
var routes = require('./routes/route.js')

app.use(cors());
app.options('*', cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
    res.send('this nodeJS app works');
});

app.post('/register', routes.register);

app.listen(port, function(req, res){
    console.log('server is listening on port %s', port);
});