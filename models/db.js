var chalk = require('chalk');
var mongoose = require('mongoose');

dbURL = 'mongodb://127.0.0.1:27017/chatApp';

mongoose.connect(dbURL);

mongoose.connection.on('connected', function(){
    console.log(chalk.green('mongoDB connected'));
});

mongoose.connection.on('error', function(err){
    console.log(chalk.red('mongoDB error-> '+ err));
});

mongoose.connection.on('disconnected', function(){
    console.log(chalk.yellow('mongoDB disconnected'));
});

var userRegister = new mongoose.Schema({
    
})