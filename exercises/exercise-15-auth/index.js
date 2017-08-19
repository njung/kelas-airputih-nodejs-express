require('./db'); // Inisiasi db
var express = require('express'); // panggil modul express
var bodyParser = require('body-parser');
var path = require('path');
var cookieSession = require('cookie-session');
var app = express(); // Inisiasi express

// Setel render engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Setel body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));

var path = require('path');
app.use(express.static(path.join(__dirname, 'public'))); // Ekpos berkas statis dari direktori public

var notes = require('./controllers/notes'); // Panggil kontroler

//Auth
app.use(cookieSession({ keys: ['example'] }));
app.use(function(req, res, next) {
  if ((
    req.url === '/noteadd' ||
    req.url === '/notesave' ||
    req.url === '/notedestroy' ||
    req.url === '/notedodestroy' ||
    req.url === '/useradd' ||
    req.url === '/usersave' ||
    req.url === '/userdestroy' ||
    req.url === '/userdodestroy'
  ) && (!req.session || !req.session.authenticated)) {
    return res.render('login', {title : 'Login', session: req.session});
  }
  next();
});

// Router
app.get('/', notes.list);
app.get('/noteadd', notes.add);
app.post('/notesave', notes.save);
app.get('/noteview/:id', notes.view);
app.get('/noteedit/:id', notes.edit);
app.get('/notedestroy/:id', notes.destroy);
app.post('/notedodestroy', notes.dodestroy);

var users = require('./controllers/users'); // Panggil kontroler

app.get('/users', users.list);
app.get('/useradd', users.add);
app.post('/usersave', users.save);
app.get('/userview/:id', users.view);
app.get('/useredit/:id', users.edit);
app.get('/userdestroy/:id', users.destroy);
app.post('/userdodestroy', users.dodestroy);

app.get('/login', users.login);
app.post('/dologin', users.dologin);
app.get('/logout', users.logout);

app.listen(3000, function() { // Jalanin
  console.log('Webnya udah jalandong. Cek TKP.'); // Sudah benar-benar jalan
});
