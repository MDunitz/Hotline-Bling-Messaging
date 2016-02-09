var express = require('express')
var accountSid = 'AC004e85a584d80f82ec78a1d8a38fa17a';
var client = require('twilio')(accountSid, authToken);
var morgan = require('morgan')
var http = require('http');
var path = require('path')
var bodyparser = require('body-parser')


var app = express()

app.set('port', 8081);
console.log('-----')
//console.log(path.normalize('/client/app/index.html'))
app.use(express.static(path.normalize('/client/app/index.html')));
//app.use(express.static(path.normalize(__dirname + '/')));
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }));

app.listen(8081, function(err){
  if(err){
    console.log(err)
  }
  console.log('app listening on port 8080!')
})

app.get('/', function(req, res){
  res.render('/client/app/index.html');

});

app.post('/send', function(req, res){
  console.log(req)
  console.log(res)
  res.end();
})


 
client.messages.create({ 
    to: "+17148550762", 
    from: "+15627624447", 
    body: "Hey Jenny! Good luck on the bar exam!", 
    mediaUrl: "http://farm2.static.flickr.com/1075/1404618563_3ed9a44a3a.jpg",  
}, function(err, message) { 
    console.log(message.body); 
});

// client.sms.shortCodes("SC6b20cb705c1e8f00210049b20b70fce2").get(function(err, shortCode) {
//     console.log(shortCode.shortCode);
// });

// client.sendMessage({
//     //to:'+7148550762', 
//     to:'+4085200843', // Any number Twilio can deliver to
//     from: '+5627624447', // A number you bought from Twilio and can use for outbound communication
//     body: 'word to your mother.' // body of the SMS message

// }, function(err, responseData) { //this function is executed when a response is received from Twilio

//     if (!err) { // "err" is an error received during the request, if any

//         // "responseData" is a JavaScript object containing data received from Twilio.
//         // A sample response from sending an SMS message is here (click "JSON" to see how the data appears in JavaScript):
//         // http://www.twilio.com/docs/api/rest/sending-sms#example-1

//         console.log(responseData.from); // outputs "+14506667788"
//         console.log(responseData.body); // outputs "word to your mother."

//     }
// });