var express = require('express'); // panggil modul express
var app = express(); // Inisiasi express

// Routers
app.get('/', function(req, res) { // Tangani route '/'
  res.send('hai');
});

app.get('/about', function(req, res) { // Tangani route '/about'
  res.send('<img src="https://emos.plurk.com/6e06dfa77485943317d190b36b15800c_w48_h48.gif">');
});

app.get('/other-pages', function(req, res) { // Tangani route '/other-pages'
  res.send('Just another page');
});

app.listen(3000, function() { // Jalanin
  console.log('Webnya udah jalandong. Cek TKP.'); // Sudah benar-benar jalan
});
