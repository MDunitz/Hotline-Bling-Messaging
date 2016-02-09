var express = require('express')
var accountSid = 'AC004e85a584d80f82ec78a1d8a38fa17a';
var authToken = '2781dcfd7dace6a52d382d02ad3cd398'; 
var client = require('twilio')(accountSid, authToken);
var morgan = require('morgan')
var http = require('http');
var path = require('path')
var bodyparser = require('body-parser')
var Promise = require("bluebird");

var app = express()

app.set('port', 8080);
console.log('-----')
//console.log(path.normalize('/client/app/index.html'))
app.use(express.static(path.join(__dirname, '../client/app')));
//app.use(express.static(path.normalize(__dirname + '/')));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));



var from;
var to;
var messages;
var mediaUrl;

app.post('/send', function(req, res){
  from = req.body.from;
  to = req.body.to;
  messages = req.body.messages;
  mediaUrl = req.body.mediaUrl;
  console.log(req.body.from)
  console.log(req.body.to)
  console.log(req.body.messages)
  console.log(req.body.mediaUrl)
  


  if(from&&to&&messages && mediaUrl){
   client.messages.create({ 
     to: "+"+to, 
     from: "+"+from, 
     body: messages, 
     mediaUrl: mediaUrl,  
 }, function(err, message) { 
     if(err){
       console.log(err)
     } else {
       console.log(message); 
       res.send(to  + ": " + message);
       res.end()
     }
     
    });   
  } 
});


app.listen(8080, function(err){
  if(err){
    console.log(err)
  }
  console.log('app listening on port 8080!')
})



