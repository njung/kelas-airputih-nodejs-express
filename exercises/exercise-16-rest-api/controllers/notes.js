var notesModel = require('../models/notes');

exports.add = function(req, res, next) {
    res.render('noteedit', {
        title: "Add a Note",
        docreate: true,
        noteId: "",
        note: undefined,
        session : req.session,
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
        if (err) return res.send(err);
        res.redirect('/');
      });
    } else {
      notesModel.update(req.body.id, obj, function(err){
        if (err) return res.send(err);
        res.redirect('/noteview/' + req.body.id);
      })
    }
}

exports.list = function(req, res, next) {
  notesModel.list(function(err, notes) {
    if (err) return res.send(err);
    // Jika ContentType adalah JSON, kembalikan JSON
    if (req.headers['content-type'] == 'application/json') { 
      return res.send(notes);
    }
    res.render('index', {
        title: 'Notes',
        notes: notes,
        session : req.session,
    });
  })
}

exports.view = function(req, res, next) {
    if (req.params.id) {
      notesModel.read(req.params.id, function(err, note){
        if (err) return res.send(err);
        res.render('noteview', {
          title: note.title,
          note: note,
          session : req.session,
        });
      });
    }
}

exports.edit = function(req, res, next) {
  if (req.params.id) {
    notesModel.read(req.params.id, function(err, note){
      if (err) return res.send(err);
      res.render('noteedit', {
        title: note ? ("Edit " + note.title) : "Add a Note",
        docreate: note ? false : true,
        noteId: req.params.id,
        note: note,
        session : req.session,
      });
    });
  }
}

exports.destroy = function(req, res, next) {
  notesModel.read(req.params.id, function(err, note) {
    if (err) return res.send(err);
    res.render('notedestroy', {
        title: note ? note.title : "",
        noteId: req.params.id,
        note: note,
        session : req.session,
    });
  });
}

exports.dodestroy = function(req, res, next) {
  notesModel.destroy(req.body.id, function(err){
    if (err) return res.send(err);
    res.redirect('/');
  });
}
