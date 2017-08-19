var mongoose = require('mongoose'); // panggil modul mongoose
var noteSchema = mongoose.Schema({  // Buat skema koleksi
  title : String,
  body : String,
});
mongoose.model('note', noteSchema); // Inisiasi skema koleksi
var notesModel = mongoose.model('note'); // Bungkus modelnya agar siap pakai

exports.create = function(obj, cb) {
  return notesModel.create({
    title : obj.title,
    body : obj.body,
  }, function(err, result){
    if (err) return cb(err);
    return cb();
  })
}

exports.update = function(id, obj, cb) {
  return notesModel.findById(id, function(err, note) {
    note.update({ 
      title : obj.title,
      body : obj.body,
    }, function(err){
     notesModel.findById(id, function(err, note) {
      if (err) return cb(err);
      return cb(null, note);
     })
    })
  })
}

exports.read = function(id, cb) {
  return notesModel.findById(id, function(err, result){
    if (err) return cb(err);
    return cb(null, result);
  });
}

exports.list = function(cb) {
  notesModel.find({}, function(err, result){
    if (err) return cb(err);
    return cb(null, result);
  });
}

exports.destroy = function(id, cb) {
  return notesModel.remove({_id: id}, function(err) { 
    if (err) return cb(err);
    return cb(null);
  })
}
