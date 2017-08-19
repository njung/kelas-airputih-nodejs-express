require('./db'); // Inisiasi db
var express = require('express'); // panggil modul express
var bodyParser = require('body-parser');
var path = require('path');
var app = express(); // Inisiasi express

// Setel render engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Setel body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

var notes = require('./controllers/notes'); // Panggil kontroler

// Router
app.get('/', function(req, res) { // Tangani route '/'
  console.log('ada yang akses halaman utama nih.');
  res.send('hai');
});
app.post('/notesave', notes.create);

app.listen(3000, function() { // Jalanin
  console.log('Webnya udah jalandong. Cek TKP.'); // Sudah benar-benar jalan
});
