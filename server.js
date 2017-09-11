var express = require('express');
var mongoose=require('mongoose');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var routes = require('./routes/route.js');
mongoose.Promise = require('bluebird');
var app = express();

mongoose.connect('mongodb://sofittech:sofitpush@ds121622.mlab.com:21622/push');
mongoose.connection.on('connected',function (){
  console.log('connected to database');
});


app.use(bodyParser.urlencoded({
  extended:true
}));
app.use(bodyParser.json());
app.use(routes);



app.all('*',(req,res)=>res.send({msg:'Page not found'}));
app.listen(port,function(){
  console.log('app is live at port : '+port);
});

