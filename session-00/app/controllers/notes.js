var notesModel = require('../models/notes');

exports.create = function(req, res) {
  if (req.body.docreate === "create") {
    var obj = {
      title : req.body.title,
      body : req.body.body
    }
    notesModel.create(obj, function(err) {
      if (err) return res.send(err);
      res.redirect('/');
    });
  }
}
