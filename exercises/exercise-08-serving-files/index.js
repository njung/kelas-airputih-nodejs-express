var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

app.use(express.static(path.join(__dirname, 'public'))); // Ekpos berkas statis dari direktori public

// Routers
app.get('/', function(req, res) {
  res.send('hai');
});

app.get('/about', function(req, res) {
  res.send('<img src="https://emos.plurk.com/6e06dfa77485943317d190b36b15800c_w48_h48.gif">');
});

app.get('/cat', function(req, res) {
  fs.createReadStream(__dirname + '/cat.gif').pipe(res);  // Stream ke res
});

app.listen(3000, function() {
  console.log('Webnya udah jalandong. Cek TKP.'); 
});
