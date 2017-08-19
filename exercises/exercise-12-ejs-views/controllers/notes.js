var notesModel = require('../models/notes');

exports.add = function(req, res, next) {
    res.render('noteedit', {
        title: "Add a Note",
        docreate: true,
        noteId: "",
        note: undefined
    });
}

exports.save = function(req, res, next) {
    console.log(req.body);
    var obj = {
      title : req.body.title,
      body : req.body.body,
    }
    if (req.body.docreate === "create") {
      console.log(obj);
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
    res.render('index', {
        title: 'Notes',
        notes: notes
    });
  })
}

exports.view = function(req, res, next) {
    if (req.params.id) {
      notesModel.read(req.params.id, function(err, note){
        res.render('noteview', {
            title: note.title,
            note: note
        });
      });
    }
}

exports.edit = function(req, res, next) {
  if (req.params.id) {
    notesModel.read(req.params.id, function(err, note){
      res.render('noteedit', {
        title: note ? ("Edit " + note.title) : "Add a Note",
        docreate: note ? false : true,
        noteId: req.params.id,
        note: note
      });
    });
  }
}

exports.destroy = function(req, res, next) {
  notesModel.read(req.params.id, function(err, note) {
    res.render('notedestroy', {
        title: note ? note.title : "",
        noteId: req.params.id,
        note: note
    });
  });
}

exports.dodestroy = function(req, res, next) {
  notesModel.destroy(req.body.id, function(err){
    res.redirect('/');
  });
}
