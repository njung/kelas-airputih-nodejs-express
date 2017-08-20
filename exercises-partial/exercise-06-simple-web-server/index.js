var express = require('express'); // panggil modul express
var app = express(); // Inisiasi express

// Router
app.get('/', function(req, res) { // Tangani route '/'
  res.send('hai');
});

app.listen(3000, function() { // Jalanin
  console.log('Webnya udah jalandong. Cek TKP.'); // Sudah benar-benar jalan
});
