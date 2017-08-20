var notesModel = require('../models/notes');

// Kontroler yang ada di sini berkasi menggunakan 
// fungsi-fungsi dari model yang sudah dibuat
exports.add = function(req, res, next) {
    res.send('add/edit');
}

exports.save = function(req, res, next) {
    var obj = {
      title : req.body.title,
      body : req.body.body,
    }
    if (req.body.docreate === "create") {
      notesModel.create(obj, function(err){
        res.redirect('/');
      });
    } else {
      notesModel.update(req.body.id, obj, function(err){
        res.redirect('/noteview/' + req.body.id);
      })
    }
}

exports.list = function(req, res, next) {
  notesModel.list(function(err, notes) {
    res.send(notes);
  })
}

exports.view = function(req, res, next) {
    if (req.params.id) {
      notesModel.read(req.params.id, function(err, note){
        res.send(note);
      });
    }
}

exports.edit = function(req, res, next) {
  if (req.params.id) {
    notesModel.read(req.params.id, function(err, note){
      res.send(note);
    });
  }
}

exports.destroy = function(req, res, next) {
  notesModel.read(req.params.id, function(err, note) {
    res.send(note);
  });
}

exports.dodestroy = function(req, res, next) {
  notesModel.destroy(req.params.id, function(err){
    res.redirect('/');
  });
}
