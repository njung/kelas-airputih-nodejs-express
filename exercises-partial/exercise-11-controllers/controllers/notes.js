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
      // TODO create
    } else {
      // TODO update
    }
}

exports.list = function(req, res, next) {
  // TODO list
}

exports.view = function(req, res, next) {
    if (req.params.id) {
      // TODO read
    }
}

exports.edit = function(req, res, next) {
  if (req.params.id) {
    // TODO read
  }
}

exports.destroy = function(req, res, next) {
  // TODO read
}

exports.dodestroy = function(req, res, next) {
  // TODO destroy
}
