var mongoose = require('mongoose'); // panggil modul mongoose
var noteSchema = mongoose.Schema({  // Buat skema koleksi
  title : String,
  body : String,
});
mongoose.model('Note', noteSchema); // Inisiasi skema koleksi
var notesModel = mongoose.model('Note'); // Bungkus modelnya agar siap pakai

exports.create = function(obj, cb) {  // CREATE
  notesModel.create(obj, function(err) {
    if (err) return cb(err); // Tangani galat
    return cb();
  });
}

exports.list = function(cb) { // LIST
  notesModel.find({}, function(err, result) {
    if (err) return cb(err); // Tangani galat
    return cb(null, result); // Kembalikan hasil
  });
}
