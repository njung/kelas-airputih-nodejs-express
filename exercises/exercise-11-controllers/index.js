require('./db');
var express = require('express'); 
var bodyParser = require('body-parser');
var path = require('path');
var app = express(); 

// Setel body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

var notes = require('./controllers/notes'); // Panggil kontroler

// Router
// Setel router ke kontroler
app.get('/', notes.list);
app.get('/noteadd', notes.add);
app.post('/notesave', notes.save);
app.get('/noteview/:id', notes.view);
app.get('/noteedit/:id', notes.edit);
app.get('/notedestroy/:id', notes.destroy);
app.post('/notedodestroy', notes.dodestroy);

app.listen(3000, function() {
  console.log('Webnya udah jalandong. Cek TKP.'); 
});
