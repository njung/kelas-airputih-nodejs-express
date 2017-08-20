require('./db');
var express = require('express'); 
var bodyParser = require('body-parser');
var path = require('path');
var cookieSession = require('cookie-session');
var app = express(); 

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')));


// Auth
app.use(cookieSession({ keys: ['example'] }));
app.use(function(req, res, next) {
  if ((
    req.url === '/noteadd' || // Route-router yang akan dihadang auth
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

var notes = require('./controllers/notes');

// Router
app.get('/', notes.list);
app.get('/noteadd', notes.add);
app.post('/notesave', notes.save);
app.get('/noteview/:id', notes.view);
app.get('/noteedit/:id', notes.edit);
app.get('/notedestroy/:id', notes.destroy);
app.post('/notedodestroy', notes.dodestroy);

var users = require('./controllers/users');

app.get('/users', users.list);
app.get('/useradd', users.add);
app.post('/usersave', users.save);
app.get('/userview/:id', users.view);
app.get('/useredit/:id', users.edit);
app.get('/userdestroy/:id', users.destroy);
app.post('/userdodestroy', users.dodestroy);


// Router untuk auth
app.get('/login', users.login);
app.post('/dologin', users.dologin);
app.get('/logout', users.logout);

app.listen(3000, function() { 
  console.log('Webnya udah jalandong. Cek TKP.'); 
});
