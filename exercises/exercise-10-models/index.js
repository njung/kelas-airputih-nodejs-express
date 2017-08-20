require('./db'); 
var express = require('express'); 
var app = express(); 

// Router
app.get('/', function(req, res) {
  res.send('hai');
});

app.listen(3000, function() {
  console.log('Webnya udah jalandong. Cek TKP.'); 
});
