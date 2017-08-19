var express = require('express'); // panggil modul express
var app = express(); // Inisiasi express
var path = require('path');
var fs = require('fs');

app.use(express.static(path.join(__dirname, 'public'))); // Ekpos berkas statis dari direktori public

// Routers
app.get('/', function(req, res) { // Tangani route '/'
  res.send('hai');
});

app.get('/about', function(req, res) { // Tangani route '/about'
  res.send('<img src="https://emos.plurk.com/6e06dfa77485943317d190b36b15800c_w48_h48.gif">');
});

app.get('/cat', function(req, res) { // Tangani route '/cat'
  fs.createReadStream(__dirname + '/cat.gif').pipe(res);  // Stream ke res
});

app.listen(3000, function() { // Jalanin
  console.log('Webnya udah jalandong. Cek TKP.'); // Sudah benar-benar jalan
});
