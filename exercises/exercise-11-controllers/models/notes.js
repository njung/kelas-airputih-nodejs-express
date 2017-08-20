var mongoose = require('mongoose'); 
var noteSchema = mongoose.Schema({
  title : String,
  body : String,
});
mongoose.model('note', noteSchema); 
var notesModel = mongoose.model('note'); 

exports.create = function(obj, cb) {
  return notesModel.create({
    title : obj.title,
    body : obj.body,
  }, function(err, result){
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
      return cb(null, note);
     })
    })
  })
}

exports.read = function(id, cb) {
  return notesModel.findById(id, function(err, result){
    return cb(null, result);
  });
}

exports.list = function(cb) {
  notesModel.find({}, function(err, result){
    return cb(null, result);
  });
}

exports.destroy = function(id, cb) {
  return notesModel.remove({_id: id}, function(err) { 
    return cb(null);
  })
}
